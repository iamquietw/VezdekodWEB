let mobile = false;
window.onresize = onResize;
window.onload = onResize;
function onResize() {
    console.log(document.body.offsetWidth)
    if((document.body.offsetWidth <= 1000) && !mobile) {
        switchMode(1);
    } else {
        switchMode(0);
    }
}

function switchMode(mob) {
    let desktopDiv = document.getElementById("desktop")
    let mobileDiv = document.getElementById("mobile")
    if(mob) {
        mobile = true;
        desktopDiv.className = "hide";
        mobileDiv.className = "visible";
    } else {
        mobile = false;
        desktopDiv.className = "visible";
        mobileDiv.className = "hide";
    }
}

function send() {
    if(mobile) {
        let data = JSON.stringify({
            name: document.getElementById("mName").value,
            lastName: document.getElementById("mLastName").value,
            email: document.getElementById("mMail").value,
            company: document.getElementById("mCompany").value,
            city: document.getElementById("mCity").value,
            message: document.getElementById("mMsg").value,
        })
        download(data)
    }
}

function download(data) {
    let a = document.createElement("a");
    let file = new Blob([data], {type: 'application/json'});
    a.href = URL.createObjectURL(file);
    a.download = "data.txt";
    a.click();
}