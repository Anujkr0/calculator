let outputscreen = document.getElementById("screen");

function display(num){
    outputscreen.value += num;
}
function Calculate() {
    try {
        outputscreen.value = eval(outputscreen.value);
        

    }
    catch(err) {
        alert("invalid")
    }
}
function del() {
    outputscreen.value= "";
}