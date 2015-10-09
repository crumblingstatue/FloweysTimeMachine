function onFileInputChange(e) {
    var file = e.target.files[0];

    if (!file) {
        return;
    }

    var reader = new FileReader();
    reader.onload = function(e) {
        var contents = e.target.result;
        alert(contents);
    };
    reader.readAsText(file);
}

function start() {
    document.getElementById('file-input').addEventListener('change', onFileInputChange, false);
}
