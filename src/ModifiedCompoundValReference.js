//Changing compound val using assignment by reference.
var x = [1, 3, 5];
(function (y) {
    y.length = 0;
    y.push(2, 4, 6)
})(x);
console.log(x);
