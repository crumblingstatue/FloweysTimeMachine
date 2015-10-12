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

var weaponAts = {
    13: 3,
    16: 5,
    52: 99,
    47: 10,
    25: 7,
    45: 2,
    49: 12,
    51: 15,
};

var ArmorDfs = {
    12: 3, // faded ribbon
    15: 7, // manly bandana
    44: 5, // clouded glasses
    46: 11, // stained apron
    50: 15, // heart locket
    64: 20 // temy armor
};

var rooms = {
    4: "Ruins - Starting point",
    5: "Ruins - Flowey spot",
    6: "Ruins - Entrance [SAVE]",
    7: "Ruins - Toriel stepping tile puzzle",
    8: "Ruins - Switch puzzle",
    9: "Ruins - Dummy room",
    10: "Ruins - Spike puzzle",
    11: "Ruins - Long corridor",
    12: "Ruins - Leaf Pile [SAVE]",
    13: "Ruins - Candy pillar",
    14: "Ruins - Mandatory fall trapdoor",
    15: "Ruins - First stone pushing puzzle",
    16: "Ruins - Trapdoor corridor puzzle",
    17: "Ruins - Talkback rock",
    18: "Ruins - Mouse Hole [SAVE]",
    19: "Ruins - Napstablook",
    20: "Ruins - Spider Bake Sale",
    21: "Ruins - 2 frogs",
    22: "Ruins - Switch hidden under trapdoor puzzle",
    23: "Ruins - 3 Pillars room 1",
    24: "Ruins - 3 Pillars room 2",
    25: "Ruins - 3 Pillars room 3",
    26: "Ruins - 3 Pillars room 4",
    27: "Ruins - Pillars room pit",
    28: "Ruins - 3-way fork",
    29: "Ruins - Toriel gossip frog",
    30: "Ruins - Toy knife room",
    31: "Ruins - Home [SAVE]",
    32: "Toriel's House: Entrance",
    33: "Toriel's House: Reading room",
    34: "Toriel's House: Corridor",
    35: "Toriel's House: Toriel's Room",
    36: "Toriel's House: Your Room",
    37: "Toriel's House: Kitchen",
    38: "Toriel's Basement 1",
    39: "Toriel's Basement 2",
    40: "Toriel's Basement 3",
    41: "Toriel's Basement: Toriel Boss Battle",
    42: "Toriel's Basement: Corridor to Flowey",
    43: "Toriel's Basement: Flowey",
    44: "Snowdin - Ruin exit",
    45: "Snowdin - Dark forest path",
    46: "Snowdin - Box Road [SAVE]",
    47: "Snowdin - Fishing rod",
    48: "Snowdin - Papyrus' Sentry Station",
    49: "Snowdin - No moving dog",
    50: "Snowdin - Compass sign",
    51: "Snowdin - Snowman",
    52: "Snowdin - Electricity Maze",
    53: "Snowdin - Snow golf",
    54: "Snowdin - 2 guard dog houses",
    55: "Snowdin - Monster Kidz Word Search",
    56: "Snowdin - Spaghetti [SAVE]",
    57: "Snowdin - Warning: Dog Marriage",
    58: "Snowdin - XO puzzle 1",
    59: "Snowdin - XO puzzle 2",
    60: "Snowdin - Color tile puzzle",
    61: "Snowdin - Dog House [SAVE]",
    62: "Snowdin - Snow Papyrus & Sans",
    63: "Snowdin - Sliding XO puzzle",
    64: "Snowdin - Teleporting Sans",
    65: "Snowdin - Ice Cave entrance",
    66: "Snowdin - Snow poffs (Greater Dog)",
    67: "Snowdin - Gauntlet of Deadly Terror",
    68: "Snowdin - Town [SAVE]",
    69: "Snowdin Town: Ice haul wolf",
    70: "Snowdin Town: Boat harbor",
    71: "Snowdin Town: Inn lobby",
    73: "Snowdin Town: Grillby's",
    74: "Snowdin Town: Library",
    81: "Snowdin - Papyrus Battle",
    82: "Waterfall - Entrance",
    83: "Waterfall - Checkpoint [SAVE]",
    84: "Waterfall - Falling rocks",
    86: "Waterfall - Hallway [SAVE]",
    87: "Waterfall - Lily pad bridge",
    88: "Waterfall - Lily pad vertical bridge",
    90: "Waterfall - Telescope",
    91: "Waterfall - Boat plank",
    92: "Waterfall - Undyne Spear dodging 1",
    93: "Waterfall - Bush after spear dodging",
    94: "Waterfall - Crystal [SAVE]",
    95: "Waterfall - Sans Telescope",
    96: "Waterfall - Nice Cream Stand",
    97: "Waterfall - Split Pathway",
    98: "Waterfall - Ballet shoes",
    99: "Waterfall - Duck",
    100: "Waterfall - Onionsan",
    101: "Waterfall - Artifact hub",
    102: "Waterfall - Piano",
    103: "Waterfall - Legendary Artifact",
    104: "Waterfall - Rainy Statue",
    105: "Waterfall - Umbrellas",
    106: "Waterfall - Rainy Path 1",
    107: "Waterfall - Rainy Path 2",
    108: "Waterfall - Palace View",
    109: "Waterfall - Umbrella ledge",
    110: "Waterfall - Bridge [SAVE]",
    111: "Waterfall - Bridge spear dodge",
    112: "Waterfall - Bridge fall",
    113: "Waterfall - Trash Zone Flower bed",
    114: "Waterfall - Trash Zone [SAVE]",
    115: "Waterfall - Training Dummy revenge",
    116: "Waterfall - Quiet Area [SAVE]",
    117: "Waterfall - Undyne's house entrance",
    119: "Waterfall - Twin Ghost houses",
    265: "Snowdin - Ice Cave 1",
};

var ini, saveLines;

function parseIni(text) {
    "use strict";
    var lines = text.split("\n");
    var section = null;
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
                return "Assignment outside of a section";
            }
            var eq = line.indexOf("=");
            if (eq === -1) {
                return "Expected '='";
            }
            var lquot = line.indexOf('"');
            if (lquot === -1) {
                return "Expected '\"'";
            }
            var rquot = line.slice(lquot + 1).indexOf('"') + lquot + 1;
            if (rquot === -1) {
                return "Unterminated value string";
            }
            var value = line.slice(lquot + 1, rquot);
            var key = line.slice(0, eq);
            ini[section][key] = value;
        }
    });
    return null;
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
            insert("invslot" + j, i);
        }
        insert("weapon", i);
        insert("armor", i);
    }
}

function insert_rooms() {
    "use strict";
    var select = document.getElementById("location");

    for (var key in rooms) {
        var newOption = document.createElement("option");
        newOption.setAttribute("value", key);
        var newContent = document.createTextNode(rooms[key]);
        newOption.appendChild(newContent);
        select.appendChild(newOption);
    }
}

function load(iniFile, saveFile) {
    "use strict";
    var iniReader = new FileReader();
    iniReader.onload = function(e) {
        var text = e.target.result;
        var error = parseIni(text);
        if (error) {
            window.alert("Error parsing undertale.ini: " + error);
        }
    };
    iniReader.readAsText(iniFile);
    var saveReader = new FileReader();
    saveReader.onload = function(e) {
        var text = e.target.result;
        saveLines = text.split("\r\n");
        document.getElementById("name").value = saveLines[0];
        var locId = parseInt(saveLines[547].trim());
        document.getElementById("location").value = locId;
        document.getElementById("love").value = saveLines[1];
        document.getElementById("hp").value = saveLines[2];
        document.getElementById("exp").value = saveLines[9];
        document.getElementById("gold").value = saveLines[10];
        document.getElementById("weaponat").value = saveLines[5];
        document.getElementById("armordf").value = saveLines[7];
        for (var i = 0; i < 8; i++) {
            var itemId = parseInt(saveLines[12 + (i * 2)].trim());
            document.getElementById("invslot" + (i + 1)).value = itemId;
        }
        document.getElementById("weapon").value = parseInt(saveLines[28].trim());
        document.getElementById("armor").value = parseInt(saveLines[29].trim());
    };
    saveReader.readAsText(saveFile);
}

function saveIni() {
    "use strict";
    ini.General.Name = document.getElementById("name").value;
    ini.General.Love = document.getElementById("love").value;
    ini.General.Room = document.getElementById("location").value;
    var string = "";
    for (var section in ini) {
        string += "[" + section + "]\r\n";
        for (var key in ini[section]) {
            string += key + "=\"" + ini[section][key] + "\"\r\n";
        }
    }
    var blob = new Blob([string], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "undertale.ini", true);
}

function saveFileX(name) {
    "use strict";
    saveLines[0] = document.getElementById("name").value;
    saveLines[1] = document.getElementById("love").value;
    saveLines[2] = document.getElementById("hp").value;
    saveLines[5] = document.getElementById("weaponat").value;
    saveLines[7] = document.getElementById("armordf").value;
    saveLines[9] = document.getElementById("exp").value;
    saveLines[10] = document.getElementById("gold").value;
    saveLines[12] = document.getElementById("invslot1").value;
    saveLines[14] = document.getElementById("invslot2").value;
    saveLines[16] = document.getElementById("invslot3").value;
    saveLines[18] = document.getElementById("invslot4").value;
    saveLines[20] = document.getElementById("invslot5").value;
    saveLines[22] = document.getElementById("invslot6").value;
    saveLines[24] = document.getElementById("invslot7").value;
    saveLines[26] = document.getElementById("invslot8").value;
    saveLines[28] = document.getElementById("weapon").value;
    saveLines[29] = document.getElementById("armor").value;
    saveLines[547] = document.getElementById("location").value;
    var string = "";
    for (var i = 0; i < saveLines.length; i++) {
        string += saveLines[i] + "\r\n";
    }
    var blob = new Blob([string], {type: "text/plain;charset=uft-8"});
    saveAs(blob, name, true);
}

function start() {
    "use strict";
    ini = {};
    insert_rooms();
    insert_inv_lists();
    var iniFile, saveFile;
    var iniInput = document.getElementById("undertale-ini");
    iniInput.addEventListener("change", function(evt) {
        iniFile = evt.target.files[0];
    }, false);
    var saveInput = document.getElementById("savefile");
    saveInput.addEventListener("change", function (evt) {
        saveFile = evt.target.files[0];
    }, false);
    var loadButton = document.getElementById("loadbutton");
    loadButton.addEventListener("click", function() {
        if (!iniFile) {
            window.alert("You need to provide undertale.ini");
            return;
        }
        if (!saveFile) {
            window.alert("You need to provide file0/file9");
            return;
        }
        load(iniFile, saveFile);
    }, false);
    var saveIniButton = document.getElementById("saveini");
    saveIniButton.addEventListener("click", saveIni, false);
    var save0Button = document.getElementById("save0");
    save0Button.addEventListener("click", function() { saveFileX("file0"); }, false);
    var save9Button = document.getElementById("save9");
    save9Button.addEventListener("click", function() { saveFileX("file9"); }, false);
    var weaponSelect = document.getElementById("weapon");
    weaponSelect.onchange = function() {
        var at = weaponAts[weaponSelect.value];
        if (at) {
            document.getElementById("weaponat").value = at;
        }
    };
    var armorSelect = document.getElementById("armor");
    armorSelect.onchange = function() {
        var df = ArmorDfs[armorSelect.value];
        if (df) {
            document.getElementById("armordf").value = df;
        }
    };
}

window.onload = start;
