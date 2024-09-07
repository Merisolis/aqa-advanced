const users = [
    { name: 'Lesya', email: 'lesya@example.com', age: 30 },
    { name: 'Anna', email: 'anna@example.com', age: 25 },
    { name: 'Oleh', email: 'oleh@example.com', age: 28 }
  ];
  
  for (const { name, email, age } of users) {
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
  }