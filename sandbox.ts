//Explicit Types
let characer:string;
let age:number;
let isLoggedIn:boolean;

//Arrays
let ninjas:string[]=[];

//Union Types
let mixed:(string|number)[]=[];

mixed.push(10);
mixed.push('Blah');
console.log(mixed);

let uid:string|number;

//Objects
let ninjaOne:object;

ninjaOne={name:'Yoshi',age:30};
ninjaOne=[];

let ninjaTwo:{
    name:string,
    age: number,
    beltColour: string
};
