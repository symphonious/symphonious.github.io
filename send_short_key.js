function start_exe() {
    document.getElementById('startButton').disabled = true;
    window.parent.postMessage("_start_", "*");
    setTimeout(function() {
        document.getElementById('startButton').disabled = false;
    }, 5000);
}
