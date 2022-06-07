//Write a program that computes a factorial of a number taken as input.
//    5 Factorial – 5! = 1 * 2 * 3 * 4 * 5

console.log("Print factorial of Number")
var number = 7;
var factorial = 1;
for(var i = 1;i <= number;i++){
    factorial = factorial * i;
}
console.log("Factorial of ",number," is",factorial);