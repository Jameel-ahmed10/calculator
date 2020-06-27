

// calculator

function getNumber(number){
    
    var result = document.getElementById("input");
    result.value += number;

}

function clearNumber(){
var result = document.getElementById("input");
result.value = ""
}

function finalResult(){
    var result = document.getElementById("input")
    result.value = eval(result.value);
}

function click(){
    var result = document.write('click')
}