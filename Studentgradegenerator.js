function getGrade() {
    let marks = prompt("Enter the student's marks (0-100): ");
    marks = parseInt(marks);

    if (marks > 79) {
        console.log('A');
    } else if (marks >= 60 && marks <= 79) {
        console.log('B');
    } else if (marks >= 49 && marks <= 59) {
        console.log('C');
    } else if (marks >= 40 && marks <= 49) {
        console.log('D');
    } else if (marks < 40) {
        console.log('E');
    } else {
        console.log('Invalid marks');
    }
}

getGrade();