let passportMarried = {
  name: "Petr",
  surname: "Petrov",
  address: {
      country: "USA",
      city: "Bobryisk"
  }
};

console.log(passportMarried);

const passportMarried2 = JSON.parse(JSON.stringify(passportMarried));
passportMarried2.married = true;
console.log(passportMarried2);