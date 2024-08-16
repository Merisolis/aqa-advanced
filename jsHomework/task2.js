// Function declaration
function isAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

const result1 = isAdult(25);
const result2 = isAdult(15);

console.log(`Чи є особа з віком 25 дорослою? ${result1}`);
console.log(`Чи є особа з віком 15 дорослою? ${result2}`);
