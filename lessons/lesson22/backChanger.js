function setBackGreen() {
    document.getElementById('container').style.backgroundColor = 'green'
    document.getElementById('container').style.color = "red"
    document.getElementById('container').innerHTML = "<h1>NOW BACK IS GREEN</h1>";
    // document.getElementById('container').innerHTML = 6+9;
}

function setBackRed() {
    document.getElementById('container').style.backgroundColor = 'red'
    document.getElementById('container').style.color = "green"
    document.getElementById('container').innerHTML = "<h1>NOW BACK IS RED</h1>";
}