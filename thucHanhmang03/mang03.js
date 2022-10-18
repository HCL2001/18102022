var value = parseInt(prompt("Nhap vao mot so"));
var numbers = [-3, 5, 1, 3, 2, 10];
for (var i = 0; i < numbers.length; i++){
    if (value == numbers[i]){
        alert("Value " + numbers[i] + " found at " + (i+1));
    }
}