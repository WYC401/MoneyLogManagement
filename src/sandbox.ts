const character = 'easonfff';

console.log(character);

let names : Array<string> = ["232", "wyc", "eason"];
names.push("Yicheng");
// const inputs = document.querySelectorAll('input');
//
// console.log(inputs);
names.forEach((x) => {
    console.log(x);
});
let sentence1 : string;
let array1 : Array<(string|number)> = new Array<string | number>();
array1.push(1);
array1.push("erw");

let student1:object;
student1 = {
    name: "eason",
    age : 123
};

let course1 : {
    name:string,
    courseNumber: number,
    instructor: string
};


course1 = {name:"CPSC 310", courseNumber:310, instructor:"Me"};
console.log(course1["name"]);
console.log("ddd");


function greet(name :string, country ?: string):void {
    if(typeof country == 'undefined')
        console.log("Hi! "+name );
    else
        console.log("Hi! "+ name + "from " + country);
}
greet("Eason");
let greet2 : Function = (name :string, country ?: string):string => {
    return name;
}
let greet3 : (obj:{name : string, age : number}) => string;