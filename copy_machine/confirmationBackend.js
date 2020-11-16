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

function setValues() {
    settings[copies] = doccument.getElementById("copynumber").value;
    
    if (doccument.getElementById("bin-a").checked) {
        settings[paperSource] = "A";
    } else if (doccument.getElementById("bin-b").checked) {
        settings[paperSource] = "B";
    } else {
        settings[paperSource] = "C";
    }

    if (doccument.getElementById("orig-1").checked) {
        settings[originalSides] = 1;
    } else {
        settings[originalSides] = 2;
    }

    if (doccument.getElementById("final-1").checked) {
        settings[printSides] = 1;
    } else {
        settings[printSides] = 2;
    }
    
    if (settings[separator]) {
        if (doccument.getElementById("sep-a").checked) {
            settings[separatorSource] = "A";
        } else if (doccument.getElementById("sep-b").checked) {
            settings[separatorSource] = "B";
        } else {
            settings[separatorSource] = "C";
        }
    }
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