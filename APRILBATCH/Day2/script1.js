//import myproducts from "./data.js"; // default import
//import {bat} from "./data.js"; // named import

import myproducts, {bat as mybat} from "./data.js";
const products = "Apple" 
const bat = "Mango"
console.log(myproducts)
console.log(`my fav batsman is ${mybat}`)
