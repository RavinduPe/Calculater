function clearS(){
    document.getElementById("result").value ="";
}
 
function display(value) {
    document.getElementById("result").value += value;
}
 
function calculate() {
    var x = document.getElementById("result").value;
    var z = eval(x);
    document.getElementById("result").value = z;
}