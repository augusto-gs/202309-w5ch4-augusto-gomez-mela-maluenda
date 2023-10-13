import CodersArray from "./CodersArray/CodersArray.js";

const ejemplo = new CodersArray(3, 8, 10, 2);

// Console.log(ejemplo.length());

// ejemplo.push();

// console.log(ejemplo);

console.log(ejemplo.filter((number) => number < 5));
console.log(ejemplo.map((number) => number * 5));

console.log(2);
