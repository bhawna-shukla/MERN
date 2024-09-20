const student = {
    name : 'Bhawna',
    age : 20,
    email : 'bhawna@32gmail.com',
    contact :674836329 
}

console.log(student)
// to access the value of the obeject  through the key
console.log(student.name)
console.log(student.age)
console.log(student.contact)

// replacing the value of the object
student.email = 'bhawna52@gmail.com'
console.log(student.email)

// adding the new key b]value of data
student.city ='lucknow'
console.log(student)
console.log('..................')

const smartphone ={
    brand : 'sumsung',
    model : 'glaxy 23',
    price : 4565,
    color : ['green','black','white','red']
}
console.log(smartphone)

console.log(smartphone.color[1])
smartphone.color[0] = 'pink'
console.log(smartphone)

console.log('......................')

const phones =[
    {brand : 'sumsung', model: 'galaxy s45', price : 70000, color: [ "red","blue","black"]},
    {brand : 'Apple', model: 'iphone12', price : 80000, color: [ "red","blue","black"]},
    {brand : 'Onepluse', model: '8T', price : 30000, color: [ "red","blue","black"]},
    {brand : 'Xiaomi', model: 'Mi 10', price : 80000, color: [ "red","blue","black"]},

]
console.log(phones[1].model)
console.log(phones[2].color[2])

console.log('...............')

const Employees =[
    {name : 'bhawna', age : '20', department: "IT", salary : 50000},
    {name : 'zahra', age : '20', department: "google", salary : 70000},
    {name : 'shahe alam', age : '20', department: "TCS", salary : 40000},
    {name : 'akhlesh', age : '20', department: "Facebook", salary : 60000}
]
console.log(Employees)

console.log(Employees[2])


