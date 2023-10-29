let somNumber="123";
console.log(typeof somNumber)
let someString=Number(somNumber)
console.log( someString)
//when we convert string to number or viseversa then if the variable contain only one type of contain then it will convert it as it is but when mixed or opposite datatype given then it return NaN //note:22BIT will be a string not a mix 
// example
let a="arghya"
let b="22"
let c="22bit"
let f=Number(a)
a=String(a);
b=Number(b)
let d=String(c)
let e=Number(c)
console.table([a,b,d,e,f])//start