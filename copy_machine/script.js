function changeBrightness(percent) {
    console.log("inside changeBrightness");
    document.getElementById("image").style.filter = "brightness(" + percent + "%)";
    return
}

function reviewBox() {
	console.log("inside reviewBox building function");
    urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);
	var div = document.getElementById("numCopies");
    if (typeof(sessionStorage.getItem("numCopies")) == "number") {
        div.innerHTML = sessionStorage.getItem("numCopies") + " Copies";
    } else {
        div.innerHTML = "1 Copy";
    }
    div = document.getElementById("paperSource");
    div.innerHTML = "Bin " + urlParams.get("paper-source");
    div = document.getElementById("sides");
    div.innerHTML = urlParams.get("side-orig") + " Sided &rarr;" + urlParams.get("side-final") + " Sided";
    div = document.getElementById("separator");
    if (urlParams.get("separator-page") == "yes") {
        div.innerHTML = "Bin " + urlParams.get("from-bin") + " Separator";
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
}