// Write a for...in loop that iterates over the properties of an object and logs each property name and value.

const person = {
    firstName: "Danish",
    lastName: "Rizwan",
    age: 19,
    email: "danishrizwam78662@gmail.com"
};

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        const value = person[key];
        console.log(`Property: ${key}, Value: ${value}`);
    }
}
