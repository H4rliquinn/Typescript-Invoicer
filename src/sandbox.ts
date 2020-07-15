// let greet:Function;

//Example 1
let greet:(a:string,b:string)=>void;

greet=(name:string,greeting:string):void => {
    console.log(`${name} says ${greeting}`)
}
//Ex 2
let calc:(a:number,b:number,c:string)=>number;

calc=(numOne:number,numTwo:number,action:string):number => {
    if (action==='add'){
        return numOne+numTwo;
    } else{
        return numOne-numTwo
    }
}
//Ex 3
let logDetails:(obj:{name:string,age:number})=>void;

logDetails = (ninja:{name:string,age:number}):number=>{
    console.log(`${ninja.name} is ${ninja.age} years old`);
    return -1;
}