
// Part 2-0

function dataToArray(){
//Create CSV data
    let data = 
        `name, age, role
        Kaleb Burd, 24, Instructor
        Tariq Hook, 39, Co-Founder
        Harry Potter, 18, Student
        Gollum, 589, Student
        Bill Gates, 65, Student`;
//Split data into rows, separated by a line break        
    let rows = data.split("\n");
//Make an array of each row, each element being a value
    for(let i = 1; i < rows.length; i++){
        rows[i] = rows[i].split(", ")
    }
//print the multi-dimensional array
    console.log(rows);
}


// Part 2-1
function sumAges(){
    
    let data = 
        `name, age, role
        Kaleb Burd, 24, Instructor
        Tariq Hook, 39, Co-Founder
        Harry Potter, 18, Student
        Gollum, 589, Student
        Bill Gates, 65, Student`;
        
    let rows = data.split("\n");

    for(let i = 1; i < rows.length; i++){
        rows[i] = rows[i].split(", ")
    }

    let total = 0;
//Find the sum of all the row's age values
    for(let i = 1; i < rows.length; i++){
        let age = Number(rows[i][1]);
        total += age;
    }

    console.log(total);
}

// Part 2-2
function findAverageAge(){

    let data = 
        `name, age, role
        Kaleb Burd, 24, Instructor
        Tariq Hook, 39, Co-Founder
        Harry Potter, 18, Student
        Gollum, 589, Student
        Bill Gates, 65, Student`;
        
    let rows = data.split("\n");

    for(let i = 1; i < rows.length; i++){
        rows[i] = rows[i].split(", ")
    }

    let total = 0;

    for(let i = 1; i < rows.length; i++){
        let age = Number(rows[i][1]);
        total += age;
    }
//Find average age of the group represented in the CSV data
    let average = total/rows.length-1

    console.log(average);

}

// Part 2-3
function findOldestAge(){

    let data = 
        `name, age, role
        Kaleb Burd, 24, Instructor
        Tariq Hook, 39, Co-Founder
        Harry Potter, 18, Student
        Gollum, 589, Student
        Bill Gates, 65, Student`;
    
    let rows = data.split("\n");

    for(let i = 1; i < rows.length; i++){
        rows[i] = rows[i].split(", ")
    }

    let largest = -1;
//Find the largest age by looping through and comparing it to the previous largest age variable
    for(let i = 1; i < rows.length; i++){
        let age = Number(rows[i][1]);
        if(largest < age){
            largest = age;
        }
    }

    console.log(largest);

}

//Part 2-4
function findOldestPerson(){

    let data = 
        `name, age, role
        Kaleb Burd, 24, Instructor
        Tariq Hook, 39, Co-Founder
        Harry Potter, 18, Student
        Gollum, 589, Student
        Bill Gates, 65, Student`;
    
    let rows = data.split("\n");

    for (let i = 1; i < rows.length; i++) {
        rows[i] = rows[i].split(", ")
    }

    let largest = -1;
    let person;
//Find the largest age, designate the person with that age as the oldest person
    for(let i = 1; i < rows.length; i++){
        let age = Number(rows[i][1]);
        if(largest < age) {
            largest = age;
            person = rows[i][0]
        }
    }

    console.log(person);

}