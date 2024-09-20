console.log('.............OPERATORS............');


// Airthmatic operators are used to perform calculations.

const x = 7;
const y = 4 ;
console.log("addition",x+y);
console.log("subtract",x-y);
console.log("multiply",x*y);
console.log("division",x/y);
console.log("remender",x%y);
console.log("expontation(power)",x**y);

// we cannot use const value for increment 
// using by let 
let a = 4;           
a++;
console.log('........increment........... ')
               
console.log(a);
a--;
console.log("......decrement...........")

console.log(a);

// Assignment operators are used  assign  value to variables
let firstnumber = 2;
firstnumber +=3;
console.log(firstnumber);
firstnumber -=3;
console.log(firstnumber);
firstnumber *=3;
console.log(firstnumber);
firstnumber /=3;
console.log(firstnumber);
firstnumber **=3;
console.log(firstnumber);
firstnumber %=3;
console.log(firstnumber);


console.log(".........COMPARISION Operators.........");
// COMPARISON Operaters compare two values are return a booleanvalue , either true or false
let num = 3;
let num1 = 4;
console.log("Equal to",num==num1);
console.log(" not Equal to",num!=num1);
console.log("strict equal to ",num===num1);
console.log("greater than ",num>num1);
console.log("greater than Equal to",num<=num1);
console.log(" less than Equal to",num==num1);

console.log("...........LOGICAL Operator......");
// logical operators perform logical operations and return a boolean value ,either true or false
let num2= true;
let num3= false;
// both true then ture and both false than false
console.log("logical AND ", num2&&num3);
//  any  one true then true 
console.log("logical OR", num2||num3);
// if false so true any one value 
// if true so false 
console.log("logical NOT",!num2);
console.log(!num3);













