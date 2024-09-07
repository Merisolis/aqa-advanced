const person = {
    firstName: 'Lesya',
    lastName: 'Ukrainka',
    age: 30
  };
  
  person.email = 'lesya.ukrainka@example.com';
  
  delete person.age;
  
console.log(person);