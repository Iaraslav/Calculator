var buttonEqualT1 = document.getElementById("equalT1");

function getOperationt1() {
    var t1operations = document.getElementById("task1sel");
    var t1seloperation = t1operations.options[t1operations.selectedIndex].value;
    return t1seloperation;
}

function getNumber1t1() {
    var number1 = Number(document.getElementById("firstnum").value);
    return number1;
}

function getNumber2t1() {
    var number2 = Number(document.getElementById("secondnum").value);
    return number2;
}

// function onButtonEqualt1Click() {
//     console.log('')
// }
function getProdT1(){
    var num1 = getNumber1t1();
    var num2 = getNumber2t1();
    if(getOperationt1() == "+"){
        window.alert(num1 + num2);
    }
    if(getOperationt1() == "-"){
        window.alert(num1 - num2);
    }
    if(getOperationt1() == "*"){
        window.alert(num1 * num2);
    }
    if(getOperationt1() == "/"){
        window.alert(num1 / num2);
    }
}


function getNumber1t2() {
    var number1 = Number(document.getElementById("thirdnum").value);
    return number1;
}

function getNumber2t2() {
    var number2 = Number(document.getElementById("forthnum").value);
    return number2;
}

function getProdT2() {
    var num1 = getNumber1t2();
    var num2 = getNumber2t2();
    if(document.getElementById("+").checked){
        window.alert(num1 + num2);
    }
    if(document.getElementById("-").checked){
        window.alert(num1 - num2);
    }
    if(document.getElementById("*").checked){
        window.alert(num1 * num2);
    }
    if(document.getElementById("/").checked){
        window.alert(num1 / num2);
    }
}

function getNumber1t3() {
    var number1 = Number(document.getElementById("fifthnum").value);
    return number1;
}

function getNumber2t3() {
    var number2 = Number(document.getElementById("sixthnum").value);
    return number2;
}

function downNum2(){
    var value = parseInt(document.getElementById("sixthnum").value, 10);
    value = isNaN(value)? 0 : value;
    value--;
    document.getElementById("sixthnum").value = value;
}

function upNum2(){
    var value = parseInt(document.getElementById("sixthnum").value, 10);
    value = isNaN(value)? 0 : value;
    value++;
    document.getElementById("sixthnum").value = value;
}

function downNum1(){
    var value = parseInt(document.getElementById("fifthnum").value, 10);
    value = isNaN(value)? 0 : value;
    value--;
    document.getElementById("fifthnum").value = value;
}

function upNum1(){
    var value = parseInt(document.getElementById("fifthnum").value, 10);
    value = isNaN(value)? 0 : value;
    value++;
    document.getElementById("fifthnum").value = value;
}

function getOperationt3() {
    var t1operations = document.getElementById("task3sel");
    var t1seloperation = t1operations.options[t1operations.selectedIndex].value;
    return t1seloperation;
}

function getProdT3(){
    var num1 = getNumber1t3();
    var num2 = getNumber2t3();
    if(getOperationt3() == "+"){
        window.alert(num1 + num2);
    }
    if(getOperationt3() == "-"){
        window.alert(num1 - num2);
    }
    if(getOperationt3() == "*"){
        window.alert(num1 * num2);
    }
    if(getOperationt3() == "/"){
        window.alert(num1 / num2);
    }
}