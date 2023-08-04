// Types of Console

// console.log("Hello World");
// console.error("This is an  error")
// console.warn("This is a warning")

// Types of variables
// 1. var , 2. let, 3. const
// let :- In let , we reassign the value

//example:-
// let num =30;
// num =31;
// console.log(num);

// const :- In const, we don't reassign the value
// const sex = "Male";
// console.log(sex);

//DataTypes
//String, Numbers, Boolean, null, undefined, Symbols

// const name = "Ankit"; // String
// const age = 25;       // Number
// const rating = 4.5;     //Number Not float
// const isCool = true;    // Boolean
// const x =       null;      // null
// const y =       undefined;  //undefined
// let z;


// To find the type of any datatype 
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isCool);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

// Concarenation
// const name = "Ankit";
// const age = 25;

// console.log("My name is" + " "+ name +" " + "and My age is" +" "+ age);

// Template String

// const hello = `My name is ${name} and I am  ${age}`;
// console.log(hello);

//To find the length of the datatype

// const s = "Technology, coding, Passion, Opportunity";
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLocaleLowerCase());
// console.log(s.substring(0, 5).toUpperCase());
// console.log(s.split(', '));

//Arrays =  Varibles that hold multiple values


// const number = new Array(1,2,3,4,5,6,7,8,9);
// console.log(number);

// const fruits = ["Apples ", "Oranges ", "Mango" ];
// console.log(fruits);

// fruits.unshift("Gauva")  // unshift is used for adding elements in the starting of the array.
// fruits.push("Grapes");  // Push used for adding elements in the last of the array. 
// console.log(fruits);
// fruits.pop();       // To remove the last element of the array.
// console.log(Array.isArray(fruits)); // To check the value in the array.
// console.log(fruits.indexOf("Mango"));      // To find the index of the elements.
// console.log(fruits);

// Objects
// const person= {
//     firstName : "Ankit",
//     lastName : "sinha",
//     age : 25,
//     hobbies : ["Cricket", "Travelling", "Sleeping"],
//     address :{
//         Street : " ward no :- 12 ,Makhdumabad",
//         city : "Jehanabad",
//         State : "Bihar"
//     }
// }

// console.log(person);
// console.log(person.firstName , person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);

//Destructing
// const{firstName, lastName, address: {city}} = person;
// console.log(firstName);
// console.log(lastName);
// console.log(city);

//ADD property
// person.email = "sinhaankit536@gmail.com";
// console.log(person);

// const todos = [
//     {
//         id : 1, 
//         Text : "Take the shower",
//         isCompleted : false
//     },

//     {
//         id : 2, 
//         Text : "Eat BreakFast",
//         isCompleted : true
//     },

//     {
//         id : 3, 
//         Text : "Take a Nap",
//         isCompleted : false
//     }

// ];

// console.log(todos);
// console.log(todos[2].Text);

// Convert Into JSON

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);


//LOOPs
// For Loop

// for(let i =0; i<= 10; i++){
//     console.log(`for loop number : ${i}`);
// }

// for(i = 0; i< todos.length; i++){
//     console.log(todos[i].isCompleted);
// }

// for(let todo of todos){
//     console.log(todo.id);
// }
// While Loop
// let i =0;
// while(i <= 10){
//     console.log(`While loop number : ${i}`);
//     i++;
// }

//forEach , map, fillter

//forEach
// todos.forEach(function(todo){
//     console.log(todo.Text)
// });

// Map
// const todoText = todos.map(function(todo){
//         return todo.Text;
// });

// console.log(todoText);

// Filter and only return the text from the id 2 by using filter and map
// Functional Programming
// const todocompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
// }).map(function(todo){
//     return todo.Text;
// })

// console.log(todocompleted);

// Difference between == and ===

// == is only campare the value 
// const x = 15;
// if(x == 10 ){
//     console.log("X is 10");
// }


// === comapere the value and datatype both
// if(x === 10){
//     console.log("x is 10");
// }
// else if(x >10) {
//     console.log("X is greater than 10");
// }
// else {
//     console.log("x is less 10");
// }

//Tunery Operator
// const x = 1;

// const color = x > 10 ? "color is blue " : "color is red";
// console.log(color);

// Switch conditions
// const x=5;

// const color = 'orange';
// switch(color){
//     case 'red' :
//         console.log("color is red");
//         break;
     
//      case 'blue' :
//         console.log("color is blue");
//         break;

//      default:
//         console.log("Color is NOT red or blue");
//         break;
// }

// FUNCTIONS

// function addNums( num1=0 , num2=0){ // default value of num1 and num2
//     // console.log(num1 + num2);       // print the value
//     return num1 + num2;                 // return the value
// }
// console.log(addNums());

// ARROW FUNCTION
// const addNums = (num1 ,  num2) => {
//     return num1 + num2;    
// }
// console.log(addNums(5 ,5));

// OR

// const Addnums = (num1 ,num2) => num1 + num2;
// console.log(Addnums(3, 6));

// OOPS(Object Oreinted Programming)

// this keyword and Constructor Function

// function person (firstName , lastName , Dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.Dob = new Date(Dob);
// }

// // Prototype
// person.prototype.fullName = function (){
//     return `${this.firstName} ${this.lastName}`
// }

// person.prototype.getBirthYear = function (){
//     return this.Dob.getFullYear();
// }

// Class
// class person {
//     constructor (firstName , lastName, Dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.Dob  = new Date(Dob);
//     }

//     getBirthYear (){
//        return this.Dob.getFullYear();
//     }

//     fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// Instantiate object
// const person1 = new person("Ankit", "Sinha", "07-10-1997");
// console.log(person1.getBirthYear());
// console.log(person1.fullName());

// DOM(Document Object Model)
