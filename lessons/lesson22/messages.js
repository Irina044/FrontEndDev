function showAlertMessage(){
    window.alert("ALERT MESSAGE FROM JS FILE");
}

function showInnerMessage() {
    document.getElementById('container').innerHTML = "<h1>INNER MESSAGE FROM JS FILE</h1>";
}

function showConsoleMessage() {
   console.log("CONSOLE MESSAGE FROM JS FILE");
}