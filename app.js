//dAY 4
//Task 20 . mini project - student management system
let students = [
    {
        name: "Arun",
        department: "ECE",
        mark: 85
    },
    {
        name: "Kamal",
        department: "CSE",
        mark: 72
    },
    {
        name: "Livin",
        department: "ECE",
        mark: 92
    }
];

// Print all students
function printAllStudents(studentList) {
    console.log("All Students:");

    for (let student of studentList) {
        let { name, department, mark } = student;
        console.log(`Name: ${name}, Department: ${department}, Mark: ${mark}`);
    }
}

// Print only ECE students
function printECEStudents(studentList) {
    console.log("\nECE Students:");

    for (let student of studentList) {
        let { name, department, mark } = student;

        if (department === "ECE") {
            console.log(`Name: ${name}, Mark: ${mark}`);
        }
    }
}

// Find students who scored above 80
function printStudentsAbove80(studentList) {
    console.log("\nStudents Who Scored Above 80:");

    for (let student of studentList) {
        let { name, mark } = student;

        if (mark > 80) {
            console.log(`${name}: ${mark}`);
        }
    }
}

// Calculate total marks
function calculateTotalMarks(studentList) {
    let total = 0;

    for (let student of studentList) {
        let { mark } = student;
        total = total + mark;
    }

    return total;
}

// Calculate average marks
function calculateAverage(studentList) {
    if (studentList.length === 0) {
        return 0;
    }

    let total = calculateTotalMarks(studentList);
    return total / studentList.length;
}

// Find the highest mark
function findHighestMark(studentList) {
    if (studentList.length === 0) {
        return 0;
    }

    let highest = studentList[0].mark;

    for (let student of studentList) {
        let { mark } = student;

        if (mark > highest) {
            highest = mark;
        }
    }

    return highest;
}

// Find the lowest mark
function findLowestMark(studentList) {
    if (studentList.length === 0) {
        return 0;
    }

    let lowest = studentList[0].mark;

    for (let student of studentList) {
        let { mark } = student;

        if (mark < lowest) {
            lowest = mark;
        }
    }

    return lowest;
}
function runStudentManagementProgram(studentList) {
    printAllStudents(studentList);
    printECEStudents(studentList);
    printStudentsAbove80(studentList);

    console.log("\nStudent Mark Summary:");
    console.log(`Total Marks: ${calculateTotalMarks(studentList)}`);
    console.log(`Average Mark: ${calculateAverage(studentList).toFixed(2)}`);
    console.log(`Highest Mark: ${findHighestMark(studentList)}`);
    console.log(`Lowest Mark: ${findLowestMark(studentList)}`);
}

runStudentManagementProgram(students);
