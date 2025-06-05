console.log("JAI SHREE RAM");

// if-else statement 
let age = 10
if (age>=18) {
    console.log(
        "you are eligiblefor vote"
    );
    
}
else {
    console.log(
        "you are not eligiblefor vote"
    );
}


//nested statement 
const age1 = 32
if (age1 > 17) {
    if (age1 > 30) {
        console.log("age is greater than the 30 and u are eligible fro vote");
        
    }
} else {
    console.log(" your age is less than 17");
    
}


// multiple if else 

marks = 75
if (marks < 33) {
    console.log("fail");
    
} else if (marks > 33 || marks <50 ) {
    console.log("d");

} else if (marks > 50 || marks <70 ){
    console.log("C");
    
} else if (marks > 70 || marks <85 ){
    console.log("B");
    
} else if (marks > 85 || marks <100 ){
    console.log("A");
    
}
 else {
    console.log(" enter correct value");
    
}

// Switch statement 

let marks1 = 80
switch (marks1) {
    case 33:
        console.log("fail");
        
        break;
    case 80:
        console.log("pass");
        break;


}

const day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week.");
        break;
    case "Friday":
        console.log("End of the workweek.");
        break;
    default:
        console.log("It's a regular day.");
}