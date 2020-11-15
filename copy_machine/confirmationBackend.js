function changeBrightness(percent) {
    document.getElementById("image").style.filter = "brightness(" + percent + "%)";
    return
}

var settings = {
    copies: 1,
    paperSource: "A",
    originalSides: 1,
    printSides: 1,
    separator: false,
    separatorSource: null
}

function setValue(attribute, value) {
    settings[attribute] = value;
}

function reviewBox() {
    var div = document.getElementById("numCopies");
    if (settings.copies == 1) {
        div.innerHTML = "1 Copy";
    } else {
        div.innerHTML = settings.copies + " Copies";
    }

    div = document.getElementById("paperSource");
    div.innerHTML = "Bin " + settings.paperSource;

    div = document.getElementById("sides");
    div.innerHTML = settings.originalSides + " Sided &rarr;" + settings.printSides + " Sided";

    div = document.getElementById("separator");
    if (settings.separator) {
        div.innerHTML = "Bin " + settings.separatorSource + " Separator";
    } else {
        div.innerHTML = "No Separator";
    }
}