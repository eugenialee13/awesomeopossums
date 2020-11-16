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

var copies = 1;
var paperSource = "A";
let originalSides = 1;
let printSides = 1;
let separator = false;
let separatorSource = null;

function setValues() {
	console.log("inside setValues function");
	copies = document.getElementById("copynumber").value;
    
    if (document.getElementById("bin-a").checked) {
        paperSource = "A";
    } else if (document.getElementById("bin-b").checked) {
        paperSource = "B";
    } else {
        paperSource = "C";
    }

    if (document.getElementById("orig-1").checked) {
        originalSides = 1;
    } else {
        originalSides = 2;
    }

    if (document.getElementById("final-1").checked) {
        printSides = 1;
    } else {
        printSides = 2;
    }
    
    if (separator) {
        if (document.getElementById("sep-a").checked) {
            separatorSource = "A";
        } else if (document.getElementById("sep-b").checked) {
            separatorSource = "B";
        } else {
            separatorSource = "C";
        }
    }
}

function reviewBox() {
	console.log("inside reviewBox building function");
	console.log("separator:" + separator);
    var div = document.getElementById("numCopies");
    if (copies == 1) {
        div.innerHTML = "1 Copy";
    } else {
        div.innerHTML = copies + " Copies";
    }

    div = document.getElementById("paperSource");
    div.innerHTML = "Bin " + paperSource;

    div = document.getElementById("sides");
    div.innerHTML = originalSides + " Sided &rarr;" + printSides + " Sided";

    div = document.getElementById("separator");
    if (separator) {
        div.innerHTML = "Bin " + separatorSource + " Separator";
    } else {
        div.innerHTML = "No Separator";
    }
}

function enableSeparator() {
	console.log("inside enableSeparator");
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
	separator = true;
}

function disableSeparator() {
	console.log("inside disableSeparator");
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
	separator = false;
}
