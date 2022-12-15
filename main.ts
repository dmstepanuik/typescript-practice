const hello = 'Hello World!';
console.log(hello);

const myNumber: number = 41
const myString: string = 'Hello!'
const myBoolean:boolean= true

function sum(a: number, b: number): number{
  return a+b
}

const number: number [] = [1, 2, 3]
const strings: string[] = ['a', 'b', 'c']

let a: any = '1'

a = () => 1


type NumberOrstring = number|string

function addOne(num: NumberOrstring):number{
return 1+Number(num)
}


interface User {
  name: string
  age: number
  hobbies: string[]
}

const person:User={
  name: "Dmytro",
  age: 39,
  hobbies:["IT Developing", "sports"]
}

let c: unknown = 42

let d = c === 42 ? 'hello' : 'world'

function infinite(): never {
  while (true) {
    console.log(1+1)
  }
}

// class User {
//   protected weight: number
//   private age: number

//   constructor( public name: string){}
// }

function half<T extends number|string>(array: T[]): T[] {
  return array.slice(0,array.length/2)
}