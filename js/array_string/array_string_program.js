// radha.b@excelr.com

let arr = [107, 3, 43, 23, 44];

//============find the sum of array elements.==================
// 1. Iterating a loop
// 2. Reduce function

// Iterating loop method
let sum = 0;
   for(let i =0; i<arr.length;i++){
    sum += arr[i];
   }
   console.log(sum);


// Reduce Function   
let sum1 = arr.reduce(
    (sum1, value)=>{
        return sum1 + value;
    }
);
console.log(sum1);
   

//============find Maximum Number.==================
        // 1. Sorted 
let sorted = arr.sort((a,b)=>a-b); //default ascending order
console.log(sorted);

console.log('maximum', sorted[arr.length-1]);
console.log('minimum', sorted[0]);



                    //OR// Math Functions //

let max = Math.max(...arr);
console.log('maximum', max);

let min = Math.min(...arr);
console.log('minimum', min);

                  
//====================== Sorted users based on marks ============================

let users = [
    {"name": "studentA", marks:78},
    {"name": "studentB", marks:88},
    {"name": "studentC", marks:98},
    {"name": "studentD", marks:92},
]

// higher to lower marks
    let sortedUsers=users.sort((a,b)=>a.marks-b.marks);
    console.log(sortedUsers);
    
     sortedUsers.reverse(); // => Used to reverse the array after the logic is performed, used when asked for reverse the following after execution.

// ==============================Remove Duplicates from Array===========================================    
let arr2 = ["apple", 'ball', 'apple', 'carrot', 'dog', 'dog'];
    let unique = new Set(arr2);
    console.log(arr2);
    console.log(unique);

//==================Find second largest number in an array=============================
 let arr3 = [10, 34, 12, 34, 44, 44];
 let uniqueArray = [...new Set(arr3)]; // converting array into set and storing set in array format.
 uniqueArray.sort((a,b)=> b-a); // sorted in descending order
 console.log(uniqueArray); 
 console.log('second maximum',uniqueArray[1]); // printing second largest number based on index.
 console.log('second minimum', uniqueArray[uniqueArray.length-2]); //printing second largest number based on index
   
                // OR //

    let flargest= -Infinity;
    let slargest= -Infinity;
        for (let index = 1; index < arr3.length; index++) {
            const element = arr3[index];
            
            if (element>flargest) {
                slargest = flargest;
                flargest = element;
            }
            else if(element > slargest && element !== flargest){
                slargest = element;
            }
        }
        console.log(flargest);
        console.log(slargest);
        
        