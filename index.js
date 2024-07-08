// var iconThemeDark = document.getElementById("icon-1");
// var iconThemeLight = document.getElementById("icon-2");

// iconThemeDark.onclick = function(){
//     document.body.style.backgroundColor = "Black";
//     iconTheme.style.color = "white";
// }
// iconThemeLight.onclick = function(){
//     document.body.style.backgroundColor = "White";
//     iconTheme.style.color = "black";
// }

let numbers = [2, 34, 2, 4, 12, 67, 45];

function double(element, index, array){
    array[index] = element;
}

numbers.forEach(double);

console.log(numbers);


