import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/Payment.js';
// let docOne:HasFormatter;
// let docTwo: HasFormatter;
// docOne=new Invoice('Yoshi','Web Work',250);
// docTwo = new Payment('Mario','Plumbing Work',200);
// let docs:HasFormatter[]=[];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const invOne=new Invoice("Mario","Work on Mario website",250);
// const invTwo=new Invoice("Luigi","Work on Luigi website",300);
// let invoices:Invoice[]=[];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach(inv=>{
//     console.log(inv.client,inv.amount,inv.format());
// })
// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
// console.log(form.children);
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//Listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    // console.log(
    //     type.value,
    //     tofrom.value,
    //     details.value,
    //     amount.valueAsNumber
    // );
});
