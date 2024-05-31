let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
      country: "USA",
      city: "LA"
  }
};


console.log(passportWithAddress.address.city)

const copyPasspport = JSON.parse(JSON.stringify(passportWithAddress));
copyPasspport.address.city = 'Bobryisk';

console.log(copyPasspport.address.city)