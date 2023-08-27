// Create an object named student with properties name, age, and grades. Add a method calculateAverage that calculates the average of the grades.


const student = {
    name: "Dani",
    age: 19,
    grades: [85, 92, 78, 90, 88],

    calculateAverage: function() {
        const total = this.grades.reduce((accumulator, currentGrade) => accumulator + currentGrade, 0);
        const average = total / this.grades.length;
        return average;
    }
};

const averageGrade = student.calculateAverage();
console.log(`Student ${student.name} has an average grade of ${averageGrade}`);
