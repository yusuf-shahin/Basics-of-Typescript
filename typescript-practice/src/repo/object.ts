//* optional property , readonly

//* basics

let car: { brand: string; year: number } = { brand: "toyota", year: 2020 }
car.brand = "ford"
// car.color = "blue" //# ts show error

let car1: { brand: string; year: number } = { brand: "audi", year: 2021 }
// let car2: { brand: string; year: number } = { brand: "audi" } //# as we dont pass any year. So ts show error

//! optional property
let car2: { brand: string; year?: number; color?: string } = { brand: "audi" }

//* pass all property inside a array
const cars = [car, car1, car2]

//* same thing on simple way

let book = { title: "book", cost: 20 }
let pen = { title: "pen", cost: 5 }
let notebook = { title: "notebook" }

//! optional property in Array

let items: { title: string; cost?: number }[] = [book, pen, notebook]
//? here cost?: number === thats called optional property .
//? although cost property is optional . but we dont pass string . because the type of cost is number

//* we dont pass any string
// items.push({title : "laptop" , cost : "ninty"})  //# ts show error

//* here
// items[0].title = "new book"
// console.log(items)

//! readonly
// let items: { readonly title: string; cost?: number }[] = [book, pen, notebook]
// items[0].title = "new book" //# Error: Cannot assign to 'title' because it is a read-only property
