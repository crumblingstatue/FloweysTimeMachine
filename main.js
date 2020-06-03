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
    "0": "空的",
    "201": "问好",
    "202": "谜题求助",
    "203": "关于你自己",
    "204": "叫她 \"妈妈\"",
    "205": "调情",
    "206": "托丽尔的电话",
    "210": "Papyrus的电话",
    "220": "次元箱A",
    "221": "次元箱B"
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
    "4": "遗迹 - 初始点",
    "5": "遗迹 - 初遇小花",
    "6": "遗迹 - 入口【保存点】",
    "7": "遗迹 - 托丽尔帮你解谜",
    "8": "遗迹 - 开关谜题",
    "9": "遗迹 - 假人房",
    "10": "遗迹 - 钉子谜题",
    "11": "遗迹 - 长走廊",
    "12": "遗迹 - 树叶队【保存点】",
    "13": "遗迹 - 每人一个糖果",
    "14": "遗迹 - 强制掉落活板门",
    "15": "遗迹 - 第一个推石头谜题",
    "16": "遗迹 - 活板门走廊谜题",
    "17": "遗迹 - 会说话的石头",
    "18": "遗迹 - 老鼠洞 【保存点】",
    "19": "遗迹 - 小幽灵",
    "20": "遗迹 - 蜘蛛烘焙义卖",
    "21": "遗迹 - 二只青蛙",
    "22": "遗迹 - 隐藏在活板门下的开关",
    "23": "遗迹 - 三柱房1",
    "24": "遗迹 - 三柱房2",
    "25": "遗迹 - 三柱房3",
    "26": "遗迹 - 三柱房4",
    "27": "遗迹 - “柱房坑”",
    "28": "遗迹 - 三岔路",
    "29": "遗迹 - “托里尔八卦蛙”",
    "30": "遗迹 - 玩具刀房",
    "31": "遗迹 - 家 【保存点】",
    "32": "托丽尔的房子：入口",
    "33": "托丽尔的房子：阅览室",
    "34": "托丽尔的房子：走廊",
    "35": "托丽尔的房子：托丽尔的屋子",
    "36": "托丽尔的房子：你的屋子",
    "37": "托丽尔的房子：厨房",
    "38": "托丽尔的地下室1",
    "39": "托丽尔的地下室2",
    "40": "托丽尔的地下室3",
    "41": "托丽尔的地下室：托丽尔Boss战",
    "42": "托丽尔的地下室：通往小花",
    "43": "托丽尔的地下室：再遇小花",
    "44": "雪地 - 遗迹出口",
    "45": "雪地 - 暗黑森林小路",
    "46": "雪地 - 箱子之路 【保存点】",
    "47": "雪地 - 鱼竿",
    "48": "雪地 - Papyrus的哨站",
    "49": "雪地 - “狗狗”？",
    "50": "雪地 - Compass sign",
    "51": "雪地 - 雪人",
    "52": "雪地 - 电击迷宫",
    "53": "雪地 - 雪狼",
    "54": "雪地 - 狗夫妻之家",
    "55": "雪地 - 怪物宝宝纵横字谜",
    "56": "雪地 - 意大利面 【保存点】",
    "57": "雪地 - 警告：狗夫妻来袭！",
    "58": "雪地 - XO谜题1",
    "59": "雪地 - XO谜题2",
    "60": "雪地 - 彩色标题谜题",
    "61": "雪地 - 狗窝【保存点】",
    "62": "雪地 - 雪Papyrus与Sans？",
    "63": "雪地 - 滑行XO谜题",
    "64": "雪地 - 会传送的Sans",
    "65": "雪地 - 捷径入口",
    "66": "雪地 - 积雪 (大犬汪)",
    "67": "雪地 - 致命恐怖的挑战",
    "68": "雪地 - 雪镇 【保存点】",
    "69": "雪镇 - 扔冰狼",
    "70": "雪镇 - 船夫/妇",
    "71": "雪镇 - 酒店大堂",
    "73": "雪镇 - Grillby家",
    "74": "雪镇 - 图书馆",
    "81": "雪地 - Papyrus战",
    "82": "瀑布 - 入口",
    "83": "瀑布 - 检查点 【保存点】",
    "84": "瀑布 - 掉落的石头",
    "86": "瀑布 - 走廊 【保存点】",
    "87": "瀑布 - 用花搭起的桥",
    "88": "瀑布 - 用花搭起的竖桥",
    "90": "瀑布 - 望远镜",
    "91": "瀑布 - 船板",
    "92": "瀑布 - 躲过Undyne的长矛 1",
    "93": "瀑布 - Undyne",
    "94": "瀑布 - 水晶 【保存点】",
    "95": "瀑布 - Sans望远镜",
    "96": "瀑布 - 好棒冰摊位",
    "97": "瀑布 - 分支路",
    "98": "瀑布 - 芭蕾舞鞋",
    "99": "瀑布 - 鸭子",
    "100": "瀑布 - 洋葱桑",
    "101": "瀑布 - 文物中心？",
    "102": "瀑布 - 钢琴",
    "103": "瀑布 - 传说中的神器",
    "104": "瀑布 - 雨中雕像",
    "105": "瀑布 - 雨伞",
    "106": "瀑布 - 下雨小径1",
    "107": "瀑布 - 下雨小径2",
    "108": "瀑布 - 宫殿景象",
    "109": "瀑布 - 还伞处",
    "110": "瀑布 - 桥【保存点】",
    "111": "瀑布 - 桥矛闪避",
    "112": "瀑布 - 桥梁倒塌",
    "113": "瀑布 - 垃圾区花坛",
    "114": "瀑布 - 垃圾区【保存点】",
    "115": "瀑布 - Dummy！",
    "116": "瀑布 - 宁静区域【保存点】",
    "117": "瀑布 - Undyne房子入口",
    "119": "瀑布 - 双鬼屋",
    "124": "瀑布 - 老乌龟的小店",
    "125": "瀑布 - 船妇/夫",
    "126": "瀑布 - 2瀑布",
    "127": "瀑布 - 蘑菇迷宫",
    "128": "瀑布 - 提米村庄【保存点】",
    "129": "瀑布 - 灯笼迷宫",
    "130": "瀑布 - 在 你 后 面",
    "131": "瀑布 - 更多的花",
    "132": "瀑布 - 山洞桥",
    "133": "瀑布 - 山洞出口",
    "134": "瀑布 - Undyne区域",
    "135": "瀑布 - Undyne区域+1",
    "136": "瀑布 - 欢迎来到热域",
    "137": "热域 - 入口",
    "138": "热域 - 饮水机...？",
    "139": "热域 - 实验室入口 【保存点】",
    "140": "热域 - 船...？",
    "141": "热域 - 实验室中心",
    "142": "热域 - 实验室二楼",
    "143": "热域 - 实验室出口",
    "144": "热域 - 跑步机1",
    "145": "热域 - 岩浆房【保存点】",
    "146": "热域 - 烧焦的平底锅",
    "147": "热域 - 激光1",
    "148": "热域 - 谜题之门1",
    "149": "热域 - 解决谜题之门1的地方左入口",
    "150": "热域 - 解决谜题之门1的地方左",
    "151": "热域 - 解决谜题之门1的地方右入口",
    "152": "热域 - 解决谜题之门1的地方右",
    "153": "热域 - “箭桥”",
    "154": "热域 - 厨房",
    "155": "热域 - 核心景象【保存点】",
    "156": "热域 - 电梯R1",
    "157": "热域 - 电梯R2",
    "158": "热域 - sans的热狗摊",
    "159": "热域 - 艺术俱乐部入口",
    "160": "热域 - 艺术俱乐部",
    "161": "热域 - 染色围裙",
    "162": "热域 - 跑步机开关谜题",
    "163": "热域 - 射击谜题？",
    "164": "热域 - 坏意见区 【保存点】",
    "165": "热域 - 守卫兄弟俩",
    "166": "热域 - “爆炸性”的新闻报道",
    "167": "热域 - 更上方的核心景象",
    "168": "热域 - 电梯L2",
    "169": "热域 - 电梯L3",
    "170": "热域 - 蜘蛛烘焙义卖",
    "171": "热域 - F3谜题门",
    "172": "热域 - F3 南谜题入口",
    "173": "热域 - F3 南谜题",
    "174": "热域 - F3 北谜题入口",
    "175": "热域 - F3 北谜题",
    "176": "热域 - 蜘蛛房入口 【保存点】",
    "177": "热域 - 蜘蛛房",
    "178": "热域 - 梅塔顿海报",
    "179": "热域 - 戏台",
    "180": "热域 - 彩瓦迷宫2",
    "181": "热域 - 好棒冰摊位",
    "182": "热域 - 酒店入口",
    "183": "热域 - 酒店大堂【保存点】",
    "184": "热域 - 酒店餐厅",
    "185": "热域 - 科迪多酒店",
    "186": "热域 - 酒店旁的垃圾店",
    "187": "热域 - 电梯R3",
    "188": "核心 -  入口",
    "189": "核心 -  电梯",
    "190": "核心 -  Pit",
    "191": "核心 -  南部电梯",
    "192": "核心 -  错序激光",
    "193": "核心 -  十字路口",
    "194": "核心 -  死路",
    "195": "核心 -  功率激光谜题",
    "196": "核心 -  分支【保存点】",
    "197": "核心 -  冰层",
    "198": "核心 -  西谜题入口",
    "199": "核心 -  西谜题入口1",
    "200": "核心 -  西谜题入口2",
    "202": "核心 -  结束3",
    "201": "热域 - 南100G垃圾桶",
    "203": "核心 -  结束4",
    "204": "核心 -  迷路",
    "205": "核心 -  西部谜题",
    "206": "核心 -  Glamburger垃圾桶",
    "207": "核心 -  100G垃圾桶",
    "208": "核心 -  战斗桥",
    "209": "核心 -  结束 - 1",
    "210": "核心 -  结束了 【保存点】",
    "211": "核心 -  MTT房间",
    "212": "核心 -  最后的电梯入口",
    "214": "热域 - 电梯L1",
    "215": "核心 -  最后的电梯",
    "216": "城堡电梯【保存点】",
    "217": "城堡 - 另一部电梯",
    "218": "城堡 - 暗黑小路",
    "219": "新家 【保存点】",
    "220": "新家 - 入口",
    "221": "新家 - 阅览室",
    "222": "新家 - 走廊",
    "223": "新家 - Asgore的房间",
    "224": "新家 - “你”的房间",
    "225": "新家 - 厨房",
    "226": "新家 - 地下室1",
    "227": "新家 - 地下室2",
    "228": "新家 - 地下室3",
    "229": "新家 - 地下室4",
    "230": "新家 - 电梯",
    "231": "最后长廊 【保存点】",
    "232": "王座入口 【保存点】",
    "233": "王座入口 - 楼下",
    "234": "王座入口 - 棺材",
    "235": "王座 【保存点】",
    "236": "结束了。 【保存点】",
    "237": "障碍物",
    "241": "外面",
    "242": "实验室电梯",
    "243": "真实验室 电梯",
    "244": "真实验室 电梯入口",
    "245": "真实验室 南走廊",
    "246": "真实验室 【保存点】",
    "247": "真实验室 西走廊1",
    "248": "真实验室 西？",
    "249": "真实验室 西红钥匙槽",
    "250": "真实验室 北走廊1",
    "251": "真实验室 卧室 【保存点】",
    "252": "真实验室 东北走廊",
    "253": "真实验室 东北蓝钥匙槽",
    "254": "真实验室 北走廊2",
    "255": "真实验室 绿钥匙",
    "256": "真实验室 西北头骨",
    "257": "真实验室 黄钥匙槽+TV",
    "258": "真实验室 西北冰箱",
    "259": "真实验室 绿色钥匙槽",
    "260": "真实验室 粉丝们",
    "261": "真实验室 电梯2",
    "262": "真实验室 电源室走廊",
    "263": "真实验室 电源室",
    "265": "雪地 - 冰洞出口",
    "331": "Asriel之房"
};

var floweyStates = {
    "0": "无（初始状态）",
    "1": "浅蓝色 （发起战斗）",
    "2": "橙色",
    "3": "蓝",
    "4": "紫色",
    "5": "绿色",
    "6": "黄色",
    "7": "无 (战斗结束)",
};

var torielStates = {
    "0": "初始状态",
    "3": "未知",
    "4": "死了",
    "5": "被饶恕"
};

var comedianStates = {
    "0": "初始状态",
    "1": "未知",
    "2": "死了"
};

var doggoStates = {
    "0": "初始状态",
    "1": "死了",
    "2": "与它玩(被饶恕)"
};

var dogamyDogaressaStates = {
    "0": "初始状态",
    "1": "死了",
    "2": "与它玩(被饶恕)"
};

var greaterDogStates = {
    "0": "初始状态",
    "1": "死了",
    "2": "与它玩(被饶恕)",
    "3": "忽略了"
};

var papyrusStates = {
    "0": "初始状态",
    "1": "死了"
};

var plotValues = {
    "2": "还没和Papyrus打呢",
    "101": "打过了",
    "119": "未知",
    "164": "热域屠杀过了",
    "199": "未知",
    "999": "和平结局"
};

var trainingDummyStates = {
    "0": "初始状态",
    "1": "死了",
    "2": "说话",
    "3": "厌倦了你的恶作剧"
};

var shyrenStates = {
    "0": "初始状态",
    "1": "死了",
    "2": "未知"
};

var madDummyStates = {
    "0": "初始状态",
    "1": "死了"
};

var undyneStates1 = {
    "0": "初始状态",
    "1": "死了"
};

var undyneStates2 = {
    "0": "初始状态",
    "1": "死了"
};

var broGuardsStates = {
    "0": "初始状态",
    "1": "死了"
};

var mettatonStates = {
    "0": "初始状态",
    "1": "死了"
};

var muffetStates = {
    "0": "初始状态",
    "1": "死了"
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
                throw "段外的赋值";
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
                throw "未终止的值字符串";
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
            window.alert("分析undertale.ini时出错: " + err);
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
        var name = window.prompt("输入新预设的名称");
        if (name === null || name === "") {
            window.alert("未输入有效名称，未创建预设。");
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
            window.alert("您需要先选择一个有效的预设！");
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
            window.alert("您需要先选择一个有效的预设！");
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
