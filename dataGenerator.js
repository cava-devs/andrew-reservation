const fs = require('fs');
const faker = require('faker');

const partySize = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

// const time = [
//   '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM',
//   '10:30 AM', '11:00 AM', '11:30 AM', '12:00PM', '1:00 PM',
//   '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
//   '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM',
//   '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
//   '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM',
// ];

const addDigit = n => (n < 10 ? `0${n}` : `${n}`);
const fakerDate = faker.date.between('2018-06-20', '2018-10-01');
const fakerYear = fakerDate.getFullYear();
const fakerMonth = addDigit(fakerDate.getMonth());
const fakerDay = addDigit(fakerDate.getDate());

const randomDate = `${fakerYear}-${fakerMonth}-${fakerDay}`;
const randomPartySize = partySize[Math.floor(Math.random() * partySize.length)];
const min = 10;
const randomMaxSize = partySize[Math.floor(Math.random() * (partySize.length - min)) + min];

const seedString = `1 | ${randomPartySize} | '${randomDate}' | ${randomMaxSize} | '8:00 PM, 8:30 PM'`;

const writeData = () => {
  fs.writeFile('./fakedata.txt', seedString, (err) => {
    if (err) {
      return console.log(err);
    }
    return console.log('The file was saved!');
  });
};

module.exports = {
  writeData,
};
