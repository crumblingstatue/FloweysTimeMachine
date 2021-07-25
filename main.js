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

var weapons = {
    "3": "Stick",
    "13": "Toy Knife",
    "14": "Tough Glove",
    "25": "Ballet Shoes",
    "45": "Torn Notebook",
    "47": "Burnt Pan",
    "49": "Empty Gun",
    "51": "Worn Dagger",
    "52": "Real Knife"
};

var armors = {
    "4": "Bandage",
    "12": "Faded Ribbon",
    "15": "Manly Bandana",
    "24": "Old Tutu",
    "44": "Cloudy Glasses",
    "46": "Stained Apron",
    "48": "Cowboy Hat",
    "50": "Heart Locket",
    "53": "The Locket",
    "64": "temy armor"
};

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
    "3": 0,   // stick
    "13": 3,  // toy knife
    "14": 5,  // tough glove
    "25": 7,  // ballet shoes
    "45": 2,  // torn notebook
    "47": 10, // burnt pan
    "49": 12, // empty gun
    "51": 15, // worn dagger
    "52": 99  // Real Knife
};

var armorAts = {
    "48": 5, // cowboy hat
    "64": 10 // temy armor
}

var armorDfs = {
    "4": 0,   // bandage
    "12": 3,  // faded ribbon
    "15": 7,  // manly bandana
    "24": 10, // old tutu
    "44": 6,  // clouded glasses
    "46": 11, // stained apron
    "48": 12, // cowboy hat
    "50": 15, // heart locket
    "53": 99, // The Locket
    "64": 20  // temy armor
};

var rooms = [[], [], []];
rooms[2] = [
    "Initializer [Dogchecked]",
    "Introduction [Dogchecked]",
    "Title [Dogchecked]",
    "Menu [Dogchecked]",
    "Ruins - Starting point",
    "Ruins - Flowey spot",
    "Ruins - Entrance [SAVE]",
    "Ruins - Toriel stepping tile puzzle",
    "Ruins - Switch puzzle",
    "Ruins - Dummy room",
    "Ruins - Spike puzzle",
    "Ruins - Long corridor",
    "Ruins - Leaf Pile [SAVE]",
    "Ruins - Candy pillar",
    "Ruins - Mandatory fall trapdoor",
    "Ruins - First stone pushing puzzle",
    "Ruins - Trapdoor corridor puzzle",
    "Ruins - Talkback rock",
    "Ruins - Mouse Hole [SAVE]",
    "Ruins - Napstablook",
    "Ruins - Spider Bake Sale",
    "Ruins - 2 frogs",
    "Ruins - Switch hidden under trapdoor puzzle",
    "Ruins - 3 Pillars room 1",
    "Ruins - 3 Pillars room 2",
    "Ruins - 3 Pillars room 3",
    "Ruins - 3 Pillars room 4",
    "Ruins - Pillars room pit",
    "Ruins - 3-way fork",
    "Ruins - Toriel gossip frog",
    "Ruins - Toy knife room",
    "Ruins - Home [SAVE]",
    "Toriel's House: Entrance",
    "Toriel's House: Reading room",
    "Toriel's House: Corridor",
    "Toriel's House: Toriel's Room",
    "Toriel's House: Your Room",
    "Toriel's House: Kitchen",
    "Toriel's Basement 1",
    "Toriel's Basement 2",
    "Toriel's Basement 3",
    "Toriel's Basement: Toriel Boss Battle",
    "Toriel's Basement: Corridor to Flowey",
    "Toriel's Basement: Flowey",
    "Snowdin - Ruin exit",
    "Snowdin - Dark forest path",
    "Snowdin - Box Road [SAVE]",
    "Snowdin - Fishing rod",
    "Snowdin - Papyrus' Sentry Station",
    "Snowdin - Doggo",
    "Snowdin - Compass sign",
    "Snowdin - Snowman",
    "Snowdin - Electricity Maze",
    "Snowdin - Snow golf",
    "Snowdin - 2 guard dog houses",
    "Snowdin - Monster Kidz Word Search",
    "Snowdin - Spaghetti [SAVE]",
    "Snowdin - Warning: Dog Marriage",
    "Snowdin - XO puzzle 1",
    "Snowdin - XO puzzle 2",
    "Snowdin - Color tile puzzle",
    "Snowdin - Dog House [SAVE]",
    "Snowdin - Snow Papyrus & Sans",
    "Snowdin - Sliding XO puzzle",
    "Snowdin - Teleporting Sans",
    "Snowdin - Ice Cave entrance",
    "Snowdin - Snow poffs (Greater Dog)",
    "Snowdin - Gauntlet of Deadly Terror",
    "Snowdin - Town [SAVE]",
    "Snowdin Town: Ice haul wolf",
    "Snowdin Town: Boat harbor",
    "Snowdin Town: Inn lobby",
    "Snowdin Town: Inn bedroom",
    "Snowdin Town: Grillby's",
    "Snowdin Town: Library",
    "Snowdin Town: Papyrus's shed",
    "Snowdin Town: Papyrus and Sans's house",
    "Snowdin Town: Papyrus's room",
    "Snowdin Town: Sans's room [Dogchecked]",
    "Snowdin Town: Sans's room (dark) [Dogchecked]",
    "Snowdin Town: Sans's basement [Dogchecked]",
    "Snowdin - Papyrus Battle",
    "Waterfall - Entrance",
    "Waterfall - Checkpoint [SAVE]",
    "Waterfall - Falling rocks",
    "Waterfall - Tutu room",
    "Waterfall - Hallway [SAVE]",
    "Waterfall - Lily pad bridge",
    "Waterfall - Lily pad vertical bridge",
    "Waterfall - Quiche room",
    "Waterfall - Telescope",
    "Waterfall - Boat plank",
    "Waterfall - Undyne Spear dodging 1",
    "Waterfall - Bush after spear dodging",
    "Waterfall - Crystal [SAVE]",
    "Waterfall - Sans Telescope",
    "Waterfall - Nice Cream Stand",
    "Waterfall - Split Pathway",
    "Waterfall - Ballet shoes",
    "Waterfall - Duck",
    "Waterfall - Onionsan",
    "Waterfall - Artifact hub",
    "Waterfall - Piano",
    "Waterfall - Legendary Artifact",
    "Waterfall - Rainy Statue",
    "Waterfall - Umbrellas",
    "Waterfall - Rainy Path 1",
    "Waterfall - Rainy Path 2",
    "Waterfall - Palace View",
    "Waterfall - Umbrella ledge",
    "Waterfall - Bridge [SAVE]",
    "Waterfall - Bridge spear dodge",
    "Waterfall - Bridge fall",
    "Waterfall - Trash Zone Flower bed",
    "Waterfall - Trash Zone [SAVE]",
    "Waterfall - Training Dummy revenge",
    "Waterfall - Quiet Area [SAVE]",
    "Waterfall - Undyne's house entrance",
    "Waterfall - Undyne's house interior",
    "Waterfall - Twin Ghost houses",
    "Waterfall - Napstablook's house interior",
    "Waterfall - Hapstablook's house interior",
    "Waterfall - Snail Farm",
    "Waterfall - Pre Bird (Unused)",
    "Waterfall - Turtle shop",
    "Waterfall - River boat",
    "Waterfall - 2 waterfalls",
    "Waterfall - Mushroom maze",
    "Waterfall - Temmie Village [SAVE]",
    "Waterfall - Lamp maze",
    "Waterfall - Behind you",
    "Waterfall - More flowers",
    "Waterfall - Cave bridge",
    "Waterfall - Cave exit",
    "Waterfall - Undyne area",
    "Waterfall - Undyne area + 1",
    "Waterfall - Hotland Welcome",
    "Hotland - Entrance",
    "Hotland - Water tank",
    "Hotland - Laboratory Entrance [SAVE]",
    "Hotland - River boat",
    "Hotland - Laboratory Hub",
    "Hotland - Laboratory Upper Floor",
    "Hotland - Laboratory Exit",
    "Hotland - Treadmills 1",
    "Hotland - Magma Chamber [SAVE]",
    "Hotland - Burnt Pan",
    "Hotland - Lasers 1",
    "Hotland - Puzzle Gate 1",
    "Hotland - Left Boz Puzzle Entrance",
    "Hotland - Left Box Puzzle",
    "Hotland - Right Box Puzzle Entrance",
    "Hotland - Right Box Puzzle",
    "Hotland - Arrow bridge",
    "Hotland - Kitchen",
    "Hotland - Core View [SAVE]",
    "Hotland - Elevator R1",
    "Hotland - Elevator R2",
    "Hotland - Hot Dog Stand",
    "Hotland - Art Club Entrance",
    "Hotland - Art Club",
    "Hotland - Stained Apron",
    "Hotland - Treadmill switch puzzle",
    "Hotland - Arrow puzzle",
    "Hotland - Bad Opinion Zone [SAVE]",
    "Hotland - Bro guards",
    "Hotland - Bombastic News report",
    "Hotland - Upper Core View",
    "Hotland - Elevator L2",
    "Hotland - Elevator L3",
    "Hotland - Spider Bake Sale",
    "Hotland - F3 Puzzle Gate",
    "Hotland - F3 South Puzzle Entrance",
    "Hotland - F3 South Puzzle",
    "Hotland - F3 North Puzzle Entrance",
    "Hotland - F3 North Puzzle",
    "Hotland - Spider Entrance [SAVE]",
    "Hotland - Spider Room",
    "Hotland - Mettaton Poster",
    "Hotland - Theater Stage",
    "Hotland - Colored Tile Maze 2",
    "Hotland - Nice Cream Stand",
    "Hotland - Hotel Entrance",
    "Hotland - Hotel Lobby [SAVE]",
    "Hotland - Hotel Restaurant",
    "Hotland - Hotel Cordidor",
    "Hotland - Hotel Alley",
    "Hotland - Elevator R3",
    "Hotland - Core Entrance",
    "Hotland - Core Elevator",
    "Hotland - Core Pit",
    "Hotland - Core North of Elavator",
    "Hotland - Core Wrong order lasers",
    "Hotland - Core Crossroads",
    "Hotland - Core Dead End",
    "Hotland - Core Power Laser Puzzle",
    "Hotland - Core Branch [SAVE]",
    "Hotland - Core Ice Deposit",
    "Hotland - Core West Puzzle Entrance",
    "Hotland - Core West Puzzle Entrance + 1",
    "Hotland - Core West Puzzle Entrance + 2",
    "Hotland - Core East Money Trash Bin Entrance",
    "Hotland - Core End - 3",
    "Hotland - South of 100G Trash Can",
    "Hotland - Core End - 4",
    "Hotland - Core Get Lost",
    "Hotland - Core West Puzzle",
    "Hotland - Core Glamburger Trash Can",
    "Hotland - Core 100G Trash Can",
    "Hotland - Core Battle Bridge",
    "Hotland - Core End - 1",
    "Hotland - Core End [SAVE]",
    "Hotland - Core Mettaton Room",
    "Hotland - Core Final Elevator Entrance",
    "Hotland - Elevator L1",
    "Hotland - Core Final Elevator",
    "Castle Elevator [SAVE]",
    "Castle - Another Elevator",
    "Castle - Dark Path",
    "New Home [SAVE]",
    "New Home - Entrance",
    "New Home - Reading Room",
    "New Home - Corridor",
    "New Home - Asgore's Room",
    "New Home - Your Room",
    "New Home - Kitchen",
    "New Home - Basement 1",
    "New Home - Basement 2",
    "New Home - Basement 3",
    "New Home - Basement 4",
    "New Home - Elevator",
    "Last Corridor [SAVE]",
    "Throne Entrance [SAVE]",
    "Throne Entrance - Stairs Down",
    "Throne Entrance - Coffins",
    "Throne Room [SAVE]",
    "The End [SAVE]",
    "Barrier",
    "Flowey post-battle",
    "Neutral credits [Dogchecked]",
    "Path to outside [Dogchecked]",
    "Outside [Dogchecked]",
    "Laboratory Elevator",
    "True Lab - Elevator",
    "True Lab - Elevator Entrance",
    "True Lab - South Corridor",
    "True Laboratory [SAVE]",
    "True Lab - West Corridor 1",
    "True Lab - West Sinks",
    "True Lab - West red key slot",
    "True Lab - North Corridor 1",
    "True Lab - Bedroom [SAVE]",
    "True Lab - Northeast Corridor",
    "True Lab - Northeast blue key slot",
    "True Lab - North Corridor 2",
    "True Lab - Green key",
    "True Lab - Northwest skull [SAVE?]",
    "True Lab - Yellow Key Slot + TV",
    "True Lab - Northwest refrigerators",
    "True Lab - Green Key Slot",
    "True Lab - Fans",
    "True Lab - Elevator 2",
    "True Lab - Power room corridor",
    "True Lab - Power room",
    "Gaster Room",
    "Snowdin - Ice Cave 1",
    "Snowdin - Developer Room [Dogchecked]",
    "room2 [Dogchecked]",
    "Waterfall - Mysteryman hallway [Dogchecked]",
    "Waterfall - Mysteryman room [Dogchecked]",
    "Snowdin - Sound Test Room [Dogchecked]",
    "TESTROOM [Dogchecked]",
    "Waterfall - Redacted [Dogchecked]",
    "Waterfall - Cut Bridge Puzzle [Dogchecked]",
    "room_overworld [Dogchecked]",
    "room_overworld3 [Dogchecked]",
    "Bullet Test [Dogchecked]",
    "room_water16A [Dogchecked]",
    "Pacifist credits [Dogchecked]",
    "Pacifist credits - Highway [Dogchecked]",
    "Pacifist credits - Beach [Dogchecked]",
    "Pacifist credits - Mettaton performance [Dogchecked]",
    "Pacifist credits - School entrance [Dogchecked]",
    "Pacifist credits - Mount Ebott [Dogchecked]",
    "Pacifist credits - Special Thanks [Dogchecked]",
    "Pacifist credits - Bedroom [Dogchecked]",
    "Pacifist credits - The End [Dogchecked]",
    "Sprite Test [Dogchecked]",
    "Settings menu [Dogchecked]",
    "Control test room [Dogchecked]",
    "Omega Flowey - Initializer [Dogchecked]",
    "Omega Flowey - Fake intro [Dogchecked]",
    "Omega Flowey - Fake menu [Dogchecked]",
    "Omega Flowey - Fake save point [Dogchecked] [SAVE?]",
    "Omega Flowey [Dogchecked]",
    "Omega Flowey - Respawn mocking [Dogchecked]",
    "room_fire4 [Dogchecked]",
    "room_fire10_old [Dogchecked]",
    "room_fire10A_old [Dogchecked]",
    "Snowdin - Ice Puzzle [Dogchecked]",
    "Ruins - Rock Candy [Dogchecked]",
    "Snowdin - Growing snowball [Dogchecked]",
    "Waterfall - Torch puzzle [Dogchecked]",
    "Waterfall - Meet Undyne (Unused) [Dogchecked]",
    "Waterfall - Rooted mushroom [Dogchecked]",
    "room_monsteralign_test [Dogchecked]",
    "Battle room [Dogchecked]",
    "Flowey battle room [Dogchecked]",
    "\"Fast\" battle room [Dogchecked]",
    "New Home - Story battle room [Dogchecked]",
    "Game Over [Dogchecked]",
    "Snowdin Town - Shop [Dogchecked]",
    "Waterfall - Gerson's shop [Dogchecked]",
    "Hotland - Bratty and Catty [Dogchecked]",
    "Hotland - Burgerpants [Dogchecked]",
    "Waterfall - Tem Shop [Dogchecked]",
    "River person transition room [Dogchecked]",
    "Papyrus date [Dogchecked]",
    "Alphys date [Dogchecked]",
    "Omega Flowey - Wilting [Dogchecked]",
    "Flowey's pacifist speech [Dogchecked]",
    "room_empty [Dogchecked]",
    "room_emptywhite [Dogchecked]",
    "room_emptyblack [Dogchecked]",
    "Genocide - The Nothingness [Dogchecked]",
    "Snowdin - Title [Dogchecked]",
    "Dogcheck room",
    "Hotland - Quiz battle (Unused) [Dogchecked]",
    "Pre-Asriel scene (Unused) [Dogchecked]",
    "Pre-Asriel scene 2 (Unused) [Dogchecked]",
    "Asriel appears [Dogchecked]",
    "Asriel room [Dogchecked]",
    "Asriel flashbacks [Dogchecked]",
    "Asriel animation test [Dogchecked]",
    "Asriel phase 2 animation test [Dogchecked]",
    "Snowdin - Dog Shrine [Dogchecked]"
];

for (var i = 0; i < rooms[2].length; i++) {
    if (rooms[2][i].indexOf("[SAVE]") !== -1) {
        rooms[0][i] = rooms[2][i];
        rooms[1][i] = rooms[2][i];
    } else if (rooms[2][i].indexOf("[Dogchecked]") === -1) {
        rooms[1][i] = rooms[2][i];
    }
}
// rooms[0] is SAVE points only, rooms[1] is non-Dogchecked only, rooms[2] contains all rooms.

var roomSelectOptions = [
    "SAVE points only",
    "Accessible rooms only",
    "All rooms"
];

// Flags initialized in flags.js

var killedBool = [
    "Initial state",
    "Killed"
];

var floweyStates = [
    "None (Initial state)",
    "Light blue (Initiated fight)",
    "Orange",
    "Blue",
    "Purple",
    "Green",
    "Yellow",
    "None (Finished fight)"
];

var torielStates = {
    "0": "Initial state",
    "1": "In basement",
    "3": "Fled from",
    "4": "Killed",
    "5": "Spared"
};

var comedianStates = {
    "0": "Initial state",
    "1": "Laughed at joke [Yellow credit]",
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
    "-3": "Lost to thrice",
    "-2": "Lost to twice",
    "-1": "Lost to once",
    "0": "Initial state",
    "1": "Killed"
};

var plotValues = {
    "2": "Didn't fight Papyrus",
    "101": "Fought Papyrus",
    "119": "Unknown",
    "164": "Hotlands genocide",
    "199": "Pre-Last Corridor",
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
    "2": "Continued humming [Yellow credit]"
};

var madDummyStates = killedBool; // This flag is actually for Glad Dummy, as Mad Dummy cannot be killed.

var undyneStates1 = killedBool; // Undyne The Undying

var undyneStates2 = { // Undyne in general
    "0": "Initial state",
    "1": "Killed",
    "2": "Sick"
};

var broGuardsStates = killedBool;
var muffetStates = killedBool;
var mettatonStates = killedBool;

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
        closure(text.match(/[^\r\n]+/g).map(function(line) {
            return line.trim();
        }));
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
            document.getElementById("ini-omega-flowey-trapped").checked = (parseInt(iniobj.FFFFF.F.trim()) === 1);
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
            document.getElementById("ini-dodged-all-special-thanks").checked = (parseInt(iniobj.reset.s_key.trim()) === 1);
        }
    } else {
        document.getElementById("ini-dodged-all-special-thanks").checked = false;
    }
    if (iniobj.General.fun) {
        document.getElementById("ini-fun").value = parseInt(iniobj.General.fun.trim());
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

function updateSelection(id, value, list) {
    "use strict";
    value = parseInt(value.trim());
    while (document.getElementById(id).firstChild) {
        document.getElementById(id).removeChild(document.getElementById(id).firstChild);
    }
    if (!list[value]) {
        list[value] = "Unrecognized (" + value + ")";
    }
    loadSelectFromObj(id, list);
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
    document.getElementById("sav-undyne-cell").checked = (parseInt(values[495].trim()) === 1);
    if (parseInt(values[495].trim()) === 1) {
        cellOpts[210] = "Papyrus and Undyne";
    } else {
        cellOpts[210] = "Papyrus's Phone";
    }
    for (var i = 1; i <= 8; i++) {
        updateSelection("sav-invslot" + i, values[10 + (i * 2)], items);
        updateSelection("sav-cellslot" + i, values[11 + (i * 2)], cellOpts);
    }
    if (document.getElementById("allow-non-equipables").checked) {
        updateSelection("sav-weapon", values[28], items);
        updateSelection("sav-armor", values[29], items);
    } else {
        updateSelection("sav-weapon", values[28], weapons);
        updateSelection("sav-armor", values[29], armors);
    }
    updateSelection("sav-trainingdummystate", values[44], trainingDummyStates);
    updateSelection("sav-torielstate", values[75], torielStates);
    updateSelection("sav-doggostate", values[82], doggoStates);
    updateSelection("sav-dogamydogaressastate", values[83], dogamyDogaressaStates);
    updateSelection("sav-greaterdogstate", values[84], greaterDogStates);
    updateSelection("sav-comedianstate", values[87], comedianStates);
    updateSelection("sav-papyrusstate", values[97], papyrusStates);
    updateSelection("sav-shyrenstate", values[111], shyrenStates);
    //document.getElementById("sav-unkkills").value = values[231];
    document.getElementById("sav-ruinskills").value = values[232];
    document.getElementById("sav-snowdinkills").value = values[233];
    document.getElementById("sav-waterfallkills").value = values[234];
    document.getElementById("sav-hotlandkills").value = values[235];
    updateSelection("sav-undynestate1", values[281], undyneStates1);
    updateSelection("sav-maddummystate", values[282], madDummyStates);
    updateSelection("sav-undynestate2", values[380], undyneStates2);
    updateSelection("sav-muffetstate", values[427], muffetStates);
    updateSelection("sav-broguardsstate", values[432], broGuardsStates);
    updateSelection("sav-mettatonstate", values[455], mettatonStates);
    document.getElementById("sav-exitedtruelab").checked = (parseInt(values[523].trim()) === 12);
    document.getElementById("sav-defeatedasriel").checked = (parseInt(values[37].trim()) === 1);
    updateSelection("sav-plotvalue", values[542], plotValues);
    if (parseInt(values[545].trim()) != document.getElementById("sav-havecell").checked) {
        document.getElementById("cellslots").classList.toggle('hidden');
    }
    document.getElementById("sav-havecell").checked = (parseInt(values[545].trim()) === 1);
    document.getElementById("sav-location").value = parseInt(values[547].trim());
    document.getElementById("sav-fun").value = parseInt(values[35].trim());
    for (var i = 0; i < flags.length; i++) {
        document.getElementById("sav-flag-" + i).value = values[30 + i];
    }
}

// Update an array of values from the save data form.
function updateSaveValuesFromForm(values) {
    "use strict";
    if (advancedMode) {
        for (var i = 0; i < flags.length; i++) {
            values[30 + i] = document.getElementById("sav-flag-" + i).value;
        }
    }
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
    for (var i = 1; i <= 8; i++) {
        values[10 + (i * 2)] = document.getElementById("sav-invslot" + i).value;
        values[11 + (i * 2)] = document.getElementById("sav-cellslot" + i).value;
    }
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
    //values[231] = document.getElementById("sav-unkkills").value;
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
    values[495] = +document.getElementById("sav-undyne-cell").checked;
    if (document.getElementById("sav-exitedtruelab").checked) {
        values[523] = "12";
    } else {
        values[523] = "0";
    }
    values[37] = +document.getElementById("sav-defeatedasriel").checked;
    values[542] = document.getElementById("sav-plotvalue").value;
    values[545] = +document.getElementById("sav-havecell").checked;
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
    var advancedMode = localStorage.getItem("advanced");
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
    // Initialize form
    loadSelectFromObj("sav-location", rooms[1]);
    loadSelectFromObj("ini-location", rooms[1]);
    loadSelectFromObj("allowed-locations", roomSelectOptions);
    loadSelectFromObj("allowed-locations-2", roomSelectOptions);
    document.getElementById("allowed-locations").value = 1;
    document.getElementById("allowed-locations-2").value = 1;
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
    for (var i = 1; i <= 8; i++) {
        loadSelectFromObj("sav-invslot" + i, items);
        loadSelectFromObj("sav-cellslot" + i, cellOpts);
    }
    loadSelectFromObj("sav-weapon", weapons);
    loadSelectFromObj("sav-armor", armors);
    var advanced = document.getElementById("advanced");
    if (advancedMode) {
        advanced.parentElement.classList.remove('hidden');
    }
    for (var i = 0; i < flags.length; i += 3) {
        for (var j = 0; j < 3; j++) {
            var newLabel = document.createElement("label");
            newLabel.setAttribute("for", "sav-flag-" + (i + j));
            newLabel.innerHTML = "[" + (i + j) + "] " + flags[i + j];
            advanced.appendChild(newLabel);
        }
        for (var j = 0; j < 3; j++) {
            var newField = document.createElement("input");
            newField.setAttribute("type", "number");
            newField.setAttribute("id", "sav-flag-" + (i + j));
            newField.setAttribute("value", 0);
            advanced.appendChild(newField);
        }
    }
    loadPresetSelect();
    loadPreset("Ruins Start");
    
    // Selecting a file
    var iniFile, saveFile;
    document.getElementById("ini-file").addEventListener("change", function(evt) {
        iniFile = evt.target.files[0];
        if (iniFile) {
            document.getElementById("ini-loadbutton").classList.remove('disabled');
            document.querySelector(`label[for="${event.target.id}"]`).style = "border-color: #fff"
        } else {
            document.getElementById("ini-loadbutton").classList.add('disabled');
        }
    });
    document.getElementById("sav-file").addEventListener("change", function (evt) {
        saveFile = evt.target.files[0];
        if (saveFile) {
            document.getElementById("sav-loadbutton").classList.remove('disabled');
            document.querySelector(`label[for="${event.target.id}"]`).style = "border-color: #fff"
        } else {
            document.getElementById("sav-loadbutton").classList.add('disabled');
        }
    });
    
    // Loading
    document.getElementById("ini-loadbutton").addEventListener("click", function() {
        if (!iniFile) {
            window.alert("You need to choose a file first!");
            return;
        }
        loadIniFromFile(iniFile, function(iniobj) {
            updatePersistentDataForm(iniobj);
            ini = iniobj;
        });
    });
    document.getElementById("sav-loadbutton").addEventListener("click", function() {
        if (!saveFile) {
            window.alert("You need to choose a file first!");
            return;
        }
        loadSaveFromFile(saveFile, function(lines) {
            updateSaveDataForm(lines);
            saveLines = lines;
        });
    });
    
    // Saving
    document.getElementById("ini-savebutton").addEventListener("click", function() {
        updateIniFromForm(ini);
        saveIniToFile(ini);
    });
    document.getElementById("sav-savebutton").addEventListener("click", function() {
        updateSaveValuesFromForm(saveLines);
        saveSaveValuesToFile(saveLines);
    });
    
    // system_information download
    document.getElementById("savesi2").addEventListener("click", function() {
        var blob = new Blob([], {type: "application/octet-stream"});
        saveAs(blob, "system_information_962", true);
        flowey_laugh_once();
    });
    document.getElementById("savesi3").addEventListener("click", function() {
        var blob = new Blob([], {type: "application/octet-stream"});
        saveAs(blob, "system_information_963", true);
        flowey_laugh_once();
    });
    
    // Weapon/armor AT/DF calculation
    var weaponSelect = document.getElementById("sav-weapon");
    var armorSelect = document.getElementById("sav-armor");
    weaponSelect.addEventListener("change", function() {
        var weaponAt = weaponAts[weaponSelect.value];
        var armorAt = armorAts[armorSelect.value] || 0; // Cowboy Hat, Temmie Armor
        if (typeof weaponAt !== "undefined") {
            document.getElementById("sav-weaponat").value = weaponAt + armorAt;
        }
        
    });
    armorSelect.addEventListener("change", function() {
        var df = armorDfs[armorSelect.value];
        if (typeof df !== "undefined") {
            document.getElementById("sav-armordf").value = df;
        }
        var weaponAt = weaponAts[weaponSelect.value];
        var armorAt = armorAts[armorSelect.value] || 0;
        if (typeof weaponAt !== "undefined") {
            document.getElementById("sav-weaponat").value = weaponAt + armorAt;
        } else {
            document.getElementById("sav-weaponat").value = parseInt(document.getElementById("sav-weaponat").value) + armorAt;
        }
    });
    
    // Interface-altering options
    var allowedLocations1 = document.getElementById("allowed-locations");
    var allowedLocations2 = document.getElementById("allowed-locations-2");
    allowedLocations1.addEventListener("change", function() {
        allowedLocations2.value = allowedLocations1.value;
        updateSelection("ini-location", document.getElementById("ini-location").value, rooms[allowedLocations1.value]);
        updateSelection("sav-location", document.getElementById("sav-location").value, rooms[allowedLocations1.value]);
    });
    allowedLocations2.addEventListener("change", function() {
        allowedLocations1.value = allowedLocations2.value;
        updateSelection("ini-location", document.getElementById("ini-location").value, rooms[allowedLocations1.value]);
        updateSelection("sav-location", document.getElementById("sav-location").value, rooms[allowedLocations1.value]);
    });
    document.getElementById("allow-non-equipables").addEventListener("change", function() {
        if (document.getElementById("allow-non-equipables").checked) {
            updateSelection("sav-weapon", weaponSelect.value, items);
            updateSelection("sav-armor",  armorSelect.value,  items);
        } else {
            updateSelection("sav-weapon", weaponSelect.value, weapons);
            updateSelection("sav-armor",  armorSelect.value,  armors);
        }
    });
    document.getElementById("sav-havecell").addEventListener("change", function() {
        document.getElementById("cellslots").classList.toggle('hidden');
    });
    var callUndyne = document.getElementById("sav-undyne-cell");
    callUndyne.addEventListener("change", function() {
        if (callUndyne.checked) {
            cellOpts[210] = "Papyrus and Undyne";
        } else {
            cellOpts[210] = "Papyrus's Phone";
        }
        for (var i = 1; i <= 8; i++) {
            updateSelection("sav-cellslot" + i, document.getElementById("sav-cellslot" + i).value, cellOpts);
        }
    });
    
    // Presets
    document.getElementById("builtinpresetload").addEventListener("click", function() {
        var name = document.getElementById("builtinpresetselect").value;
        loadPreset(name);
    });
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
            document.getElementById("userpresetload").classList.remove('disabled');
            document.getElementById("userpresetsave").classList.remove('disabled');
            document.getElementById("userpresetdelete").classList.remove('disabled');
            document.getElementById("userpresetexport").classList.remove('disabled');
        }
    });
    document.getElementById("userpresetsave").addEventListener("click", function() {
        var name = document.getElementById("userpresetselect").value;
        if (name !== null && name !== "") {
            saveUserPreset(name);
        } else {
            window.alert("You need to select a valid preset first!");
        }
    });
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
    });
    document.getElementById("userpresetdelete").addEventListener("click", function() {
        var selection = document.getElementById("userpresetselect");
        var name = selection.value;
        var children = selection.childNodes;
        for (var i = 0; i < children.length; i++) {
            if (children[i].value === name) {
                selection.removeChild(children[i]);
                break;
            }
        }
        var item = localStorage.getItem("userPresets");
        var presets = JSON.parse(item);
        delete presets[name];
        localStorage.setItem("userPresets", JSON.stringify(presets));
        if (document.getElementById("userpresetselect").value === "") {
            document.getElementById("userpresetload").classList.add('disabled');
            document.getElementById("userpresetsave").classList.add('disabled');
            document.getElementById("userpresetdelete").classList.add('disabled');
            document.getElementById("userpresetexport").classList.add('disabled');
        }
    });
    if (document.getElementById("userpresetselect").value !== "") {
        document.getElementById("userpresetload").classList.remove('disabled');
        document.getElementById("userpresetsave").classList.remove('disabled');
        document.getElementById("userpresetdelete").classList.remove('disabled');
        document.getElementById("userpresetexport").classList.remove('disabled');
    }
    document.getElementById("userpresetexport").addEventListener("click", function() {
        var presets = JSON.parse(localStorage.getItem("userPresets"));
        var name = document.getElementById("userpresetselect").value;
        saveUserPreset(name);
        var preset = presets[name];
        var string = "presets[\"" + name + "\"] = " + JSON.stringify(preset) + ";";
        var blob = new Blob([string], {type: "application/octet-stream"});
        saveAs(blob, name + ".js", true);
    });
    
    document.getElementById("floweyimg").addEventListener("click", function() {
        document.getElementById("floweyimg").src = "res/flowey_wink.png";
        localStorage.setItem("laughed", false);
        advanced.parentElement.classList.remove('hidden');
        localStorage.setItem("advanced", true);
        advancedMode = true;
    });
    document.getElementById("hide-advanced").addEventListener("click", function() {
        advanced.parentElement.classList.add('hidden');
        advancedMode = false;
        localStorage.setItem("advanced", false);
    });
}

document.addEventListener("DOMContentLoaded", start);
