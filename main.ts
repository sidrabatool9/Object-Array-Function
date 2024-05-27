// Learning Objective: Get comfortable with data structures (objects and arrays) and basic 
// functions in TypeScript.
// Tasks:
// 1. Student Data: The provided code defines an interface named Student that describes 
// student information like name, senior status (true/false), and whether they've completed 
// their assignments (true/false).
// o Imagine this as a template for organizing student details.
// 2. Student List:
// o An array named students stores information about several students using the 
// Student template. Think of this array as your class list!
// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors 
// and have completed their assignments.
// o Can you guess why this information might be helpful?
// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have 
// a function that removes students who haven't completed their assignments 
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)?

interface student {
    name: string
    isSenior: boolean
    isCompletedAssignments: boolean
};

let students: student[]= [
    {
        name: "Sidra batool",
        isSenior: true,
        isCompletedAssignments: true, 
    },
    {
        name: "Dawood",
        isSenior: false,
        isCompletedAssignments: false,
    },
    {
        name: "Sadia",
        isSenior: true,
        isCompletedAssignments: false,
    },
    {
        name: "Taha",
        isSenior: false,
        isCompletedAssignments: true,
    },
    {
        name: "Sana",
        isSenior: false,
        isCompletedAssignments: false,
    },
    {
        name: "Mehak",
        isSenior: true,
        isCompletedAssignments: true,
    },
];
// console.log(students);

let findSenior= (students: student[]) => {
return students.filter(students => students.isSenior && students.isCompletedAssignments === true)
};
// console.log(findSenior(students));

const removeStudents= (students: student[]) =>{
    return students.filter(students=> students.isCompletedAssignments ===false)
};
console.log(removeStudents(students));



