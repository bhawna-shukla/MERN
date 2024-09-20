let fruits = ["apple","mango","grapes","orange"]
console.log(fruits)
 
console.log('............array method........')

// 1 push() - add element at the end of the array
// 2 pop() - remove elements from the end of the array
// 3 shift() - remove element from the begining of the array
// 4 unshift( )- add element at the begining of the array
// 5 concat() - merge two array 
// 6 slice()- extract  a portion of an array
// 7 splice() - add/remove element from an array 
// 8 indexof () - find the index of an element 
// 9 forEach () - loop thnrough the array
// 10 map()- create a new array from an existing array
// 11 filter() - create a new array with elements that pass a test



// indexing (single using) and  slicing( grouping)
 console.log(fruits[3]);
 console.log(fruits[2]);

 console.log(fruits.slice(1,5))

console.log("................")

let cosmatic = ["primer","foundation", "compact", "lipstick", "kajal", "mascara", "eyeliner","concilor","bindi"]
console.log(cosmatic.length);

console.log('...........')
fruits.push("strawberry")
console.log(fruits)
 console.log('...........')
  
fruits.pop()
console.log(fruits)
console.log('............')
fruits.unshift("strawberry")
console.log(fruits)

fruits.shift()
console.log(fruits)

// concat
let newarray = fruits.concat(cosmatic)
console.log(newarray)

// indexOf
let ind = newarray.indexOf("kajal")
console.log(ind)
// first gapping ,second remove ,third add
newarray.splice(2,2, "coconut")
console.log(newarray)

 let num = [1,2,3,4,5,6,7,8,9,10]
 num.forEach((a) => {
    console.log(a)
 })
console.log(",,,,,,,,,,,")

let arr = [1,2,3,4,5,6,7,8,9,10]
let newA =[]
arr.forEach((a) =>{
    newA.push(a*2)
}) 
console.log(newA)

console.log(",,,,,,,,,,,,")

// map par new array hi banata hai
 let newaA1 =arr.map((a) => a*2
 )

// filter
 let evenNum = arr.filter((a) => a%2==0)
 console.log(evenNum)




