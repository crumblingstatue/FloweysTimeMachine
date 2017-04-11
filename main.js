var items = [
    "Empty",
    "Monster Candy",
    "Croquet Roll",
    "Stick",
    "Bandage",
    "Rock Candy",
    "Pumpkin Rings",
    "Spider Donut",
    "Stoic Onion",
    "Ghost Fruit",
    "Spider Cider",
    "Butterscotch Pie",
    "Faded Ribbon",
    "Toy Knife",
    "Tough Glove",
    "Manly Bandana",
    "Snowman Piece",
    "Nice Cream",
    "Puppydough Icecream",
    "Bisicle",
    "Unisicle",
    "Cinnamon Bun",
    "Temmie Flakes",
    "Abandoned Quiche",
    "Old Tutu",
    "Ballet Shoes",
    "Punch Card",
    "Annoying Dog",
    "Dog Salad",
    "Dog Residue (1)",
    "Dog Residue (2)",
    "Dog Residue (3)",
    "Dog Residue (4)",
    "Dog Residue (5)",
    "Dog Residue (6)",
    "Astronaut Food",
    "Instant Noodles",
    "Crab Apple",
    "Hot Dog...?",
    "Hot Cat",
    "Glamburger",
    "Sea Tea",
    "Starfait",
    "Legendary Hero",
    "Cloudy Glasses",
    "Torn Notebook",
    "Stained Apron",
    "Burnt Pan",
    "Cowboy hat",
    "Empty Gun",
    "Heart Locket",
    "Worn Dagger",
    "Real Knife",
    "The Locket",
    "Bad Memory",
    "Dream",
    "Undyne's Letter",
    "Undyne Letter EX",
    "Potato Chisps",
    "Junk Food",
    "Mystery Key",
    "Face Steak",
    "Hush Puppy",
    "Snail Pie",
    "temy armor",
    "<invalid>"
];

var cellOpts = {
    "0": "Empty",
    "201": "Say Hello",
    "202": "Puzzle Help",
    "203": "About Yourself",
    "204": "Call Her \"Mom\"",
    "205": "Flirt",
    "206": "Toriel's Phone",
    "210": "Papyrus's Phone",
    "220": "Dimensional Box A",
    "221": "Dimensional Box B"
};

var weaponAts = {
    "3": 0, // stick
    "13": 3,
    "16": 5,
    "52": 99,
    "47": 10,
    "25": 7,
    "45": 2,
    "49": 12,
    "51": 15
};

var ArmorDfs = {
    "4": 0, // bandage
    "12": 3, // faded ribbon
    "15": 7, // manly bandana
    "44": 5, // clouded glasses
    "46": 11, // stained apron
    "50": 15, // heart locket
    "53": 99, // The Locket
    "64": 20 // temy armor
};

var rooms = {
    "4": "Ruins - Starting point",
    "5": "Ruins - Flowey spot",
    "6": "Ruins - Entrance [SAVE]",
    "7": "Ruins - Toriel stepping tile puzzle",
    "8": "Ruins - Switch puzzle",
    "9": "Ruins - Dummy room",
    "10": "Ruins - Spike puzzle",
    "11": "Ruins - Long corridor",
    "12": "Ruins - Leaf Pile [SAVE]",
    "13": "Ruins - Candy pillar",
    "14": "Ruins - Mandatory fall trapdoor",
    "15": "Ruins - First stone pushing puzzle",
    "16": "Ruins - Trapdoor corridor puzzle",
    "17": "Ruins - Talkback rock",
    "18": "Ruins - Mouse Hole [SAVE]",
    "19": "Ruins - Napstablook",
    "20": "Ruins - Spider Bake Sale",
    "21": "Ruins - 2 frogs",
    "22": "Ruins - Switch hidden under trapdoor puzzle",
    "23": "Ruins - 3 Pillars room 1",
    "24": "Ruins - 3 Pillars room 2",
    "25": "Ruins - 3 Pillars room 3",
    "26": "Ruins - 3 Pillars room 4",
    "27": "Ruins - Pillars room pit",
    "28": "Ruins - 3-way fork",
    "29": "Ruins - Toriel gossip frog",
    "30": "Ruins - Toy knife room",
    "31": "Ruins - Home [SAVE]",
    "32": "Toriel's House: Entrance",
    "33": "Toriel's House: Reading room",
    "34": "Toriel's House: Corridor",
    "35": "Toriel's House: Toriel's Room",
    "36": "Toriel's House: Your Room",
    "37": "Toriel's House: Kitchen",
    "38": "Toriel's Basement 1",
    "39": "Toriel's Basement 2",
    "40": "Toriel's Basement 3",
    "41": "Toriel's Basement: Toriel Boss Battle",
    "42": "Toriel's Basement: Corridor to Flowey",
    "43": "Toriel's Basement: Flowey",
    "44": "Snowdin - Ruin exit",
    "45": "Snowdin - Dark forest path",
    "46": "Snowdin - Box Road [SAVE]",
    "47": "Snowdin - Fishing rod",
    "48": "Snowdin - Papyrus' Sentry Station",
    "49": "Snowdin - Doggo",
    "50": "Snowdin - Compass sign",
    "51": "Snowdin - Snowman",
    "52": "Snowdin - Electricity Maze",
    "53": "Snowdin - Snow golf",
    "54": "Snowdin - 2 guard dog houses",
    "55": "Snowdin - Monster Kidz Word Search",
    "56": "Snowdin - Spaghetti [SAVE]",
    "57": "Snowdin - Warning: Dog Marriage",
    "58": "Snowdin - XO puzzle 1",
    "59": "Snowdin - XO puzzle 2",
    "60": "Snowdin - Color tile puzzle",
    "61": "Snowdin - Dog House [SAVE]",
    "62": "Snowdin - Snow Papyrus & Sans",
    "63": "Snowdin - Sliding XO puzzle",
    "64": "Snowdin - Teleporting Sans",
    "65": "Snowdin - Ice Cave entrance",
    "66": "Snowdin - Snow poffs (Greater Dog)",
    "67": "Snowdin - Gauntlet of Deadly Terror",
    "68": "Snowdin - Town [SAVE]",
    "69": "Snowdin Town: Ice haul wolf",
    "70": "Snowdin Town: Boat harbor",
    "71": "Snowdin Town: Inn lobby",
    "73": "Snowdin Town: Grillby's",
    "74": "Snowdin Town: Library",
    "81": "Snowdin - Papyrus Battle",
    "82": "Waterfall - Entrance",
    "83": "Waterfall - Checkpoint [SAVE]",
    "84": "Waterfall - Falling rocks",
    "86": "Waterfall - Hallway [SAVE]",
    "87": "Waterfall - Lily pad bridge",
    "88": "Waterfall - Lily pad vertical bridge",
    "90": "Waterfall - Telescope",
    "91": "Waterfall - Boat plank",
    "92": "Waterfall - Undyne Spear dodging 1",
    "93": "Waterfall - Bush after spear dodging",
    "94": "Waterfall - Crystal [SAVE]",
    "95": "Waterfall - Sans Telescope",
    "96": "Waterfall - Nice Cream Stand",
    "97": "Waterfall - Split Pathway",
    "98": "Waterfall - Ballet shoes",
    "99": "Waterfall - Duck",
    "100": "Waterfall - Onionsan",
    "101": "Waterfall - Artifact hub",
    "102": "Waterfall - Piano",
    "103": "Waterfall - Legendary Artifact",
    "104": "Waterfall - Rainy Statue",
    "105": "Waterfall - Umbrellas",
    "106": "Waterfall - Rainy Path 1",
    "107": "Waterfall - Rainy Path 2",
    "108": "Waterfall - Palace View",
    "109": "Waterfall - Umbrella ledge",
    "110": "Waterfall - Bridge [SAVE]",
    "111": "Waterfall - Bridge spear dodge",
    "112": "Waterfall - Bridge fall",
    "113": "Waterfall - Trash Zone Flower bed",
    "114": "Waterfall - Trash Zone [SAVE]",
    "115": "Waterfall - Training Dummy revenge",
    "116": "Waterfall - Quiet Area [SAVE]",
    "117": "Waterfall - Undyne's house entrance",
    "119": "Waterfall - Twin Ghost houses",
    "124": "Waterfall - Turtle shop",
    "125": "Waterfall - River boat",
    "126": "Waterfall - 2 waterfalls",
    "127": "Waterfall - Mushroom maze",
    "128": "Waterfall - Temmie Village [SAVE]",
    "129": "Waterfall - Lamp maze",
    "130": "Waterfall - Behind you",
    "131": "Waterfall - More flowers",
    "132": "Waterfall - Cave bridge",
    "133": "Waterfall - Cave exit",
    "134": "Waterfall - Undyne area",
    "135": "Waterfall - Undyne area + 1",
    "136": "Waterfall - Hotland Welcome",
    "137": "Hotland - Entrance",
    "138": "Hotland - Water tank",
    "139": "Hotland - Laboratory Entrance [SAVE]",
    "140": "Hotland - River boat",
    "141": "Hotland - Laboratory Hub",
    "142": "Hotland - Laboratory Upper Floor",
    "143": "Hotland - Laboratory Exit",
    "144": "Hotland - Treadmills 1",
    "145": "Hotland - Magma Chamber [SAVE]",
    "146": "Hotland - Burnt Pan",
    "147": "Hotland - Lasers 1",
    "148": "Hotland - Puzzle Gate 1",
    "149": "Hotland - Left Boz Puzzle Entrance",
    "150": "Hotland - Left Box Puzzle",
    "151": "Hotland - Right Box Puzzle Entrance",
    "152": "Hotland - Right Box Puzzle",
    "153": "Hotland - Arrow bridge",
    "154": "Hotland - Kitchen",
    "155": "Hotland - Core View [SAVE]",
    "156": "Hotland - Elevator R1",
    "157": "Hotland - Elevator R2",
    "158": "Hotland - Hot Dog Stand",
    "159": "Hotland - Art Club Entrance",
    "160": "Hotland - Art Club",
    "161": "Hotland - Stained Apron",
    "162": "Hotland - Treadmill switch puzzle",
    "163": "Hotland - Arrow puzzle",
    "164": "Hotland - Bad Opinion Zone [SAVE]",
    "165": "Hotland - Bro guards",
    "166": "Hotland - Bombastic News report",
    "167": "Hotland - Upper Core View",
    "168": "Hotland - Elevator L2",
    "169": "Hotland - Elevator L3",
    "170": "Hotland - Spider Bake Sale",
    "171": "Hotland - F3 Puzzle Gate",
    "172": "Hotland - F3 South Puzzle Entrance",
    "173": "Hotland - F3 South Puzzle",
    "174": "Hotland - F3 North Puzzle Entrance",
    "175": "Hotland - F3 North Puzzle",
    "176": "Hotland - Spider Entrance [SAVE]",
    "177": "Hotland - Spider Room",
    "178": "Hotland - Mettaton Poster",
    "179": "Hotland - Theater Stage",
    "180": "Hotland - Colored Tile Maze 2",
    "181": "Hotland - Nice Cream Stand",
    "182": "Hotland - Hotel Entrance",
    "183": "Hotland - Hotel Lobby [SAVE]",
    "184": "Hotland - Hotel Restaurant",
    "185": "Hotland - Hotel Cordidor",
    "186": "Hotland - Hotel Alley",
    "187": "Hotland - Elevator R3",
    "188": "Hotland - Core Entrance",
    "189": "Hotland - Core Elevator",
    "190": "Hotland - Core Pit",
    "191": "Hotland - Core North of Elavator",
    "192": "Hotland - Core Wrong order lasers",
    "193": "Hotland - Core Crossroads",
    "194": "Hotland - Core Dead End",
    "195": "Hotland - Core Power Laser Puzzle",
    "196": "Hotland - Core Branch [SAVE]",
    "197": "Hotland - Core Ice Deposit",
    "198": "Hotland - Core West Puzzle Entrance",
    "199": "Hotland - Core West Puzzle Entrance + 1",
    "200": "Hotland - Core West Puzzle Entrance + 2",
    "202": "Hotland - Core End - 3",
    "201": "Hotland - South of 100G Trash Can",
    "203": "Hotland - Core End - 4",
    "204": "Hotland - Core Get Lost",
    "205": "Hotland - Core West Puzzle",
    "206": "Hotland - Core Glamburger Trash Can",
    "207": "Hotland - Core 100G Trash Can",
    "208": "Hotland - Core Battle Bridge",
    "209": "Hotland - Core End - 1",
    "210": "Hotland - Core End [SAVE]",
    "211": "Hotland - Core Mettaton Room",
    "212": "Hotland - Core Final Elevator Entrance",
    "214": "Hotland - Elevator L1",
    "215": "Hotland - Core Final Elevator",
    "216": "Castle Elevator [SAVE]",
    "217": "Castle - Another Elevator",
    "218": "Castle - Dark Path",
    "219": "New Home [SAVE]",
    "220": "New Home - Entrance",
    "221": "New Home - Reading Room",
    "222": "New Home - Corridor",
    "223": "New Home - Asgore's Room",
    "224": "New Home - Your Room",
    "225": "New Home - Kitchen",
    "226": "New Home - Basement 1",
    "227": "New Home - Basement 2",
    "228": "New Home - Basement 3",
    "229": "New Home - Basement 4",
    "230": "New Home - Elevator",
    "231": "Last Corridor [SAVE]",
    "232": "Throne Entrance [SAVE]",
    "233": "Throne Entrance - Stairs Down",
    "234": "Throne Entrance - Coffins",
    "235": "Throne Room [SAVE]",
    "236": "The End [SAVE]",
    "237": "Barrier",
    "241": "Outside",
    "242": "Laboratory Elevator",
    "243": "True Lab - Elevator",
    "244": "True Lab - Elevator Entrance",
    "245": "True Lab - South Corridor",
    "246": "True Laboratory [SAVE]",
    "247": "True Lab - West Corridor 1",
    "248": "True Lab - West Sinks",
    "249": "True Lab - West red key slot",
    "250": "True Lab - North Corridor 1",
    "251": "True Lab - Bedroom [SAVE]",
    "252": "True Lab - Northeast Corridor",
    "253": "True Lab - Northeast blue key slot",
    "254": "True Lab - North Corridor 2",
    "255": "True Lab - Green key",
    "256": "True Lab - Northwest skull",
    "257": "True Lab - Yellow Key Slot + TV",
    "258": "True Lab - Northwest refrigerators",
    "259": "True Lab - Green Key Slot",
    "260": "True Lab - Fans",
    "261": "True Lab - Elevator 2",
    "262": "True Lab - Power room corridor",
    "263": "True Lab - Power room",
    "265": "Snowdin - Ice Cave 1",
    "331": "Asriel room"
};

var floweyStates = {
    "0": "None (Initial state)",
    "1": "Light blue (Initiated fight)",
    "2": "Orange",
    "3": "Blue",
    "4": "Purple",
    "5": "Green",
    "6": "Yellow",
    "7": "None (Finished fight)",
};

var torielStates = {
    "0": "Initial state",
    "3": "Unknown",
    "4": "Killed",
    "5": "Spared"
};

var comedianStates = {
    "0": "Initial state",
    "1": "Unknown",
    "2": "Killed"
};

var doggoStates = {
    "0": "Initial state",
    "1": "Killed",
    "2": "Played fetch (Spared)"
};

var dogamyDogaressaStates = {
    "0": "Initial state",
    "1": "Killed",
    "2": "Played fetch (Spared)"
};

var greaterDogStates = {
    "0": "Initial state",
    "1": "Killed",
    "2": "Played fetch (Spared)",
    "3": "Ignored"
};

var papyrusStates = {
    "0": "Initial state",
    "1": "Killed"
};

var plotValues = {
    "2": "Didn't fight Papyrus",
    "101": "Fought Papyrus",
    "119": "Unknown",
    "164": "Hotlands genocide",
    "199": "Unknown",
    "999": "Pacifist epilogue"
};

var trainingDummyStates = {
    "0": "Initial state",
    "1": "Killed",
    "2": "Talked to",
    "3": "Tired of your shenanigans"
};

var shyrenStates = {
    "0": "Initial state",
    "1": "Killed",
    "2": "Unknown"
};

var madDummyStates = {
    "0": "Initial state",
    "1": "Killed"
};

var undyneStates1 = {
    "0": "Initial state",
    "1": "Killed"
};

var undyneStates2 = {
    "0": "Initial state",
    "1": "Killed"
};

var broGuardsStates = {
    "0": "Initial state",
    "1": "Killed"
};

var mettatonStates = {
    "0": "Initial state",
    "1": "Killed"
};

var muffetStates = {
    "0": "Initial state",
    "1": "Killed"
};

function parseIniFromText(text) {
    "use strict";
    var lines = text.match(/[^\r\n]+/g);
    var section = null;
    var ini = {};
    lines.forEach(function(line) {
        // Ignore empty lines
        if (line === "") {
            return;
        }
        // If line starts with [, it is a section header
        var lbracket = line.indexOf("[");
        if (lbracket !== -1) {
            var rbracket = line.slice(lbracket).indexOf("]") + lbracket;
            if (rbracket !== -1) {
                section = line.slice(lbracket + 1, rbracket);
                ini[section] = {};
            }
        } else { // Otherwise, it is assumed to be an assignment
            if (section === null) {
                throw "Assignment outside of a section";
            }
            var eq = line.indexOf("=");
            if (eq === -1) {
                throw "Expected '='";
            }
            var lquot = line.indexOf('"');
            if (lquot === -1) {
                throw "Expected '\"'";
            }
            var rquot = line.slice(lquot + 1).indexOf('"') + lquot + 1;
            if (rquot === -1) {
                throw "Unterminated value string";
            }
            var value = line.slice(lquot + 1, rquot);
            var key = line.slice(0, eq);
            ini[section][key] = value;
        }
    });
    return ini;
}

function flowey_laugh_once() {
    "use strict";
    if (localStorage.getItem("laughed") !== "true") {
        document.getElementById("floweyimg").src = "res/flowey_evil.png";
        if(!document.getElementById("mute").checked) {
            var audio = new Audio("res/flowey_laugh.mp3");
            audio.play();
        }
        localStorage.setItem("laughed", "true");
    }
}

function insert_inv_lists() {
    "use strict";
    function insert(node, i) {
        var newOption = document.createElement("option");
        newOption.setAttribute("value", i);
        var newContent = document.createTextNode(items[i]);
        newOption.appendChild(newContent);
        var select = document.getElementById(node);
        select.appendChild(newOption);
    }
    for (var i = 0; i < items.length; i++) {
        for (var j = 1; j <= 8; j++) {
            insert("sav-invslot" + j, i);
        }
        insert("sav-weapon", i);
        insert("sav-armor", i);
    }
}

function insert_cell_lists() {
    "use strict";
    for (var i = 1; i <= 8; i++) {
        loadSelectFromObj("sav-cellslot" + i, cellOpts);
    }
}

function loadSelectFromObj(selectId, obj) {
    "use strict";
    var select = document.getElementById(selectId);

    for (var key in obj) {
        var newOption = document.createElement("option");
        newOption.setAttribute("value", key);
        var newContent = document.createTextNode(obj[key]);
        newOption.appendChild(newContent);
        select.appendChild(newOption);
    }
}

// Load undertale.ini data into an ini object and execute a closure on it.
function loadIniFromFile(file, closure) {
    "use strict";
    var reader = new FileReader();
    reader.onload = function(e) {
        var text = e.target.result;
        try {
            closure(parseIniFromText(text));
        } catch (err) {
            window.alert("Error parsing undertale.ini: " + err);
        }
    };
    reader.readAsText(file);
}

// Load save data from a file into an array of values, and execute a closure on it.
function loadSaveFromFile(file, closure) {
    "use strict";
    var reader = new FileReader();
    reader.onload = function(e) {
        var text = e.target.result;
        closure(text.match(/[^\r\n]+/g));
    };
    reader.readAsText(file);
}

// Update the persistent data form from an ini object.
function updatePersistentDataForm(iniobj) {
    "use strict";
    document.getElementById("ini-name").value = iniobj.General.Name;
    document.getElementById("ini-location").value = parseInt(iniobj.General.Room.trim());
    document.getElementById("ini-kills").value = parseInt(iniobj.General.Kills.trim());
    document.getElementById("ini-love").value = parseInt(iniobj.General.Love.trim());
    if (iniobj.FFFFF) {
        if (iniobj.FFFFF.F) {
            if (parseInt(iniobj.FFFFF.F.trim()) === 1) {
                document.getElementById("ini-omega-flowey-trapped").checked = true;
            } else {
                document.getElementById("ini-omega-flowey-trapped").checked = false;
            }
        }
        if (iniobj.FFFFF.P) {
            document.getElementById("ini-omega-flowey-soul").value = parseInt(iniobj.FFFFF.P.trim());
        }
        if (iniobj.FFFFF.D) {
            document.getElementById("ini-omega-flowey-deaths").value = parseInt(iniobj.FFFFF.D.trim());
        }
    } else {
        document.getElementById("ini-omega-flowey-trapped").checked = false;
    }
    if (iniobj.reset) {
        if (iniobj.reset.s_key) {
            if (parseInt(iniobj.reset.s_key.trim()) === 1) {
                document.getElementById("ini-dodged-all-special-thanks").checked = true;
            } else {
                document.getElementById("ini-dodged-all-special-thanks").checked = false;
            }
        }
    } else {
        document.getElementById("ini-dodged-all-special-thanks").checked = false;
    }
    if (iniobj.fun) {
        document.getElementById("ini-fun").value = parseInt(iniobj.fun.trim());
    }
}

// Update an ini object from the persistent data form.
function updateIniFromForm(ini) {
    "use strict";
    ini.General.Name = document.getElementById("ini-name").value;
    ini.General.Room = document.getElementById("ini-location").value;
    ini.General.Kills = document.getElementById("ini-kills").value;
    ini.General.Love = document.getElementById("ini-love").value;
    if (document.getElementById("ini-omega-flowey-trapped").checked) {
        if (!ini.FFFFF) {
            ini.FFFFF = {};
        }
        ini.FFFFF.F = "1";
    } else {
        if (ini.FFFFF) {
            ini.FFFFF.F = "0";
        }
    }
    var upcomingSoul = parseInt(document.getElementById("ini-omega-flowey-soul").value);
    if (upcomingSoul) {
        if (!ini.FFFFF) {
            ini.FFFFF = {};
        }
        ini.FFFFF.P = upcomingSoul;
    }
    var timesDied = parseInt(document.getElementById("ini-omega-flowey-deaths").value);
    if (timesDied) {
        if (!ini.FFFFF) {
            ini.FFFFF = {};
        }
        if (ini.FFFFF) {
            ini.FFFFF.D = timesDied;
        }
    }
    if (document.getElementById("ini-dodged-all-special-thanks").checked) {
        if (!ini.reset) {
            ini.reset = {};
        }
        ini.reset.s_key = "1";
    } else {
        if (ini.reset) {
            ini.reset.s_key = "0";
        }
    }
    var fun = parseInt(document.getElementById("ini-fun").value);
    if (fun) {
        ini.General.fun = fun;
    }
}

function updateSelection(id, values, index, list) {
    "use strict";
    var value = parseInt(values[index].trim());
    if (!list[value]) {
        list[value] = "Unrecognized (" + value + ")";
        loadSelectFromObj(id, list);
    }
    document.getElementById(id).value = value;
}

// Update the save data form from an array of values.
function updateSaveDataForm(values) {
    "use strict";
    document.getElementById("sav-name").value = values[0];
    document.getElementById("sav-kills").value = values[11];
    document.getElementById("sav-love").value = values[1];
    document.getElementById("sav-hp").value = values[2];
    document.getElementById("sav-exp").value = values[9];
    document.getElementById("sav-gold").value = values[10];
    document.getElementById("sav-at").value = values[4];
    document.getElementById("sav-weaponat").value = values[5];
    document.getElementById("sav-df").value = values[6];
    document.getElementById("sav-armordf").value = values[7];
    for (var i = 0; i < 8; i++) {
        updateSelection("sav-invslot" + (i + 1), values, 12 + (i * 2), items);
        updateSelection("sav-cellslot" + (i + 1), values, 13 + (i * 2), cellOpts);
    }
    updateSelection("sav-weapon", values, 28, items);
    updateSelection("sav-armor", values, 29, items);
    updateSelection("sav-trainingdummystate", values, 44, trainingDummyStates);
    updateSelection("sav-torielstate", values, 75, torielStates);
    updateSelection("sav-doggostate", values, 82, doggoStates);
    updateSelection("sav-dogamydogaressastate", values, 83, dogamyDogaressaStates);
    updateSelection("sav-greaterdogstate", values, 84, greaterDogStates);
    updateSelection("sav-comedianstate", values, 87, comedianStates);
    updateSelection("sav-papyrusstate", values, 97, papyrusStates);
    updateSelection("sav-shyrenstate", values, 111, shyrenStates);
    document.getElementById("sav-unkkills").value = values[231];
    document.getElementById("sav-ruinskills").value = values[232];
    document.getElementById("sav-snowdinkills").value = values[233];
    document.getElementById("sav-waterfallkills").value = values[234];
    document.getElementById("sav-hotlandkills").value = values[235];
    updateSelection("sav-undynestate1", values, 281, undyneStates1);
    updateSelection("sav-maddummystate", values, 282, madDummyStates);
    updateSelection("sav-undynestate2", values, 380, undyneStates2);
    updateSelection("sav-muffetstate", values, 427, muffetStates);
    updateSelection("sav-broguardsstate", values, 432, broGuardsStates);
    updateSelection("sav-mettatonstate", values, 455, mettatonStates);
    if (parseInt(values[523].trim()) === 12) {
        document.getElementById("sav-exitedtruelab").checked = true;
    } else {
        document.getElementById("sav-exitedtruelab").checked = false;
    }
    if (parseInt(values[37].trim()) === 1) {
        document.getElementById("sav-defeatedasriel").checked = true;
    } else {
        document.getElementById("sav-defeatedasriel").checked = false;
    }
    updateSelection("sav-plotvalue", values, 542, plotValues);
    if (parseInt(values[545].trim()) === 1) {
        document.getElementById("sav-havecell").checked = true;
    } else {
        document.getElementById("sav-havecell").checked = false;
    }
    document.getElementById("sav-location").value = parseInt(values[547].trim());
    document.getElementById("sav-fun").value = parseInt(values[35].trim());
}

// Update an array of values from the save data form.
function updateSaveValuesFromForm(values) {
    "use strict";
    values[0] = document.getElementById("sav-name").value;
    values[1] = document.getElementById("sav-love").value;
    values[2] = document.getElementById("sav-hp").value;
    values[4] = document.getElementById("sav-at").value;
    values[5] = document.getElementById("sav-weaponat").value;
    values[6] = document.getElementById("sav-df").value;
    values[7] = document.getElementById("sav-armordf").value;
    values[9] = document.getElementById("sav-exp").value;
    values[10] = document.getElementById("sav-gold").value;
    values[11] = document.getElementById("sav-kills").value;
    values[12] = document.getElementById("sav-invslot1").value;
    values[13] = document.getElementById("sav-cellslot1").value;
    values[14] = document.getElementById("sav-invslot2").value;
    values[15] = document.getElementById("sav-cellslot2").value;
    values[16] = document.getElementById("sav-invslot3").value;
    values[17] = document.getElementById("sav-cellslot3").value;
    values[18] = document.getElementById("sav-invslot4").value;
    values[19] = document.getElementById("sav-cellslot4").value;
    values[20] = document.getElementById("sav-invslot5").value;
    values[21] = document.getElementById("sav-cellslot5").value;
    values[22] = document.getElementById("sav-invslot6").value;
    values[23] = document.getElementById("sav-cellslot6").value;
    values[24] = document.getElementById("sav-invslot7").value;
    values[25] = document.getElementById("sav-cellslot7").value;
    values[26] = document.getElementById("sav-invslot8").value;
    values[27] = document.getElementById("sav-cellslot8").value;
    values[28] = document.getElementById("sav-weapon").value;
    values[29] = document.getElementById("sav-armor").value;
    values[44] = document.getElementById("sav-trainingdummystate").value;
    values[75] = document.getElementById("sav-torielstate").value;
    values[82] = document.getElementById("sav-doggostate").value;
    values[83] = document.getElementById("sav-dogamydogaressastate").value;
    values[84] = document.getElementById("sav-greaterdogstate").value;
    values[87] = document.getElementById("sav-comedianstate").value;
    values[97] = document.getElementById("sav-papyrusstate").value;
    values[111] = document.getElementById("sav-shyrenstate").value;
    values[231] = document.getElementById("sav-unkkills").value;
    values[232] = document.getElementById("sav-ruinskills").value;
    values[233] = document.getElementById("sav-snowdinkills").value;
    values[234] = document.getElementById("sav-waterfallkills").value;
    values[235] = document.getElementById("sav-hotlandkills").value;
    values[281] = document.getElementById("sav-undynestate1").value;
    values[282] = document.getElementById("sav-maddummystate").value;
    values[380] = document.getElementById("sav-undynestate2").value;
    values[427] = document.getElementById("sav-muffetstate").value;
    values[432] = document.getElementById("sav-broguardsstate").value;
    values[455] = document.getElementById("sav-mettatonstate").value;
    if (document.getElementById("sav-exitedtruelab").checked) {
        values[523] = "12";
    } else {
        values[523] = "0";
    }
    if (document.getElementById("sav-defeatedasriel").checked) {
        values[37] = "1";
    } else {
        values[37] = "0";
    }
    values[542] = document.getElementById("sav-plotvalue").value;
    if (document.getElementById("sav-havecell").checked) {
        values[545] = "1";
    } else {
        values[545] = "0";
    }
    values[547] = document.getElementById("sav-location").value;
    values[35] = document.getElementById("sav-fun").value;
}

function saveIniToFile(ini) {
    "use strict";
    var string = "";
    for (var section in ini) {
        string += "[" + section + "]\r\n";
        for (var key in ini[section]) {
            string += key + "=\"" + ini[section][key] + "\"\r\n";
        }
    }
    var blob = new Blob([string], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "undertale.ini", true);
    flowey_laugh_once();
}

function saveSaveValuesToFile(values) {
    "use strict";
    var string = "";
    for (var i = 0; i < values.length; i++) {
        string += values[i] + "\r\n";
    }
    var blob = new Blob([string], {type: "application/octet-stream"});
    saveAs(blob, "file0", true);
    flowey_laugh_once();
}

function loadPresetSelect() {
    "use strict";
    var selectNode = document.getElementById("builtinpresetselect");
    for (var k in presets) {
        var newOption = document.createElement("option");
        var newContent = document.createTextNode(k);
        newOption.appendChild(newContent);
        selectNode.appendChild(newOption);
    }
}

function start() {
    "use strict";
    var userPresets = localStorage.getItem("userPresets");
    if (userPresets === null) {
        localStorage.setItem("userPresets", JSON.stringify({}));
    } else {
        for (var key in JSON.parse(userPresets)) {
            var presetSelect2 = document.getElementById("userpresetselect");
            var option2 = document.createElement("option");
            var text2 = document.createTextNode(key);
            option2.appendChild(text2);
            presetSelect2.appendChild(option2);
        }
    }
    if (localStorage.getItem("laughed") === "true") {
        document.getElementById("floweyimg").src = "res/flowey_evil.png";
    }
    var ini, saveLines;
    function loadPreset(name) {
        ini = presets[name].ini;
        saveLines = presets[name].lines;
        updateSaveDataForm(saveLines);
        updatePersistentDataForm(ini);
    }
    loadSelectFromObj("sav-location", rooms);
    loadSelectFromObj("ini-location", rooms);
    loadSelectFromObj("ini-omega-flowey-soul", floweyStates);
    loadSelectFromObj("sav-torielstate", torielStates);
    loadSelectFromObj("sav-comedianstate", comedianStates);
    loadSelectFromObj("sav-doggostate", doggoStates);
    loadSelectFromObj("sav-dogamydogaressastate", dogamyDogaressaStates);
    loadSelectFromObj("sav-greaterdogstate", greaterDogStates);
    loadSelectFromObj("sav-papyrusstate", papyrusStates);
    loadSelectFromObj("sav-plotvalue", plotValues);
    loadSelectFromObj("sav-trainingdummystate", trainingDummyStates);
    loadSelectFromObj("sav-shyrenstate", shyrenStates);
    loadSelectFromObj("sav-maddummystate", madDummyStates);
    loadSelectFromObj("sav-undynestate1", undyneStates1);
    loadSelectFromObj("sav-undynestate2", undyneStates2);
    loadSelectFromObj("sav-broguardsstate", broGuardsStates);
    loadSelectFromObj("sav-muffetstate", muffetStates);
    loadSelectFromObj("sav-mettatonstate", mettatonStates);
    insert_inv_lists();
    insert_cell_lists();
    loadPresetSelect();
    loadPreset("Ruins Start");
    var iniFile, saveFile;
    var iniInput = document.getElementById("ini-file");
    iniInput.addEventListener("change", function(evt) {
        iniFile = evt.target.files[0];
        if (iniFile) {
            document.getElementById("ini-loadbutton").disabled = false;
        } else {
            document.getElementById("ini-loadbutton").disabled = true;
        }
    }, false);
    var saveInput = document.getElementById("sav-file");
    saveInput.addEventListener("change", function (evt) {
        saveFile = evt.target.files[0];
        if (saveFile) {
            document.getElementById("sav-loadbutton").disabled = false;
        } else {
            document.getElementById("sav-loadbutton").disabled = true;
        }
    }, false);
    var iniLoadButton = document.getElementById("ini-loadbutton");
    iniLoadButton.addEventListener("click", function() {
        if (!iniFile) {
            window.alert("You need to choose a file first!");
            return;
        }
        loadIniFromFile(iniFile, function(iniobj) {
            updatePersistentDataForm(iniobj);
            ini = iniobj;
        });
    }, false);
    var file0LoadButton = document.getElementById("sav-loadbutton");
    file0LoadButton.addEventListener("click", function() {
        if (!saveFile) {
            window.alert("You need to choose a file first!");
            return;
        }
        loadSaveFromFile(saveFile, function(lines) {
            updateSaveDataForm(lines);
            saveLines = lines;
        });
    }, false);
    var saveIniButton = document.getElementById("ini-savebutton");
    saveIniButton.addEventListener("click", function() {
        updateIniFromForm(ini);
        saveIniToFile(ini);
    }, false);
    var saveXButton = document.getElementById("sav-savebutton");
    saveXButton.addEventListener("click", function() {
        updateSaveValuesFromForm(saveLines);
        saveSaveValuesToFile(saveLines);
    }, false);
    document.getElementById("savesi2").addEventListener("click", function() {
        var blob = new Blob([], {type: "application/octet-stream"});
        saveAs(blob, "system_information_962", true);
        flowey_laugh_once();
    }, false);
    document.getElementById("savesi3").addEventListener("click", function() {
        var blob = new Blob([], {type: "application/octet-stream"});
        saveAs(blob, "system_information_963", true);
        flowey_laugh_once();
    }, false);
    var weaponSelect = document.getElementById("sav-weapon");
    weaponSelect.onchange = function() {
        var at = weaponAts[weaponSelect.value];
        if (typeof at !== "undefined") {
            document.getElementById("sav-weaponat").value = at;
        }
    };
    var armorSelect = document.getElementById("sav-armor");
    armorSelect.onchange = function() {
        var df = ArmorDfs[armorSelect.value];
        if (typeof df !== "undefined") {
            document.getElementById("sav-armordf").value = df;
        }
    };
    document.getElementById("builtinpresetload").addEventListener("click", function() {
        var name = document.getElementById("builtinpresetselect").value;
        loadPreset(name);
    }, false);
    function saveUserPreset(name) {
        updateIniFromForm(ini);
        updateSaveValuesFromForm(saveLines);
        var obj = {
            "ini": ini,
            "lines": saveLines,
        };
        var presets = JSON.parse(localStorage.getItem("userPresets"));
        presets[name] = obj;
        localStorage.setItem("userPresets",JSON.stringify(presets));
    }
    document.getElementById("userpresetnew").addEventListener("click", function() {
        var name = window.prompt("Enter the name for your new preset");
        if (name === null || name === "") {
            window.alert("You did not enter a valid name, preset not created.");
        } else {
            saveUserPreset(name);
            var presetSelect = document.getElementById("userpresetselect");
            var option = document.createElement("option");
            var text = document.createTextNode(name);
            option.appendChild(text);
            presetSelect.appendChild(option);
            presetSelect.value = name;
            document.getElementById("userpresetload").disabled = false;
            document.getElementById("userpresetsave").disabled = false;
            document.getElementById("userpresetdelete").disabled = false;
            document.getElementById("userpresetexport").disabled = false;
        }
    }, false);
    document.getElementById("userpresetsave").addEventListener("click", function() {
        var name = document.getElementById("userpresetselect").value;
        if (name !== null && name !== "") {
            saveUserPreset(name);
        } else {
            window.alert("You need to select a valid preset first!");
        }
    }, false);
    document.getElementById("userpresetload").addEventListener("click", function() {
        var name = document.getElementById("userpresetselect").value;
        if (name !== null && name !== "") {
            var item = localStorage.getItem("userPresets");
            var presets = JSON.parse(item);
            var obj = presets[name];
            ini = obj.ini;
            saveLines = obj.lines;
            updateSaveDataForm(saveLines);
            updatePersistentDataForm(ini);
        } else {
            window.alert("You need to select a valid preset first!");
        }
    }, false);
    document.getElementById("userpresetdelete").addEventListener("click", function() {
        var selection = document.getElementById("userpresetselect");
        var name = selection.value;
        var children = selection.childNodes;
        for (var i = 0; i < children.length; i++) {
            if (children[i].value === name) {
                selection.removeChild(children[i]);
            }
        }
        var item = localStorage.getItem("userPresets");
        var presets = JSON.parse(item);
        delete presets[name];
        localStorage.setItem("userPresets", JSON.stringify(presets));
        if (document.getElementById("userpresetselect").value === "") {
            document.getElementById("userpresetload").disabled = true;
            document.getElementById("userpresetsave").disabled = true;
            document.getElementById("userpresetdelete").disabled = true;
            document.getElementById("userpresetexport").disabled = true;
        }
    }, false);
    if (document.getElementById("userpresetselect").value !== "") {
        document.getElementById("userpresetload").disabled = false;
        document.getElementById("userpresetsave").disabled = false;
        document.getElementById("userpresetdelete").disabled = false;
        document.getElementById("userpresetexport").disabled = false;
    }
    document.getElementById("userpresetexport").addEventListener("click", function() {
        var presets = JSON.parse(localStorage.getItem("userPresets"));
        var name = document.getElementById("userpresetselect").value;
        saveUserPreset(name);
        var preset = presets[name];
        var string = "presets[\"" + name + "\"] = " + JSON.stringify(preset) + ";";
        var blob = new Blob([string], {type: "application/octet-stream"});
        saveAs(blob, name + ".js", true);
    }, false);
    document.getElementById("floweyimg").addEventListener("click", function() {
        document.getElementById("floweyimg").src = "res/flowey_wink.png";
        localStorage.setItem("laughed", false);
    }, false);
}

document.addEventListener("DOMContentLoaded", start);
