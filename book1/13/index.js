import { count, incr } from './demo.js';

console.log(count);

incr();
console.log(count);

incr();
console.log(count);

// Assignment to constant variable.
count = count + 1;