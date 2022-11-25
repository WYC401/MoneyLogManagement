import {Invoice} from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let record1: HasFormatter;
let record2: HasFormatter;

record1 = new Invoice('yosi', 'web work', 250);
record2 = new Payment('eason', 'TA', 36);

let records:Array<HasFormatter> = new Array();
records.push(record1);
records.push(record2);
records.forEach((r) => {
    console.log(r.format());
});

const invoice1 : Invoice = new Invoice("Eason", "eating", 23);
const form = document.querySelector('.new-item-form') as HTMLFormElement;

const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc: HasFormatter;
    let values : [string, string, number] = [tofrom.value, details.value, amount.valueAsNumber];
    if(type.value === 'invoice') {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
    console.log(tofrom.value);
    console.log(type.value);
    console.log(details.value);
    console.log(amount.value);
});


// //Generics 
// // words after extends is the restriction on the T, in our example, it can be any object type which has name attribute.
// const addUID = <T extends {name: string}>(obj: T) => {
//     let uid = Math.floor(Math.random() * 1000);
//     return {...obj, uid};
// };

// //here the method can infer T from the parameter which is passed
// let student1 = addUID({name: "Eason", age: 23});
// console.log(student1); 


// interface packet<T>{
//     http: string;
//     data: T;


// }

// // there must specify the type 
// const p1: packet<string>= {
//     http: "www.google.com" ,
//     data: "1 : df"
// };


// enum URL {GOOGLE, YOUTUBE};
// const p2:packet<URL> = {
//     http: "www.aboutme.com",
//     data: URL.GOOGLE
// };


// // tuples

// let arr = ["eason", 23, true];

// // you can change the arr[0] with values of either string, number or boolean
// // Then, you can use tuple
// let tup:[string, number, boolean] = ["eason", 23, true];

