// const john: { id: number; name: string; isActive: boolean } = {
//   id: 1,
//   name: "john",
//   isActive: true,
// }
// const susan: { id: number; name: string; isActive: boolean } = {
//   id: 1,
//   name: "susan",
//   isActive: false,
// }

// function createUser(user: { id: number; name: string; isActive: boolean }): {
//   id: number
//   name: string
//   isActive: boolean
// } {
//   console.log(`Hello there ${user.name.toUpperCase()} !!!`)

//   return user
// }

//! =========
//? type alias
//! =========
// store type in a varible then repetedlt use it .

type User = { id: number; name: string; isActive: boolean }

const john: User = {
  id: 1,
  name: "john",
  isActive: true,
}
const susan: User = {
  id: 1,
  name: "susan",
  isActive: false,
}

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`)
  return user
}
// console.log(createUser(susan))

type StringOrNumber = string | number // Type alias for string | number

let value: StringOrNumber
value = "hello" // This is valid
value = 123 // This is also valid

//* select the value
type Theme = "light" | "dark" // Type alias for theme

let theme: Theme
theme = "light" //# This is valid
theme = "dark" //# This is also valid

//* Function that accepts the Theme type alias
function setTheme(t: Theme) {
  theme = t
}

setTheme("light") // This will set the theme to 'dark'

//_ challange

//* create a oject
const rafi: Employees = { id: 503, name: "Farhan Bin Farid", depertment: "ISP" }
const joy: Employees = { id: 507, name: "Ismail Hossain", depertment: "Shape" }

const harun: Manager = {
  id: 808,
  name: "Jubyer Ahmed",
  employees: [rafi, joy],
}

//* set the object type alies
type Employees = { id: number; name: string; depertment: string }
type Manager = { id: number; name: string; employees: Employees[] }

type Stuff = Employees | Manager

function printStuffDetails(stuff: Stuff): void {
  if ("employees" in stuff) {
    console.log(`${stuff.name} is the manager of ${stuff.employees.length}`)
  } else {
    console.log(`${stuff.name} is the Stuff of ${stuff.depertment}`)
  }
}

printStuffDetails(joy)
printStuffDetails(harun)

//! ===========
//? Intersection Types
//! ===========
// how we add extra property in object ...

type Book = { id: number; name: string; price: number }
const book1: Book = {
  id: 2,
  name: "How to Cook a Dragon",
  price: 15,
}

const book2: Book = {
  id: 3,
  name: "The Secret Life of Unicorns",
  price: 18,
}

const discountedBook: Book & { discount: number } = {
  id: 4,
  name: "Gnomes vs. Goblins: The Ultimate Guide",
  price: 25,
  discount: 0.15,
}

//! or (We also do the same things)

// type DiscountedBook = Book & { discount: number }
// const discountedBook: DiscountedBook = {
//   id: 4,
//   name: "Gnomes vs. Goblins: The Ultimate Guide",
//   price: 25,
//   discount: 0.15,
// }

//! ===========
//? Interface Types
//! ===========
