extern crate notify;
extern crate ini;
extern crate ansi_term;

use notify::{RecommendedWatcher, Watcher};
use std::sync::mpsc::channel;
use std::fs::File;
use std::path::Path;
use std::io::prelude::*;
use ini::Ini;
use ansi_term::Colour::*;
use std::thread::sleep;
use std::time::Duration;

// Sometimes a write is incomplete when we recieve a write event.
// Since we can't determine when it will be complete, we just sleep some
// and hope the write will be complete by the time we wake up.
const FILE_READ_WAIT: u64 = 350;

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

fn compare_inis(ini: &Ini, new: &Ini) {
    for (section, properties) in new.iter() {
        if let Some(old_props) = ini.section(section.clone()) {
            for (k, v) in properties.iter() {
                if let Some(old_value) = old_props.get(k) {
                    if v != old_value {
                        let msg = format!("'Changed value for '{}.{}': {} -> {}",
                                          section.as_ref().unwrap_or(&"<root>".into()),
                                          k,
                                          old_value,
                                          v);
                        println!("{}", Yellow.paint(msg));
                    }
                } else {
                    let msg = format!("New key: {}.{} => {}",
                                      section.as_ref().unwrap_or(&"<root>".into()),
                                      k,
                                      v);
                    println!("{}", Green.paint(msg));
                }
            }
        } else if let Some(section) = section.clone() {
            let msg = format!("New section '{}'", section);
            println!("{}", Green.bold().paint(msg));
            for (k, v) in properties.iter() {
                println!("{}", Green.paint(format!("{} => {}", k, v)));
            }
        }
    }
    for (section, properties) in ini.iter() {
        if let Some(new_props) = new.section(section.clone()) {
            for (k, _) in properties.iter() {
                if new_props.get(k).is_none() {
                    let msg = format!("Key '{}.{}' deleted.",
                                      section.as_ref().unwrap_or(&"<root>".into()),
                                      k);
                    println!("{}", Red.paint(msg));
                }
            }
        } else if let Some(section) = section.clone() {
            println!("{}",
                     Red.bold().paint(format!("Deleted section '{}'", section)));
        }
    }
}

fn resolve_line(n: usize) -> &'static str {
    match n {
        1 => "Name",
        2 => "LV",
        3 => "HP",
        5 => "AT",
        6 => "Weapon AT",
        7 => "DF",
        8 => "Armor DF",
        10 => "EXP",
        11 => "GOLD",
        12 => "Kills",
        13 => "inv 1",
        14 => "cellphone 1",
        15 => "inv 2",
        16 => "cellphone 2",
        17 => "inv 3",
        18 => "cellphone 3",
        19 => "inv 4",
        20 => "cellphone 4",
        21 => "inv 5",
        22 => "cellphone 5",
        23 => "inv 6",
        24 => "cellphone 6",
        25 => "inv 7",
        26 => "cellphone 7",
        27 => "inv 8",
        28 => "cellphone 8",
        29 => "weapon",
        30 => "armor",
        56 => "saveinc",
        65 => "candy room candies",
        88 => "snowdin comedian genocide 2=killed",
        232 => "? kills",
        233 => "Ruins kills",
        234 => "snowdin kills",
        546 => "has cellphone",
        548 => "room",
        549 => "time",
        _ => "unknown",
    }
}

fn main() {
    let dir = std::env::args().skip(1).next().expect("Expected directory as argument");
    let (tx, rx) = channel();
    let mut watcher = RecommendedWatcher::new(tx).unwrap();
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
                    sleep(Duration::from_millis(FILE_READ_WAIT));
                    let new = load_file(&dir, "file0").unwrap();
                    for (n, (old, new)) in file0.unwrap().lines().zip(new.lines()).enumerate() {
                        if old.trim_right() != new.trim_right() {
                            let msg = format!("{} ({}) changed: '{}' to '{}'",
                                              resolve_line(n + 1),
                                              n + 1,
                                              old,
                                              new);
                            println!("{}", Yellow.paint(msg));
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
                    sleep(Duration::from_millis(FILE_READ_WAIT));
                    let new = load_ini(&dir, "undertale.ini").unwrap();
                    compare_inis(&ini.unwrap(), &new);
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
