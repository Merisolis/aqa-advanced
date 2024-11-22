const number = 5;

console.log(`Таблиця множення для числа ${number} (використання for):`);

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

let i = 1;

console.log(`\Таблиця множення для числа ${number} (використання while):`);

while (i <= 10) {
    console.log(`${number} x ${i} = ${number * i}`);
    i++;
}
