function loadFile(file, contentId) {
    if (!file) {
        return;
    }

    var reader = new FileReader();
    reader.onload = function(e) {
        var contents = e.target.result;
        document.getElementById(contentId).innerHTML = contents;
    };
    reader.readAsText(file);
}

function start() {
    ['undertale-ini', 'file0', 'file9'].forEach(function(name) {
        var f = function(e) {
            loadFile(e.target.files[0], name + '-contents');
        };
        document.getElementById(name + '-file').addEventListener('change', f, false);
    });
}
