// How to create variables:
// var x;
// let y;
// const z;
// The keyword const is a little misleading.
// It does not define a constant value. It defines a constant reference to a value.

// Because of this you can NOT:
// Reassign a constant value
// Reassign a constant array
// Reassign a constant object

// But you CAN:
// Change the elements of constant array
// Change the properties of constant object


// var, let and const
// Variables defined with let have Block Scope.
// Variables with var is always shown undefined before declaration
// variables with let cant be accessed before declaration

// You can change the elements of a constant array:

// JavaScript Operators
// arithmetic operators ( + - * / )
// assignment operator ( = ) 

// JavaScript Keywords
// JavaScript keywords are used to identify actions to be performed.

// Hyphens are not allowed in JavaScript. They are reserved for subtractions. 
// CamelCase

// DataTypes : Number, String, Object, Function, Boolean

// conditional testing.
// == and ===, !=

// ARRAY

// An array is a special variable, which can hold more than one value:
// made with 2 types: 
// 1.Direct Asssignment ::  let x = [3,4,5,6,7]
// 2. new Keyword ::  let x = new Array(3,4,5,6,7)
// Properties::
// cars.length   // Returns the number of elements
// cars.sort()   // Sort the array
// push, pop, shift, unshift


// OBJECTS
// e.g const person = {
//   firstName: "John",
//   lastName : "Doe",
//   id       : 5566,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// };
// You can access object properties in two ways:
    // 1 objectName.propertyName
    // 2 objectName["propertyName"]


// fUNCTIONS
// Can be defined in three ways
    // function name(parameter1, parameter2, parameter3) {
    //     // code to be executed
    //   }

     //const  name = (parameter1, parameter2, parameter3)=> {
    //     // code to be executed
    //   }

    //const  name =function (parameter1, parameter2, parameter3) {
    //     // code to be executed
    //   }


// CONDITIONAL STATEMENTS
// == , !=, &&, ||, ===, !==

//  FOR LOOP
// e.g. let cars = ['volvo','BMW', 'Lamborghini']
// for (let i = 0; i < cars.length; i++) {
//     text += cars[i] + "<br>";
//   } 

// The For In Loop
// The JavaScript for in statement loops through the properties of an Object:
// e.g. const person = {fname:"John", lname:"Doe", age:25};
// let text = "";
// for (let x in person) {
//   text += person[x];
// } 


// The JavaScript Switch Statement
// Syntax
// switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//   }


// ARRAY METHODS
// Map

// const fruits = ['apple','kera','orange','lemon']
// let newFruits = fruits.map((f,i)=>{
//     return i+". new"+f
// })
// console.log(newFruits)

// Filter
// const numbers = [2,3,5,6,9];
// let newNumbers = numbers.filter((n,i)=> n > 3)
// console.log(newNumbers)


// New Features in ES6
//     The let keyword
//     The const keyword
//     Arrow Functions
//     Map Objects
//     Classes
//     Promises
//     Default Parameters
//     String.includes()
//     String.startsWith()
//     String.endsWith()
//     Array.from()
//     Array keys()
//     Array find()
//     Array findIndex()
//     New Math Methods
//     New Number Properties
//     New Number Methods
//     New Global Methods
//     Iterables Object.entries
//     JavaScript Modules


// Promises
// async await
// then catch

const person ={
    firstname:'Ram',
    fullname: ()=>{
        console.log(person.firstname)
    }
}

person.fullname()