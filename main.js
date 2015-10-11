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
    "Junk Food",
    "Mystery Key",
    "Face Steak",
    "Hush Puppy",
    "Snail Pie",
    "temy armor",
    "<invalid>"
];

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

function start() {
    ['undertale-ini', 'file0', 'file9'].forEach(function(name) {
        var f = function(e) {
            loadFile(e.target.files[0], name);
        };
        document.getElementById(name + '-file').addEventListener('change', f, false);
    });
}
