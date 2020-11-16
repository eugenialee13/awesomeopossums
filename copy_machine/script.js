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
    if (sessionStorage.getItem("copynumber") != null) {
        div.innerHTML = "<h2>" + sessionStorage.getItem("copynumber") + " Copies</h2>";
    } else {
        div.innerHTML = "<h2>" + "1 Copy</h2>";
    }
    div = document.getElementById("paperSource");
    div.innerHTML = "<h2>Bin " + urlParams.get("paper-source") + "</h2>";
    div = document.getElementById("sides");
    div.innerHTML = "<h2>" + urlParams.get("side-orig") + " Sided &rarr;" + urlParams.get("side-final") + " Sided</h2>";
    div = document.getElementById("separator");
    if (urlParams.get("separator-page") == "yes") {
        div.innerHTML = "<h2>Bin " + urlParams.get("from-bin") + " Separator</h2>";
    } else {
        div.innerHTML = "<h2>No Separator</h2>";
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
