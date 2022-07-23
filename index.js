let count = 0;
function increment() {
    count += 1;
    document.getElementById("count-el").textContent = count;
}

function save() {
    document.getElementById("prev").textContent += " - " + count;
    count = 0;
    document.getElementById("count-el").textContent = 0;
}

function clearPrev() {
    document.getElementById("prev").textContent = "Previous Entries: ";
}


