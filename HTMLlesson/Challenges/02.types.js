// * BRONZE
// Create an Object that contains a string, number, boolean, and object.
// Console.log the type of one of the values in the object.
// */

let house = {
    isFull: true,
    occupants: 1,
    owner: "Kenneth",
    chores: {
        dishes: 20,
        vacuum: "me2",
        laundry: "me3"
    }

}

console.log(house.chores.dishes);

/* SILVER
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/

let test = house.owner
if (test) {
    console.log(typeof test);
} else if (test !== typeof string) {
    console.log("What are you?")
} else if (test !== typeof number) {
    console.log("What are you?")
} else if (test !== typeof boolean) {
    console.log("What are you?")
} else if (test !== typeof object) {
    console.log("What are you?")
} else {
    console.log("What are you?")
}


// console.log(typeof house.owner);