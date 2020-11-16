//
// |--------------------------------------------------------------------------------|
// | SOME CODE FOR MODAL FROM https://www.w3schools.com/howto/howto_css_modals.asp  |
// | not implemented yet but it works                                               |
// |--------------------------------------------------------------------------------|

// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

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
    settings[copies] = document.getElementById("copynumber").value;
    
    if (document.getElementById("bin-a").checked) {
        settings[paperSource] = "A";
    } else if (document.getElementById("bin-b").checked) {
        settings[paperSource] = "B";
    } else {
        settings[paperSource] = "C";
    }

    if (document.getElementById("orig-1").checked) {
        settings[originalSides] = 1;
    } else {
        settings[originalSides] = 2;
    }

    if (document.getElementById("final-1").checked) {
        settings[printSides] = 1;
    } else {
        settings[printSides] = 2;
    }
    
    if (settings[separator]) {
        if (document.getElementById("sep-a").checked) {
            settings[separatorSource] = "A";
        } else if (document.getElementById("sep-b").checked) {
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

function enableSeparator() {
	var checkYes = document.getElementById("yes");
	if (checkYes.checked) {
		var binA = document.getElementById("sep-a");
		var binB = document.getElementById("sep-b");
		var binC = document.getElementById("sep-c");
		
		var binArr = [binA, binB, binC];
		var b;
		for (b of binArr) {
			b.disabled = false;
		}
	}
	setValue("separator", true);
}

function disableSeparator() {
	var checkNo = document.getElementById("no");
	if (checkNo.checked) {
		var binA = document.getElementById("sep-a");
		var binB = document.getElementById("sep-b");
		var binC = document.getElementById("sep-c");

		var binArr = [binA, binB, binC];
		var b;
		for (b of binArr) {
			b.disabled = true;
			b.checked = false;
		}
	}
	setValue("separator", false);
}

function setValuesWrapper() {
	setValues();
}