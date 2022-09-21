menu = document.getElementById("menu");
wrapper = document.getElementById("wrapper");
var toggle = 0;
var firstTime = True;

function pushAway() {
    if (!firstTime) {
        wrapper.classList.remove("cameBack");
    }
    else {
        firstTime = False;
    }
    wrapper.classList.add("pushedAway");
}
function comeBack() {
    wrapper.classList.remove("pushedAway");
    wrapper.classList.add("cameBack");
}

function clicked(){
    if(toggle == 0){
        pushAway();
        toggle = 1;
    }
    else if(toggle == 1){
        comeBack();
        toggle = 0;
    }
}