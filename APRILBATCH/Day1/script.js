// // const divElement = document.getElementById("one");
// // divElement.innerHTML = "Welcome to FSD";

// let player ={
//     jno:14,
//     pname:"Virat",
//     mp:100,
//     rs:5000,
//     'mom-name':'Saroj',
//     dad:100
//     'dad-name':'Prem Nath'
// }
// const name = 99;

// console.log('I like',player.pname);
// console.log(`I like ${player.pname}`); // to conclude any variable in a string we use backticks and ${} to conclude the variable name.
//                                        //  This is called template literals. It is used to make the code more readable and easier to understand.
// console.log('pname');
// console.log(player['mom-name']);
// console.log(player.dad-name);
// console.log(player['dad-name']);

// console.log(player);
// player.centuries = 85


// const player1 ={
//     pno:18,
//     pname:'Virat'
// }
// console.log(player1);
// player1.pno = 45;
// player1.pname = 'Rohit';
// console.log(player1);

    // for 
    // forEach 
    // while 
    // do while 

// Sum of 1st 5 natural numbers
// // Traditional for-loop
// let sum = 0;
// for(let i=1; i<=5; i++){
//     sum += i;
// }
// console.log(sum);

// Sum of all elements in an array
// forEach loop in javascript is known as  "for of loop"
// let arr=[10,20,30,40,50]
// let sum1=0
// for(let num of arr){
//     sum1 += num;
//     if(sum1>=100)
//         break;    //presently terminates a loop we use break statement.
                  // break is used to stop a loop.
// }          


//"for in loop" is used to iterate through the keys of an object
// let player ={
//     jno:14,
//     pname:"Virat",
//     mp:100,
//     rs:5000,
// }

// for(let key in player){
//     console.log(`${key} : ${player[key]}`);  // to conclude any variable in a string we use backticks 
//                                              // and ${} to conclude the variable name.
// }

// for each method
// const cars = ["BMW", "Volvo", "Mini"];
// display I drive BMW, I drive Volvo, I drive Mini




// function greet(){
//     console.log("Hello");
// }

// greet()
// // - function keyword
// // - function name
// // +  =>

// const greet1 = () => {
//     console.log("Hello");
// }
// greet1()


// console.log("-----------")
// display I drive followed by car name
// for those cars whose length > 3
// const cars1 = ["BMW", "Volvo", "Mini", "Tesla", "Mahindra", "Honda"];
// cars1.forEach(
//     (car) => {
//         if(car.length <= 3)
//             return
//         console.log(`I drive ${car}`);
        
//     }
// )

// return in forEach works like continue in a loop.


// Map filter

const arr = [11,21,13,41,15]

// Display me the square of all odd numbers
//{1,9,25}

// let oddNumbers = arr.filter(
//     (num) => num % 2 == 1
// ) 
// // odd numbers = [1,3,5] => [1,9,25]
// oddSquares = oddNumbers.map(
//     (num) => num * num
// )

// oddSquares.forEach(
//     (num) => console.log(num)
    
// )


// arr.filter(n=> n%2==1).map(n=>n*n).forEach(n=>console.log(n))

// let a=10
// let b="Apple"
// let c=[10,20,30]   // [ ] array, list, collection
// let d={            // { } Object, dictionary, map
//     x = 1,
//     y = 2
// }

// function test(){
//     console.log("Hii");
    
// }
// console.log(typeof(a))      //number
// console.log(typeof(b))      //string
// console.log(typeof(c))      //object
// console.log(typeof(d))      //object
// console.log(typeof(test))   //function



//Javascript object key: value
let player ={
    jno:14,    // type of value?  number     
    pname:"Virat",  // type of value? string
    mp:100,
    rs:5000,
    century: {
        odi: 54,
        test: 30,
        t20: 1
    },
    trophies: ["World Cup", "IPL", "Champions Trophy"],
    avg: function calculateAvg() {
        console.log(this.rs/this.mp)
        
    }
}
// number as a value to a key in JS object : Yes
// String as a value to a key in JS object : Yes
// Array as a value to a key in JS object : Yes
// Object as a value to a key in JS object : Yes

player.avg();



