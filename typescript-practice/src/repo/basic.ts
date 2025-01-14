// console.log("typescript tutorials")

let name: string = "Yusuf"
name = "Shahin"
// name = 144
console.log(name.toUpperCase())

//! =========
//? union type
//! =========

//* set the type
let money: string | number = 100
console.log(money)
money = "$100"
console.log(money)

//* set the value
let request: "panding" | "success" | "error" = "panding"
// request = "random" //#--> error
console.log(request)

//! any (we any type)

let notSure: any = false
notSure = 1399
notSure = "hello world"

console.log(notSure)

//! loop ( runtime error)

//* string array ( dont set the type of array)

const books = ["1984", "amimle firm", "atomic habit", 2024] //# here we dont found any error

// const books: string[] = ["1984", "amimle firm", "atomic habit", 2024] //# ts show the error

let foundBook: string | undefined //# --> here founBook could be a string or undefine

for (let book of books) {
  if (book === "1984") {
    foundBook = book
    break
  }
}

console.log(foundBook?.length) //# in ts always optional chaining

// ! array in ts

// let prices: number[] = [100, 75, 42]
// console.log(prices)

// let fruit: string[] = ["apple", "orange"]
//? as type of array is string so we dont pass any number in here
// fruit.push(1)
// console.log(fruit)

// let people: string[] = ['bobo', 'peter', 1];

//! dont use [] , [] === empty array .
//? be careful "[]" means literally empty array

// let randomValues: [] = [1];

// be careful with inferred array types
let names = ["peter", "susan"]
// let names = ['peter', 'susan', 1]
console.log(names)

// let array: (string | boolean)[] = ["apple", true, "orange", false]
