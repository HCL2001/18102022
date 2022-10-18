let x = 0;
let array = Array();

function addBtn(){
    array[x] = document.getElementById("Value").value;
    alert("Element: " + array[x] + " Added at index " + x);
    x++;
    document.getElementById("Value").value = "";
}

function btnDisplay(){
    let e ="<hr/>";
    for (let i = 0; i < array.length; i++){
        e += "Element " + i + " = " + array[i] + "<br>";
    }
    document.getElementById("Result").innerHTML = e;
}