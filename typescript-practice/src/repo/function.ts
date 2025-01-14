//! Basics

// function sayHi(name) {}

//? here we pass the parameter in three way -

//* 1. any
// function sayHi(name:any) {}

//* 2. config
//? go to tsconfig.json then  "strict" : false .

//* 3. pass the actual type
function sayHi(name: string) {
  console.log(`Hello , my name is ${name}`)
}
sayHi("yusuf")

//! return function

//* basic
// const discountPrice = (price: number) => {
//   return price - price * 0.2
// }
// const finalPrice = discountPrice(700)
// console.log(finalPrice) //# ts dose not show any error in here.

//? but In ts we also set which type we want to return

const discountPrice = (price: number): number => {
  return price - price * 0.2
}
const finalPrice = discountPrice(700)
console.log(finalPrice) //# if our return type dose not match, type script show error in return

//* example
// const bookPrice = (book: string, price: number): number => {
//   return `Price of ${book} is $${price}`
// } //# ts show error in here
// console.log(typeof bookPrice("1984", 12))

//_ challange

// Create a new array of names.
// Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.
// Use this function to check if various names are in your array and log the results.

const names: string[] = ["Bob", "Enna", "Suji", "John"]

const checkName = (name: string): boolean => {
  return names.includes(name)
}

const nameToCheck: string = "Bob"

checkName(nameToCheck)
  ? console.log(`${nameToCheck} is in the list .`)
  : console.log(`${nameToCheck} dose not exist .`)

//! ==========
//? optional parameter
//! ==========

// or || operator
// function calculatePrice(price: number, discount?: number) {
//   return price - (discount || 0)
// }

// let priceAfterDiscount = calculatePrice(100, 20)
// console.log(priceAfterDiscount) //# Output: 80

// let priceWithoutDiscount = calculatePrice(300)
// console.log(priceWithoutDiscount) //# Output: 300

//* function default parameter ( I prefer this)
function calculateScore(initialScore: number, penaltyPoints: number = 0) {
  return initialScore - penaltyPoints
}

let scoreAfterPenalty = calculateScore(100, 20)
console.log(scoreAfterPenalty) //# Output: 80

let scoreWithoutPenalty = calculateScore(300)
console.log(scoreWithoutPenalty) //# Output: 300

//! ========
//? return void
//! ========

function logMessage(message: string): void {
  console.log(message)
}
logMessage("Hello, TypeScript!") // Output: Hello, TypeScript!

// function logMessage(message: string): void {
//   console.log(message);
//   return 'This value is ignored'; //# ts show error
// }

// logMessage('Hello, TypeScript!'); //# Output: Hello, TypeScript!

//! =============
//? rest peremeter
//! =============

function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2)
  console.log(doubled)

  let total = numbers.reduce((previous, current) => {
    return previous + current
  }, 0)
  return `${message} ${total}`
}

let result = sum("The total is:", 1, 2, 3, 4, 5) // result will be "The total is: 15"

//_ Challange

// Your task is to create a function named processInput that accepts a parameter of a union type string | number. The function should behave as follows:

// If the input is of type number, the function should multiply the number by 2 and log the result to the console.
// If the input is of type string, the function should convert the string to uppercase and log the result to the console.

function processInput(input: string | number) {
  typeof input === "number"
    ? console.log(input * 2)
    : console.log(input.toUpperCase())
}

processInput(10) //# Output: 20
processInput("Hello") //# Output: HELLO

//! =========
//? object as peremeter
//! =========

// function createEmployee({ num }: { num: number }): {
//   num: number
//   isActive: boolean
// } {
//   return { num, isActive: num % 2 === 0 }
// }
// { num } --> destructure it from createEmployee({ num: 1})

//* same things on different way
function createEmployee(employee: { num: number }): {
  num: number
  isActive: boolean
} {
  const num = employee.num
  const isActive = num % 2 === 0
  return { isActive, num }
}

const first = createEmployee({ num: 1 })
const second = createEmployee({ num: 2 })

console.log(first) //# { num: 1, isActive: false }
console.log(second) //# { num: 2, isActive: true }

//! alternative

// function createStudent(student: { id: number; name: string }) {
//   console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`)
// }

function createStudent({ id, name }: { id: number; name: string }): void {
  console.log(
    `Welcome to the course ${name.toUpperCase()}, your id is ${id}!!!`
  )
}

const newStudent = {
  id: 5,
  name: "anna",
}

// createStudent(newStudent) //# Welcome to the course ANNA, your id is 5!!!

//! ==========
//? optional parameter as obj
//! =========

const bio = (
  bio: { name: string; idNum: number } = { name: "Yusuf", idNum: 407 }
): void => {
  console.log(`My name is ${bio.name} and my id is ${bio.idNum}`)
}

// bio() //# My name is Yusuf and my id is 407
// bio({ name: "Noyon Bond", idNum: 700 }) //# My name is Noyon Bond and my id is 700

//_ Challange

//! Your task is to create a function named processData that accepts two parameters:

// The first parameter, input, should be a union type that can be either a string or a number.
// The second parameter, config, should be an object with a reverse property of type boolean, by default it "reverse" should be false
// The function should behave as follows:

// If input is of type number, the function should return the square of the number.
// If input is of type string, the function should return the string in uppercase.
// If the reverse property on the config object is true, and input is a string, the function should return the reversed string in uppercase.

const processData = (
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
) => {
  if (typeof input === "number") {
    const square = input ** 2
    return square
  } else if (typeof input === "string" && config.reverse) {
    const reverseStr = [...input].reverse().join("")
    return reverseStr
  } else {
    const upperCase = input.toUpperCase()
    return upperCase
  }
}

console.log(processData(8))
console.log(processData("hello"))
console.log(processData("shahin", { reverse: true }))
