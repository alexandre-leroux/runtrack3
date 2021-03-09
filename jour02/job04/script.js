


var textarea = document.getElementById("keylogger");

document.addEventListener("keydown", logger);

function logger(e) {

    if (e.key.match(/^[0-9a-z]+$/)) {
        textarea.value += e.key
    }
}
