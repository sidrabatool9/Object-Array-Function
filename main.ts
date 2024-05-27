// Learning Objective: Practice working with objects and arrays in TypeScript to create a data 
// structure.
// Task: Create a program that manages a simple friend list.
// 1. Define an object named people containing an empty array called friends.
// 2. Create three separate objects, each representing a friend, with properties like firstName, 
// lastName, and optionally id.
// 3. Add these friend objects to the friends array within the people object.
// 4. Output the entire people object to the console, displaying your information and your 
// friend list.


let friend1={
    firstName: "Sidra batool",
    lastName: "Mughal",
    id: 156,
}

let friend2= {
    firstName: "Laiba",
    lastName: "Shaikh",
    id: 782,
}

let friend3= {
    firstName: "Duaa",
    lastName: "Abbasi",
    id: 352,
}
 let people={
    friends: [friend1, friend2, friend3]
 }

 console.log(people);