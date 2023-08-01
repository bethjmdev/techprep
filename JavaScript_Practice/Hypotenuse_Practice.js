let a;
let b;
let c;

a = window.prompt("enter side A");
a = Number(a);

b = window.prompt("enter side B");
b = Number(b);

c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);

console.log("Side C:", c);
