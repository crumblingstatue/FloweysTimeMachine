var items = [
    "空的",
    "怪物糖果",
    "槌球棍",
    "树枝",
    "绷带",
    "石头糖果",
    "南瓜圈",
    "蜘蛛甜甜圈",
    "无泪洋葱",
    "鬼果",
    "蜘蛛苹果酒",
    "奶油糖派",
    "褪色的丝带",
    "玩具刀",
    "结实的手套",
    "兄♂贵头巾",
    "雪人的雪块",
    "好冰棒",
    "狗面冰淇淋",
    "情侣棒冰",
    "单身狗棒冰",
    "肉桂兔包",
    "Temmie脆片",
    "被遗弃的蛋派",
    "旧舞裙",
    "芭蕾舞鞋",
    "计分卡",
    "神烦狗(指Toby Fox)",
    "狗沙拉",
    "狗狗残留物(1)",
    "狗狗残留物(2)",
    "狗狗残留物(3)",
    "狗狗残留物(4)",
    "狗狗残留物(5)",
    "狗狗残留物(6)",
    "太空人条状食品",
    "方便面",
    "螃蟹苹果",
    "热狗...?",
    "热猫",
    "魅力汉堡",
    "海猹",
    "新星芭菲",
    "英雄传说",
    "多雾的眼镜",
    "被撕裂的笔记本",
    "彩绘舞裙",
    "焦锅",
    "牛仔帽",
    "空枪",
    "心形挂坠锁",
    "破旧的匕首",
    "真刀",
    "坠饰锁",
    "坏记忆",
    "梦想",
    "Undyne的信",
    "Undyne信EX",
    "破旧的薯片",
    "垃圾食品",
    "神♂秘钥匙",
    "MTT脸排",
    "嘘嘘狗",
    "蜗牛派",
    "temy甲",
    "<invalid>"
];

var cellOpts = {
    "0": "空",
    "201": "说，你好！",
    "202": "帮忙解亿点点迷题",
    "203": "介绍介绍一下你自己",
    "204": "叫她妈妈",
    "205": "跟她调♂情（？，是不是我戴了有颜色的眼镜的缘故）",
    "206": "Toriel的手机",
    "210": "Papyrus的手机",
    "220": "末影（万能）箱A",
    "221": "末影（万能）箱B"
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
    "4": "废墟 - 开始",
    "5": "废墟 - 小花的房间（原文为spot,景点）",
    "6": "废墟 - 入口 [存档点]",
    "7": "废墟 - Toriel破解了谜题",
    "8": "废墟 - 开关谜题",
    "9": "废墟 - 训练人偶的房间",
    "10": "废墟 - 亿、、难的谜题",
    "11": "废墟 - 长长的走廊",
    "12": "废墟 - 树叶堆[存档点]",
    "13": "废墟 - 拿怪物糖果的地方",
    "14": "废墟 - Mandatory fall trapdoor",
    "15": "废墟 - 第一个推石头谜题",
    "16": "废墟 - 走廊谜题",
    "17": "废墟 - 可以跟石头聊天的石头谜题",
    "18": "废墟 - 老鼠洞[存档点]",
    "19": "废墟 - 与Napstablook",
    "20": "废墟 - 蜘蛛甜甜圈商店",
    "21": "废墟 - 两只青蛙",
    "22": "废墟 - 隐藏在门下的开关",
    "23": "废墟 - 三个按钮的房间1",
    "24": "废墟 - 三个按钮的房间2",
    "25": "废墟 - 三个按钮的房间3",
    "26": "废墟 - 三个按钮的房间4",
    "27": "废墟 - 有坑洞的房间",
    "28": "废墟 - 三岔路口",
    "29": "废墟 - Toriel家的阳台",
    "30": "废墟 - 有玩具刀的房间",
    "31": "废墟 - Toriel的家[存档点]",
    "32": "Toriel的家(家): 入口",
    "33": "Toriel的家(家): 书房",
    "34": "Toriel的家(家): 走廊",
    "35": "Toriel的家(家): Toriel的房间",
    "36": "Toriel的家(家): 你的房间",
    "37": "Toriel的家(家): 厨房",
    "38": "废墟出口 1",
    "39": "废墟出口 2",
    "40": "废墟出口 3",
    "41": "废墟出口: 与Toriel的战斗",
    "42": "废墟出口: 见到小花前的走廊",
    "43": "废墟出口: 见到了小花",
    "44": "雪地 - Ruin exit",
    "45": "雪地 - Dark forest path",
    "46": "雪地 - Box Road [SAVE]",
    "47": "雪地 - Fishing rod",
    "48": "雪地 - Papyrus' Sentry Station",
    "49": "雪地 - Doggo",
    "50": "雪地 - Compass sign",
    "51": "雪地 - Snowman",
    "52": "雪地 - Electricity Maze",
    "53": "雪地 - Snow golf",
    "54": "雪地 - 2 guard dog houses",
    "55": "雪地 - Monster Kidz Word Search",
    "56": "雪地 - Spaghetti [SAVE]",
    "57": "雪地 - Warning: Dog Marriage",
    "58": "雪地 - XO puzzle 1",
    "59": "雪地 - XO puzzle 2",
    "60": "雪地 - Color tile puzzle",
    "61": "雪地 - Dog House [SAVE]",
    "62": "雪地 - Snow Papyrus & Sans",
    "63": "雪地 - Sliding XO puzzle",
    "64": "雪地 - Teleporting Sans",
    "65": "雪地 - Ice Cave entrance",
    "66": "雪地 - Snow poffs (Greater Dog)",
    "67": "雪地 - Gauntlet of Deadly Terror",
    "68": "雪地 - Town [SAVE]",
    "69": "雪町: Ice haul wolf",
    "70": "雪町: Boat harbor",
    "71": "雪町: Inn lobby",
    "73": "雪町: Grillby's",
    "74": "雪町: Library",
    "81": "雪地 - Papyrus Battle",
    "82": "瀑布 - Entrance",
    "83": "瀑布 - Checkpoint [SAVE]",
    "84": "瀑布 - Falling rocks",
    "86": "瀑布 - Hallway [SAVE]",
    "87": "瀑布 - Lily pad bridge",
    "88": "瀑布 - Lily pad vertical bridge",
    "90": "瀑布 - Telescope",
    "91": "瀑布 - Boat plank",
    "92": "瀑布 - Undyne Spear dodging 1",
    "93": "瀑布 - Bush after spear dodging",
    "94": "瀑布 - Crystal [SAVE]",
    "95": "瀑布 - Sans Telescope",
    "96": "瀑布 - Nice Cream Stand",
    "97": "瀑布 - Split Pathway",
    "98": "瀑布 - Ballet shoes",
    "99": "瀑布 - Duck",
    "100": "瀑布 - Onionsan",
    "101": "瀑布 - Artifact hub",
    "102": "瀑布 - Piano",
    "103": "瀑布 - Legendary Artifact",
    "104": "瀑布 - Rainy Statue",
    "105": "瀑布 - Umbrellas",
    "106": "瀑布 - Rainy Path 1",
    "107": "瀑布 - Rainy Path 2",
    "108": "瀑布 - Palace View",
    "109": "瀑布 - Umbrella ledge",
    "110": "瀑布 - Bridge [SAVE]",
    "111": "瀑布 - Bridge spear dodge",
    "112": "瀑布 - Bridge fall",
    "113": "瀑布 - Trash Zone Flower bed",
    "114": "瀑布 - Trash Zone [SAVE]",
    "115": "瀑布 - Training Dummy revenge",
    "116": "瀑布 - Quiet Area [SAVE]",
    "117": "瀑布 - Undyne's house entrance",
    "119": "瀑布 - Twin Ghost houses",
    "124": "瀑布 - Turtle shop",
    "125": "瀑布 - River boat",
    "126": "瀑布 - 2 瀑布s",
    "127": "瀑布 - Mushroom maze",
    "128": "瀑布 - Temmie Village [SAVE]",
    "129": "瀑布 - Lamp maze",
    "130": "瀑布 - Behind you",
    "131": "瀑布 - More flowers",
    "132": "瀑布 - Cave bridge",
    "133": "瀑布 - Cave exit",
    "134": "瀑布 - Undyne area",
    "135": "瀑布 - Undyne area + 1",
    "136": "瀑布 - 热地 Welcome",
    "137": "热地 - Entrance",
    "138": "热地 - Water tank",
    "139": "热地 - Laboratory Entrance [SAVE]",
    "140": "热地 - River boat",
    "141": "热地 - Laboratory Hub",
    "142": "热地 - Laboratory Upper Floor",
    "143": "热地 - Laboratory Exit",
    "144": "热地 - Treadmills 1",
    "145": "热地 - Magma Chamber [SAVE]",
    "146": "热地 - Burnt Pan",
    "147": "热地 - Lasers 1",
    "148": "热地 - Puzzle Gate 1",
    "149": "热地 - Left Boz Puzzle Entrance",
    "150": "热地 - Left Box Puzzle",
    "151": "热地 - Right Box Puzzle Entrance",
    "152": "热地 - Right Box Puzzle",
    "153": "热地 - Arrow bridge",
    "154": "热地 - Kitchen",
    "155": "热地 - 可以看到核心的地方 [存档点]",
    "156": "热地 - Elevator R1",
    "157": "热地 - Elevator R2",
    "158": "热地 - Hot Dog Stand",
    "159": "热地 - Art Club Entrance",
    "160": "热地 - Art Club",
    "161": "热地 - Stained Apron",
    "162": "热地 - Treadmill switch puzzle",
    "163": "热地 - Arrow puzzle",
    "164": "热地 - Bad Opinion Zone [SAVE]",
    "165": "热地 - Bro guards",
    "166": "热地 - Bombastic News report",
    "167": "热地 - Upper 核心 View",
    "168": "热地 - Elevator L2",
    "169": "热地 - Elevator L3",
    "170": "热地 - Spider Bake Sale",
    "171": "热地 - F3 Puzzle Gate",
    "172": "热地 - F3 South Puzzle Entrance",
    "173": "热地 - F3 South Puzzle",
    "174": "热地 - F3 North Puzzle Entrance",
    "175": "热地 - F3 North Puzzle",
    "176": "热地 - Spider Entrance [SAVE]",
    "177": "热地 - Spider Room",
    "178": "热地 - Mettaton Poster",
    "179": "热地 - Theater Stage",
    "180": "热地 - Colored Tile Maze 2",
    "181": "热地 - Nice Cream Stand",
    "182": "热地 - Hotel Entrance",
    "183": "热地 - Hotel Lobby [SAVE]",
    "184": "热地 - Hotel Restaurant",
    "185": "热地 - Hotel Cordidor",
    "186": "热地 - Hotel Alley",
    "187": "热地 - Elevator R3",
    "188": "热地 - 核心 Entrance",
    "189": "核心 - 核心 Elevator",
    "190": "核心 - 核心 Pit",
    "191": "核心 - 核心 North of Elavator",
    "192": "核心 - 核心 Wrong order lasers",
    "193": "核心 - 核心 Crossroads",
    "194": "核心 - 核心 Dead End",
    "195": "核心 - 核心 Power Laser Puzzle",
    "196": "核心 - 核心 Branch [SAVE]",
    "197": "核心 - 核心 Ice Deposit",
    "198": "核心 - 核心 West Puzzle Entrance",
    "199": "核心 - 核心 West Puzzle Entrance + 1",
    "200": "核心 - 核心 West Puzzle Entrance + 2",
    "202": "核心 - 核心 End - 3",
    "201": "核心 - South of 100G Trash Can",
    "203": "核心 - 核心 End - 4",
    "204": "核心 - 核心 Get Lost",
    "205": "核心 - 核心 West Puzzle",
    "206": "核心 - 核心 Glamburger Trash Can",
    "207": "核心 - 核心 100G Trash Can",
    "208": "核心 - 核心 Battle Bridge",
    "209": "核心 - 核心 End - 1",
    "210": "核心 - 核心 End [SAVE]",
    "211": "核心 - 核心 Mettaton Room",
    "212": "核心 - 核心 Final Elevator Entrance",
    "214": "核心 - Elevator L1",
    "215": "核心 - 核心 Final Elevator",
    "216": "城堡外围 Elevator [SAVE]",
    "217": "城堡外围 - Another Elevator",
    "218": "城堡外围 - Dark Path",
    "219": "新家 [SAVE]",
    "220": "新家 - Entrance",
    "221": "新家 - Reading Room",
    "222": "新家 - Corridor",
    "223": "新家 - Asgore's Room",
    "224": "新家 - Your Room",
    "225": "新家 - Kitchen",
    "226": "新家 - Basement 1",
    "227": "新家 - Basement 2",
    "228": "新家 - Basement 3",
    "229": "新家 - Basement 4",
    "230": "新家 - Elevator",
    "231": "Last Corridor [SAVE]",
    "232": "Throne Entrance [SAVE]",
    "233": "Throne Entrance - Stairs Down",
    "234": "Throne Entrance - Coffins",
    "235": "Throne Room [SAVE]",
    "236": "The End [SAVE]",
    "237": "Barrier",
    "241": "Outside",
    "242": "Laboratory Elevator",
    "243": "真实验室 - Elevator",
    "244": "真实验室 - Elevator Entrance",
    "245": "真实验室 - South Corridor",
    "246": "真实验室oratory [SAVE]",
    "247": "真实验室 - West Corridor 1",
    "248": "真实验室 - West Sinks",
    "249": "真实验室 - West red key slot",
    "250": "真实验室 - North Corridor 1",
    "251": "真实验室 - Bedroom [SAVE]",
    "252": "真实验室 - Northeast Corridor",
    "253": "真实验室 - Northeast blue key slot",
    "254": "真实验室 - North Corridor 2",
    "255": "真实验室 - Green key",
    "256": "真实验室 - Northwest skull",
    "257": "真实验室 - Yellow Key Slot + TV",
    "258": "真实验室 - Northwest refrigerators",
    "259": "真实验室 - Green Key Slot",
    "260": "真实验室 - Fans",
    "261": "真实验室 - Elevator 2",
    "262": "真实验室 - Power room corridor",
    "263": "真实验室 - Power room",
    "265": "雪地 - Ice Cave 1",
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
