var debugVars = {}; // Could be handy

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
    // "0": "Empty",
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
    // "0": "Empty",
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
var flagFor = { // Link flags with inputs
    "sav-fun": 5,
    "sav-defeatedasriel": 7,
    "sav-trainingdummystate": 14,
    "sav-torielstate": 45,
    "sav-doggostate": 52,
    "sav-dogamydogaressastate": 53,
    "sav-greaterdogstate": 54,
    "sav-comedianstate": 57,
    "sav-papyrusstate": 67,
    "sav-shyrenstate": 81,
    "sav-ruinskills": 202,
    "sav-snowdinkills": 203,
    "sav-waterfallkills": 204,
    "sav-hotlandkills": 205,
    "sav-undynestate1": 251,
    "sav-maddummystate": 252,
    "sav-undynestate2": 350,
    "sav-muffetstate": 397,
    "sav-broguardsstate": 402,
    "sav-mettatonstate": 425,
    "sav-undyne-cell": 465
};

var inputForFlag = {}; // and vice versa
for (var id in flagFor) {
    inputForFlag["sav-flag-" + flagFor[id]] = id;
}

var killedBool = [
    "Initial state",
    "Killed"
];

var simpleDogStates = [
    "Initial state",
    "Killed",
    "Played fetch (Spared)"
];

var stateChoiceArrays = {
    "sav-trainingdummystate": [
        "Initial state",
        "Killed",
        "Talked to",
        "Tired of your shenanigans"
    ],
    "sav-torielstate": {
        "0": "Initial state",
        "1": "In basement",
        "3": "Fled from",
        "4": "Killed",
        "5": "Spared"
    },
    "sav-doggostate": simpleDogStates,
    "sav-dogamydogaressastate": simpleDogStates,
    "sav-greaterdogstate": [
        "Initial state",
        "Killed",
        "Played fetch (Spared)",
        "Ignored"
    ],
    "sav-comedianstate": [
        "Initial state",
        "Laughed at joke [Yellow credit]",
        "Killed"
    ],
    "sav-papyrusstate": {
        "-3": "Lost to thrice",
        "-2": "Lost to twice",
        "-1": "Lost to once",
        "0": "Initial state",
        "1": "Killed"
    },
    "sav-shyrenstate": [
        "Initial state",
        "Killed",
        "Continued humming [Yellow credit]"
    ],
    "sav-undynestate1": killedBool, // Undyne The Undying
    "sav-maddummystate": killedBool, // *Glad Dummy
    "sav-undynestate2": [ // Undyne in general
        "Initial state",
        "Killed",
        "Sick"
    ],
    "sav-muffetstate": killedBool,
    "sav-broguardsstate": killedBool,
    "sav-mettatonstate": killedBool,
    "sav-weapon": weapons,
    "sav-armor": armors,
    "sav-plotvalue": {
        // "0": "New game",
        // "1": "Flowey intro complete",
        "2": "First save",
        "3": "Stepping tile puzzle complete",
        "4": "Toriel waiting at switch puzzle",
        "4.5": "First switch flipped",
        "5": "Switch puzzle complete",
        "5.5": "Toriel waiting at dummy",
        // "6": "Dummy defeated",
        "7": "Toriel at spike puzzle",
        // "7.5": "Crossing spike puzzle",
        "8": "Spike puzzle complete",
        // "8.5": "Unnecessary Tension",
        "9": "Toriel left",
        "9.2": "Received Toriel puzzle call",
        "9.4": "Received Toriel preference call",
        "9.6": "Received Toriel confirmation call",
        "9.8": "Received Toriel allergies call",
        // "10.3": "Napstablook spared",
        // "10.35": "Battle exited",
        // "10.4": "And some dialogue", // needs better desc.
        "11": "Napstablook defeated",
        "12": "Received Toriel pockets call",
        "13": "Just one switch puzzle solved",
        "14": "Blue switch flipped",
        "15": "Red switch flipped",
        "16": "Green switch flipped",
        "17": "Met Toriel at Ruins end",
        "18": "Toriel waiting at bedrooms",
        "19": "Toriel reading",
        "19.1": "Received sleep suggestion",
        "19.2": "\"I have always wanted to be a teacher.\"",
        // "19.3": "Receiving snail fact",
        "19.4": "Received snail fact",
        // "19.9": "\"I have to do something\"",
        // "20": "Toriel standing up",
        "21": "Toriel in basement",
        "22": "Toriel in Basement 2",
        "23": "Toriel in Basement 3",
        "24": "Toriel at Ruins Exit",
        // It goes back to 11 for a moment here, fwiw. Copy-paste.
        "25": "Toriel defeated",
        // "28": "Flowey judgment complete",
        // "30": "Exited Ruins",
        // "36": "Met Sans and Papyrus, Sans hasn't left",
        "37": "Sans/Papyrus intro complete",
        "40": "Papyrus rock scene complete",
        // "41": "Doggo defeated, still in battle",
        "42": "Doggo defeated",
        "43": "Invisible Maze complete",
        "47": "Crossword complete",
        "49": "Undersnow switch complete",
        // "50": "Dogi defeated, still in battle",
        "51": "Dogi defeated",
        "53": "Small XO puzzle complete",
        "54": "Large XO puzzle started",
        "56": "Large XO puzzle complete",
        "57": "XO puzzles complete (Genocide)",
        "58": "Papyrus's tile puzzle complete",
        "63": "Icy XO puzzle complete",
        // "60": "Greater Dog defeated, still in battle",
        // "61": "Greater Dog spared",
        "65": "Greater Dog defeated",
        "67": "Gauntlet of Deadly Terror complete",
        // "100": "Papyrus defeated, in post-battle cutscene",
        "101": "Papyrus defeated",
        "106": "Undyne intro complete",
        "107": "Bridge Seed puzzles complete", // technically when you get Papyrus's call, or don't get it as the case may be, but this seems more apt.
        "108": "Hidden door opened",
        // "109": "", // Something about that unused torch puzzle in room_water7_older? Inaccessible anyway.
        "110": "Undyne spear-throwing scene complete",
        "111": "Shyren defeated",
        "112": "Monster Kid crouching",
        "113": "Climbed ledge",
        "115": "Undyne bridge spears scene complete (entered dump)",
        "116": "Mad Dummy defeated",
        "117": "Received Napstablook's directions/Glad Dummy defeated", // verify
        "118": "\"Behind you.\" scene complete",
        "119": "Pre-Undyne the Undying", // Set by a trigger in room_water19. The trigger also causes the Flowey echo flower and "Shouldn't proceed yet" on Genocide.
        "120": "Final Monster Kid scene complete",
        "121": "Received Undyne speech",
        "122": "Undyne defeated",
        // "126": "Quiz show complete, phone not upgraded",
        "127": "Quiz show complete (Neutral/Pacifist)",
        "130": "Received Alphys hangup",
        "131": "Received Alphys laser explanation",
        "132": "Received Alphys shooter puzzle explanation",
        "133": "First shooter puzzle complete", // triggers on door opening
        "133.5": "Received Alphys unnecessary puzzle explanation",
        // "134": "Ingredients collected",
        "135": "Cooking show complete",
        "137": "Received Alphys CORE explanation",
        "139": "Received Alphys three-switches explanation",
        "140": "Three-switches puzzle complete",
        "143": "Received Alphys bathroom call",
        "146": "Royal Guards defeated (Neutral/Pacifist)",
        "160": "Mettaton intro complete (Genocide)",
        "161": "News show complete",
        "162": "\"With your human soul, you can pass through the barrier!\"",
        "163": "\"Let's be friends on UnderNet!\"",
        "164": "Second shooter puzzle complete/Royal Guards defeated (Genocide)",
        "165": "Muffet defeated (Neutral/Pacifist)",
        // "167": "Opera scene complete",
        "168": "Mettaton's tile puzzle complete",
        "176": "Spotted mercenaries",
        "177": "Received Alphys elevator call",
        "179": "First Madjick battle complete",
        "180": "Received Alphys laser order call",
        "181": "Received Alphys apology call",
        "182": "\"Try heading to the right!\"",
        "184": "Reactivating lasers bridge complete",
        "185": "\"This doesn't look like my map at all\"/Muffet defeated (Genocide)",
        // "193": "Mettaton defeated, Alphys scene incomplete",
        "199": "Mettaton defeated",
        "201": "True Lab complete (Pacifist)/Last Corridor complete (Neutral/Genocide)",
        "206": "Asgore intro complete",
        "207": "\"A visit to the dentist\"",
        "208": "Pre-Asgore",
        "999": "Pacifist epilogue"
    },
    "sav-location": rooms[1],
    "ini-location": rooms[1],
    "allowed-locations": roomSelectOptions,
    "allowed-locations-2": roomSelectOptions,
    "ini-omega-flowey-soul": [
        "None (Initial state)",
        "Light blue (Initiated fight)",
        "Orange",
        "Blue",
        "Purple",
        "Green",
        "Yellow",
        "None (Finished fight)"
    ]
};

for (var i = 1; i <= 8; i++) {
    stateChoiceArrays["sav-invslot" + i] = items;
    stateChoiceArrays["sav-cellslot" + i] = cellOpts;
}

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
    updateSelection("ini-location", iniobj.General.Room);
    document.getElementById("ini-kills").value = Number(iniobj.General.Kills.trim());
    document.getElementById("ini-love").value = Number(iniobj.General.Love.trim());
    if (iniobj.FFFFF) {
        if (iniobj.FFFFF.F) {
            document.getElementById("ini-omega-flowey-trapped").checked = (Number(iniobj.FFFFF.F.trim()) === 1);
        }
        if (iniobj.FFFFF.P) {
            updateSelection("ini-omega-flowey-soul", iniobj.FFFFF.P);
        }
        if (iniobj.FFFFF.D) {
            document.getElementById("ini-omega-flowey-deaths").value = Number(iniobj.FFFFF.D.trim());
        }
    } else {
        document.getElementById("ini-omega-flowey-trapped").checked = false;
    }
    if (iniobj.reset) {
        if (iniobj.reset.s_key) {
            document.getElementById("ini-dodged-all-special-thanks").checked = (Number(iniobj.reset.s_key.trim()) === 1);
        }
    } else {
        document.getElementById("ini-dodged-all-special-thanks").checked = false;
    }
    if (iniobj.General.fun) {
        document.getElementById("ini-fun").value = Number(iniobj.General.fun.trim());
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
    var upcomingSoul = Number(document.getElementById("ini-omega-flowey-soul").value);
    if (upcomingSoul) {
        if (!ini.FFFFF) {
            ini.FFFFF = {};
        }
        ini.FFFFF.P = upcomingSoul;
    }
    var timesDied = Number(document.getElementById("ini-omega-flowey-deaths").value);
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
    var fun = Number(document.getElementById("ini-fun").value);
    if (fun) {
        ini.General.fun = fun;
    }
}

function updateSelection(id, value, newChoiceArray) {
    "use strict";
    var select = document.getElementById(id);
    
    // Sanitize value
    if (typeof value === "string") {
        value = Number(value.trim());
    } else if (value === undefined) {
        if (select.value === undefined) {
            window.alert("No value found for form input " + id + ", defaulting to 0.");
            value = 0;
        } else {
            value = select.value;
        }
    }
    
    // Switch selected array
    if (newChoiceArray) {
        stateChoiceArrays[id] = newChoiceArray;
    }
    
    // Default case if incorrect ID is used (or stateChoiceArrays missing a case)
    if (!stateChoiceArrays[id]) {
        window.alert("No associated array for form input " + id + " found, defaulting to [\"Error\"].");
        stateChoiceArrays[id] = ["Error"];
    }
    
    // Add "Unrecognized" value if necessary
    if (!stateChoiceArrays[id][value]) {
        stateChoiceArrays[id][value] = "Unrecognized (" + value + ")";
    }
    
    // Clear old options
    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }
    
    // Create options
    for (var key of Object.keys(stateChoiceArrays[id]).sort((a, b) => a - b)) { // (Decimal keys don't automatically sort correctly)
        var newOption = document.createElement("option");
        newOption.setAttribute("value", key);
        var newContent = document.createTextNode(stateChoiceArrays[id][key]);
        newOption.appendChild(newContent);
        select.appendChild(newOption);
    }
    
    // Update value
    select.value = value;
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
    document.getElementById("sav-undyne-cell").checked = (Number(values[495].trim()) === 1);
    if (Number(values[495].trim()) === 1) {
        cellOpts[210] = "Papyrus and Undyne";
    } else {
        cellOpts[210] = "Papyrus's Phone";
    }
    for (var i = 1; i <= 8; i++) {
        updateSelection("sav-invslot" + i, values[10 + (i * 2)]);
        updateSelection("sav-cellslot" + i, values[11 + (i * 2)]);
    }
    if (document.getElementById("allow-non-equipables").checked) {
        updateSelection("sav-weapon", values[28], items);
        updateSelection("sav-armor", values[29], items);
    } else {
        updateSelection("sav-weapon", values[28], weapons);
        updateSelection("sav-armor", values[29], armors);
    }
    updateSelection("sav-trainingdummystate", values[44]);
    updateSelection("sav-torielstate", values[75]);
    updateSelection("sav-doggostate", values[82]);
    updateSelection("sav-dogamydogaressastate", values[83]);
    updateSelection("sav-greaterdogstate", values[84]);
    updateSelection("sav-comedianstate", values[87]);
    updateSelection("sav-papyrusstate", values[97]);
    updateSelection("sav-shyrenstate", values[111]);
    document.getElementById("sav-ruinskills").value = values[232];
    document.getElementById("sav-snowdinkills").value = values[233];
    document.getElementById("sav-waterfallkills").value = values[234];
    document.getElementById("sav-hotlandkills").value = values[235];
    updateSelection("sav-undynestate1", values[281]);
    updateSelection("sav-maddummystate", values[282]);
    updateSelection("sav-undynestate2", values[380]);
    updateSelection("sav-muffetstate", values[427]);
    updateSelection("sav-broguardsstate", values[432]);
    updateSelection("sav-mettatonstate", values[455]);
    document.getElementById("sav-exitedtruelab").checked = (Number(values[523].trim()) === 12);
    document.getElementById("sav-defeatedasriel").checked = (Number(values[37].trim()) === 1);
    updateSelection("sav-plotvalue", values[542]);
    if (Number(values[545].trim()) != document.getElementById("sav-havecell").checked) {
        document.getElementById("cellslots").classList.toggle('hidden');
    }
    document.getElementById("sav-havecell").checked = (Number(values[545].trim()) === 1);
    updateSelection("sav-location", values[547]);
    document.getElementById("sav-fun").value = Number(values[35].trim());
    for (var i = 0; i < 512; i++) {
        if (document.getElementById("sav-flag-" + i).nodeName === "SELECT") {
            updateSelection("sav-flag-" + i, values[30 + i], flags[i][2]);
        } else {
            document.getElementById("sav-flag-" + i).value = values[30 + i];
        }
        // Update checkboxes (should have no ill effects on non-checkbox-based flags)
        document.getElementById("sav-flag-" + i).previousSibling.checked = Number(document.getElementById("sav-flag-" + i).value);
    }
}

// Update an array of values from the save data form.
function updateSaveValuesFromForm(values) {
    "use strict";
    values[523] = "0"; // Initialize correctly
    for (var i = 0; i < flags.length; i++) {
        values[30 + i] = document.getElementById("sav-flag-" + i).value;
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
    values[495] = Number(document.getElementById("sav-undyne-cell").checked);
    if (document.getElementById("sav-exitedtruelab").checked) {
        values[523] = "12";
    }
    values[37] = Number(document.getElementById("sav-defeatedasriel").checked);
    values[542] = document.getElementById("sav-plotvalue").value;
    values[545] = Number(document.getElementById("sav-havecell").checked);
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
    var advancedMode = (localStorage.getItem("advanced") == "true");
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
    updateSelection("allowed-locations", 1);
    updateSelection("allowed-locations-2", 1);
    var advanced = document.getElementById("advanced");
    if (advancedMode) {
        advanced.classList.remove('hidden');
        document.getElementById("hide-advanced").innerHTML = "Hide";
    }
    for (var i = 0; i < flags.length; i += 3) {
        for (var j = 0; j < 3; j++) {
            var checkDesc = false;
            var newLabel = document.createElement("label");
            newLabel.setAttribute("for", "sav-flag-" + (i + j));
            newLabel.innerHTML = "[" + (i + j) + "] " + flags[i + j][0];
            if (typeof flags[i + j][1] === "string") {
                newLabel.title = flags[i + j][1];
                checkDesc = true;
            }
            
            // Hide unused flags, highlight debug ones.
            if (flags[i + j][0] === "unused" || (checkDesc && (
                flags[i + j][1].indexOf("nused") !== -1 || // "U" removed for case insensitivity
                flags[i + j][1].indexOf("Unaccessed") !== -1
            ))) {
                newLabel.classList.add("gray");
            } else if (checkDesc && flags[i + j][1].indexOf("Debug") !== -1) {
                newLabel.classList.add("red");
            }
            
            advanced.appendChild(newLabel);
        }
        for (var j = 0; j < 3; j++) {
            var newField;
            if (typeof flags[i + j][2] === "object") { // Options listed
                newField = document.createElement("select");
                for (var key of Object.keys(flags[i + j][2]).sort((a, b) => a - b)) { // (Decimal keys don't automatically sort correctly)
                    var newOption = document.createElement("option");
                    newOption.setAttribute("value", key);
                    var newContent = document.createTextNode(flags[i + j][2][key]);
                    newOption.appendChild(newContent);
                    newField.appendChild(newOption);
                }
                newField.setAttribute("id", "sav-flag-" + (i + j));
                newField.value = 0;
                if (i > 500) {
                    debugVars[i + j] = newField;
                }
            } else if (typeof flags[i + j][2] === "string") { // Simple boolean
                newField = document.createElement("div");
                newField.setAttribute("class", "checkbox");
                newField.style.marginTop = 0;
                var newOption = document.createElement("input");
                newOption.setAttribute("type", "checkbox");
                newOption.addEventListener("change", function() {
                    this.nextSibling.value = Number(this.checked);
                });
                newField.appendChild(newOption);
                newOption = document.createElement("input");
                newOption.setAttribute("type", "number");
                newOption.addEventListener("change", function() {
                    this.previousSibling.checked = Number(this.value);
                });
                newOption.style.width = "100%";
                newOption.setAttribute("id", "sav-flag-" + (i + j));
                newOption.value = 0;
                newField.appendChild(newOption);
            } else { // Numerical value
                newField = document.createElement("input");
                newField.setAttribute("type", "number");
                newField.setAttribute("id", "sav-flag-" + (i + j));
                newField.value = 0;
            }
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
            document.getElementById("sav-weaponat").value = Number(document.getElementById("sav-weaponat").value) + armorAt;
        }
    });
    
    // Interface-altering options
    var allowedLocations1 = document.getElementById("allowed-locations");
    var allowedLocations2 = document.getElementById("allowed-locations-2");
    const updateAllowedLocations1 = () => {
        allowedLocations2.value = allowedLocations1.value;
        updateSelection("ini-location", undefined, rooms[allowedLocations1.value]);
        updateSelection("sav-location", undefined, rooms[allowedLocations1.value]);
    };
    const updateAllowedLocations2 = () => {
        allowedLocations1.value = allowedLocations2.value;
        updateSelection("ini-location", undefined, rooms[allowedLocations1.value]);
        updateSelection("sav-location", undefined, rooms[allowedLocations1.value]);
    };
    allowedLocations1.addEventListener("change", updateAllowedLocations1);
    allowedLocations2.addEventListener("change", updateAllowedLocations2);
    document.getElementById("allow-non-equipables").addEventListener("change", function() {
        if (document.getElementById("allow-non-equipables").checked) {
            updateSelection("sav-weapon", undefined, items);
            updateSelection("sav-armor",  undefined, items);
        } else {
            updateSelection("sav-weapon", undefined, weapons);
            updateSelection("sav-armor",  undefined, armors);
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
            updateSelection("sav-cellslot" + i);
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
    });
    document.getElementById("hide-advanced").addEventListener("click", function() {
        if (advancedMode) {
            advanced.classList.add('hidden');
            advancedMode = false;
            localStorage.setItem("advanced", false);
            this.innerHTML = "Show";
        } else {
            advanced.classList.remove('hidden');
            advancedMode = true;
            localStorage.setItem("advanced", true);
            this.innerHTML = "Hide";
        }
    });
    
    var saveElements = document.querySelectorAll("input[id^=\"sav-\"],select[id^=\"sav-\"]");
    for (var i = 0; i < saveElements.length; i++) {
        if (flagFor[saveElements[i].id] >= 0) {
            saveElements[i].addEventListener("change", function() {
                if (this.type == "checkbox") {
                    document.getElementById("sav-flag-" + flagFor[this.id]).value = Number(this.checked);
                } else {
                    document.getElementById("sav-flag-" + flagFor[this.id]).value = this.value;
                }
            });
        } else if (inputForFlag[saveElements[i].id]) {
            saveElements[i].addEventListener("change", function() {
                var targetElement = document.getElementById(inputForFlag[this.id]);
                if (targetElement.type == "checkbox") {
                    targetElement.checked = Number(this.value);
                } else if (targetElement.type == "number") {
                    targetElement.value = this.value;
                } else { // dropdown
                    updateSelection(targetElement.id, this.value);
                }
            });
        }
    }

    // Synchronize locations select and number inputs
    document.getElementById("ini-location-num").addEventListener("change", () => {
        // Force All Rooms when manually changing ID
        document.getElementById("allowed-locations").selectedIndex = 2;
        updateAllowedLocations1();
        document.getElementById("ini-location").value = document.getElementById("ini-location-num").value;
    });
    document.getElementById("ini-location").addEventListener("change", () => {
        document.getElementById("ini-location-num").value = document.getElementById("ini-location").value;
    });
    document.getElementById("sav-location-num").addEventListener("change", () => {
        // Force All Rooms when manually changing ID
        document.getElementById("allowed-locations-2").selectedIndex = 2;
        updateAllowedLocations2();
        document.getElementById("sav-location").value = document.getElementById("sav-location-num").value;
    });
    document.getElementById("sav-location").addEventListener("change", () => {
        document.getElementById("sav-location-num").value = document.getElementById("sav-location").value;
    });
    // Sync initial values too
    document.getElementById("sav-location-num").value = document.getElementById("sav-location").value;
    document.getElementById("ini-location-num").value = document.getElementById("ini-location").value;
}

document.addEventListener("DOMContentLoaded", start);
