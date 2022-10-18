var array = [-3, 5, 1, 3, 2, 10];
var max = array[0];
var index = 0;

for (var i = 1; i < array.length; i++){
    if (max < array[i]){
        max = array[i];
        index = i;
    }
}

alert(max + " la lon nhat trong mang va co vi tri la " + index);