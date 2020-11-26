function getValue(Value) {
var input = document.getElementById("input")
input.value += Value
}

function clearValue(){
    var Input = document.getElementById('input').value
    input.value = ""
}

function getCompleteValue(){
    var Input = document.getElementById('input')
Input.value = eval(Input.value)
}