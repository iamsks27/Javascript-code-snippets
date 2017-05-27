//Default parameter in ES5
function defaultParameters(num1, num2) {
    num1 = (typeof num1 === 'undefined') ? 5 : num1;
    num2 = (typeof num2 === 'undefined') ? 10 : num2;
    console.log(num1 + ', ' + num2);
}


//1 . Default parameter in ES6
function defaultParams(num1 = 10, num2 = 20) {
    console.log(num1 + ', ' + num2);
}

//2. Default parameter in ES6
function params() {
    return 10;
}

function add(num1 = 20, num2 = params()) {
    return num1  +  num2;
}


//3. Default parameter ES6
function multiply(num1, num2 = num1) { //inverse is not true. second parameter can't be assigned to first one.
    return num1 * num2;
}
