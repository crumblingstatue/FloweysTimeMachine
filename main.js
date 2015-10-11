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
    "Many Bandana",
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

var rooms = {
    4: "Ruins - Starting point",
    5: "Ruins - Flowey spot",
    6: "Ruins - Entrance (save)",
    7: "Ruins - Toriel stepping tile puzzle",
    8: "Ruins - Switch puzzle",
    9: "Ruins - Dummy room",
    10: "Ruins - Spike puzzle",
    11: "Ruins - Long corridor",
    12: "Ruins - Leaf Pile (save)",
    13: "Ruins - Candy pillar",
    14: "Ruins - Mandatory fall trapdoor",
    15: "Ruins - First stone pushing puzzle",
    16: "Ruins - Trapdoor corridor puzzle",
    17: "Ruins - Talkback rock",
    18: "Ruins - Mouse Hole (save)",
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
    31: "Ruins - Home (save)",
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
    46: "Snowdin - Box Road (save)",
    47: "Snowdin - Fishing rod",
    48: "Snowdin - Papyrus' Sentry Station",
    49: "Snowdin - No moving dog",
    50: "Snowdin - Compass sign",
    51: "Snowdin - Snowman",
    52: "Snowdin - Electricity Maze",
    53: "Snowdin - Snow golf",
    54: "Snowdin - 2 guard dog houses",
    55: "Snowdin - Monster Kidz Word Search",
    56: "Snowdin - Spaghetti (save)",
    57: "Snowdin - Warning: Dog Marriage",
    58: "Snowdin - XO puzzle 1",
    59: "Snowdin - XO puzzle 2",
    60: "Snowdin - Color tile puzzle",
    61: "Snowdin - Dog House (save)",
    62: "Snowdin - Snow Papyrus & Sans",
    63: "Snowdin - Sliding XO puzzle",
    64: "Snowdin - Teleporting Sans",
    65: "Snowdin - Ice Cave entrance",
    66: "Snowdin - Snow poffs (Greater Dog)",
    67: "Snowdin - Gauntlet of Deadly Terror",
    68: "Snowdin - Town (save)",
    69: "Snowdin Town: Ice haul wolf",
    70: "Snowdin Town: Boat harbor",
    71: "Snowdin Town: Inn lobby",
    73: "Snowdin Town: Grillby's",
    74: "Snowdin Town: Library",
    81: "Snowdin - Papyrus Battle",
    82: "Waterfall - Entrance",
    83: "Waterfall - Checkpoint (save)",
    84: "Waterfall - Falling rocks",
    86: "Waterfall - Hallway (save)",
    87: "Waterfall - Lily pad bridge",
    88: "Waterfall - Lily pad vertical bridge",
    90: "Waterfall - Telescope",
    91: "Waterfall - Boat plank",
    92: "Waterfall - Undyne Spear dodging 1",
    93: "Waterfall - Bush after spear dodging",
    94: "Waterfall - Crystal (save)",
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
    110: "Waterfall - Bridge (save)",
    111: "Waterfall - Bridge spear dodge",
    112: "Waterfall - Bridge fall",
    113: "Waterfall - Trash Zone Flower bed",
    114: "Waterfall - Trash Zone (save)",
    115: "Waterfall - Training Dummy revenge",
    116: "Waterfall - Quiet Area (save)",
    117: "Waterfall - Undyne's house entrance",
    119: "Waterfall - Twin Ghost houses",
    265: "Snowdin - Ice Cave 1",
};

function parseIni(text) {
    var lines = text.split("\n");
    var section = null;
    var obj = {};
    lines.forEach(function(line) {
        // Ignore empty lines
        if (line === "") {
            return;
        }
        // If line starts with [, it is a section header
        var lbracket = line.indexOf("[");
        if (lbracket != -1) {
            var rbracket = line.slice(lbracket).indexOf("]") + lbracket;
            if (rbracket != -1) {
                section = line.slice(lbracket + 1, rbracket);
                obj[section] = {};
            }
        } else { // Otherwise, it is assumed to be an assignment
            if (section === null) {
                return { error: "Assignment outside of a section" };
            }
            var eq = line.indexOf("=");
            if (eq == -1) {
                return { error: "Expected '='" };
            }
            var lquot = line.indexOf('"');
            if (lquot == -1) {
                return { error: "Expected '\"'" };
            }
            var rquot = line.slice(lquot + 1).indexOf('"') + lquot + 1;
            if (rquot == -1) {
                return { error: "Unterminated value string" };
            }
            var value = line.slice(lquot + 1, rquot);
            var key = line.slice(0, eq);
            obj[section][key] = value;
        }
    });
    return { ok: obj };
}

function loadFile(file, name) {
    if (!file) {
        return;
    }

    var reader = new FileReader();
    reader.onload = function(e) {
        var contents = e.target.result;
        if (name == "undertale-ini") {
            var result = parseIni(contents);
            if (result.error) {
                alert("Error parsing ini: " + result.error);
                return;
            }
            var node = document.getElementById(name + '-contents');
            node.innerHTML = '';
            var obj = result.ok;
            for (var section in obj) {
                node.innerHTML += '<h4>' + section + '</h4>';
                node.innerHTML += '<form>';
                for (var key in obj[section]) {
                    node.innerHTML += '<label for="' + key + '">' + key + '</label>';
                    node.innerHTML += '<input type="text" id="' + key + '"' +
                                      'value="' + obj[section][key] + '" /> <br />';
                }
                node.innerHTML += '</form>';
            }
        } else {

        }
    };
    reader.readAsText(file);
}

function insert_inv_lists() {
    for (var i = 0; i < items.length; i++) {
        for (var j = 1; j <= 8; j++) {
            var newOption = document.createElement("option");
            var newContent = document.createTextNode(items[i]);
            newOption.appendChild(newContent);
            var select = document.getElementById("invslot" + j);
            select.appendChild(newOption);
        }
    }
}

function insert_rooms() {
    var select = document.getElementById("location");

    for (var key in rooms) {
        var newOption = document.createElement("option");
        var newContent = document.createTextNode(rooms[key]);
        newOption.appendChild(newContent);
        select.appendChild(newOption);
    }
}

function start() {
    insert_rooms();
    insert_inv_lists();
}
