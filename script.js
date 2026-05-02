function showWelcome() {
    alert("Welcome to CodeMaster Academy!");
}
function updateProgress(id) {
    let bar = document.getElementById(id);
    let value = bar.value + 10;

    if (value > 100) value = 100;

    bar.value = value;
    localStorage.setItem(id, value);
}
function loadProgress() {
    let bars = ["htmlBar", "jsBar", "pyBar"];

    bars.forEach(id => {
        let saved = localStorage.getItem(id);
        if (saved) {
            document.getElementById(id).value = saved;
        }
    });
}

function markComplete(row) {
    row.classList.toggle("completed");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function toggleVideo() {
    let v = document.getElementById("video");

    if (v.paused) {
        v.play();
    } else {
        v.pause();
    }
}
