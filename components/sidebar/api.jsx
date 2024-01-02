
function showbox() {
    const box = document.getElementById("box");
    if (box.style.display === "") {
        box.style.display = "flex";
    }
    else if (box.style.display === "flex") {
        box.style.display = "none";
    }
    else {
        box.style.display = "flex";
    }
}

function showsub() {
    const box = document.getElementById("sub");
    if (box.style.display === "") {
        box.style.display = "flex";
    }
    else if (box.style.display === "flex") {
        box.style.display = "none";
    }
    else {
        box.style.display = "flex";
    }
}
export { showbox, showsub };