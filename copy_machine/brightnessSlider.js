function changeBrightness(percent) {
    console.log(percent);
    document.getElementById("image").style.filter = "brightness(" + percent + "%)";
    return
}