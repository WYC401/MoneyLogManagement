"use strict";
const character = 'easonfff';
console.log(character);
let names = ["232", "wyc", "eason"];
names.push("Yicheng");
// const inputs = document.querySelectorAll('input');
//
// console.log(inputs);
names.forEach((x) => {
    console.log(x);
});
let sentence1;
let array1 = new Array();
array1.push(1);
array1.push("erw");
let student1;
student1 = {
    name: "eason",
    age: 123
};
let course1;
course1 = { name: "CPSC 310", courseNumber: 310, instructor: "Me" };
console.log(course1["name"]);
console.log("ddd");
function greet(name, country) {
    if (typeof country == 'undefined')
        console.log("Hi! " + name);
    else
        console.log("Hi! " + name + "from " + country);
}
greet("Eason");
let greet2 = (name, country) => {
    return name;
};
let greet3;
