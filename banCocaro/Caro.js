var b = document.getElementById("carogame");

var board = [];
var data = "";
for (let i = 0; i<5; i++){
    board[i] = new Array(0,0,0,0,0);
}

for (let i = 0; i<5; i++){
    for (let j = 0; j < 5; j++){
        data += board[i][j] + "&nbsp;&nbsp;";
    }
    data += "<br>";
}

data += "<br><input type='button' value='chang value' onclick='changeValue()'";
b.innerHTML = data;

function changeValue(){
    let positionX = parseInt(prompt("X: "));
    let positionY = parseInt(prompt("Y: "));
    data = "";
    board[positionX][positionY] = "x";
    for (let i = 0; i<5; i++){
        data += "<br>";
        for (let j = 0; j<5; j++){
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp";
        }
    }
    data +="<br><br><input type='button' value='change value' onclick='changeValue()'";
    b.innerHTML = "<hr>" + data;
}