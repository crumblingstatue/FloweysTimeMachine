function loadFile(file, name) {
    if (!file) {
        return;
    }

    var reader = new FileReader();
    reader.onload = function(e) {
        var contents = e.target.result;
        document.getElementById(name + '-contents').innerHTML = contents;
    };
    reader.readAsText(file);
}

function start() {
    ['undertale-ini', 'file0', 'file9'].forEach(function(name) {
        var f = function(e) {
            loadFile(e.target.files[0], name);
        };
        document.getElementById(name).addEventListener('change', f, false);
    });
}
