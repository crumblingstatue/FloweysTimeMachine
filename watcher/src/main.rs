extern crate notify;
extern crate ini;
extern crate ansi_term;

use notify::{INotifyWatcher, Watcher};
use std::sync::mpsc::channel;
use std::fs::File;
use std::path::Path;
use std::io::prelude::*;
use ini::Ini;
use ansi_term::Colour::*;

fn load_file<P1: AsRef<Path>, P2: AsRef<Path>>(base_path: P1, filename: P2) -> Option<String> {
    let mut file = match File::open(base_path.as_ref().join(filename)) {
        Ok(file) => file,
        Err(_) => return None,
    };
    let mut text = String::new();
    file.read_to_string(&mut text).unwrap();
    Some(text)
}

fn load_ini<P1: AsRef<Path>, P2: AsRef<Path>>(base_path: P1, filename: P2) -> Option<Ini> {
    let text = match load_file(base_path, filename) {
        Some(text) => text,
        None => return None,
    };
    Some(Ini::load_from_str(&text).unwrap())
}

fn main() {
    let dir = std::env::args().skip(1).next().expect("Expected directory as argument");
    let (tx, rx) = channel();
    let mut watcher = INotifyWatcher::new(tx).unwrap();
    watcher.watch(&dir).unwrap();
    let mut file0 = load_file(&dir, "file0");
    let mut ini = load_ini(&dir, "undertale.ini");
    loop {
        use notify::op;
        let event = rx.recv().unwrap();
        println!("{:?}", event);
        let path = event.path.unwrap();
        match path.file_name().unwrap().to_str().unwrap() {
            "file0" => {
                let op = event.op.unwrap();
                if op == op::WRITE {
                    let new = load_file(&dir, "file0").unwrap();
                    for (n, (old, new)) in file0.unwrap().lines().zip(new.lines()).enumerate() {
                        if old.trim_right() != new.trim_right() {
                            println!("{}",
                                     Yellow.paint(&format!("line {} changed: '{}' to '{}'",
                                                           n + 1,
                                                           old,
                                                           new)));
                        }
                    }
                    file0 = Some(new);
                } else if op == op::CREATE {
                    println!("file0 created.");
                    file0 = Some(load_file(&dir, "file0").unwrap());
                }
            }
            "undertale.ini" => {
                let op = event.op.unwrap();
                if op == op::WRITE {
                    let new = load_ini(&dir, "undertale.ini").unwrap();
                    {
                        let ini = ini.unwrap();
                        for (section, properties) in new.iter() {
                            if let Some(old_props) = ini.section(section.clone()) {
                                for (k, v) in properties.iter() {
                                    if let Some(old_value) = old_props.get(k) {
                                        if v != old_value {
                                            println!("{}", Yellow.paint(&format!("'Changed value for '{}.{}': {} -> {}",
                                                     section.as_ref().unwrap_or(&"<root>".into()),
                                                     k,
                                                     old_value,
                                                     v)));
                                        }
                                    } else {
                                        println!("{}",
                                                 Green.paint(&format!("New key: {}.{} => {}",
                                                 section.as_ref().unwrap_or(&"<root>".into()),
                                                 k,
                                                 v)));
                                    }
                                }
                            } else if let Some(section) = section.clone() {
                                println!("{}",
                                         Green.bold().paint(&format!("New section '{}'", section)));
                                for (k, v) in properties.iter() {
                                    println!("{}", Green.paint(&format!("{} => {}", k, v)));
                                }
                            }
                        }
                        for (section, properties) in ini.iter() {
                            if let Some(new_props) = new.section(section.clone()) {
                                for (k, _) in properties.iter() {
                                    if new_props.get(k).is_none() {
                                        println!("{}",
                                                 Red.paint(&format!("Key '{}.{}' deleted.",
                                                 section.as_ref().unwrap_or(&"<root>".into()),
                                                 k)));
                                    }
                                }
                            } else if let Some(section) = section.clone() {
                                println!("{}",
                                         Red.bold()
                                            .paint(&format!("Deleted section '{}'", section)));
                            }
                        }
                    }
                    ini = Some(new);
                } else if op == op::CREATE {
                    println!("undertale.ini created.");
                    ini = Some(load_ini(&dir, "undertale.ini").unwrap());
                }
            }
            _ => {}
        }
    }
}
