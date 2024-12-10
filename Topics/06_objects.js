const animal = {
    species: "dog"
};

for (let key in animal) {
    if (animal.hasOwnProperty(key)) {
        console.log(key); // Only logs properties directly on `animal`
    }
}


const person = {
    name: "Alice",
    age: 30
};

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("toString")); // false (inherited from Object prototype)


const person2 = {
    name: "Alice",
    age: 30
};

for (let key in person) {
    console.log("Key:", key);          // Outputs the property names (keys) "name" and "age"
    console.log("Value:", person[key]); // Outputs the property values "Alice" and 30
}

const person3 = {
    name: "Alice",
    age: 30,
    city: "New York"
};

const { name : personName , age : age2 , Country = "India" } = person;
console.log(personName); // "Alice"
console.log(age2);  // 30
console.log(Country);  // 30
