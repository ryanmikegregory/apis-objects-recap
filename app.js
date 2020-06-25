// let scottsDog = {
//   name: 'Baxter',
//   age: 3,
//   birthday: '2/11/2017',
// };

// scottsDog.weight = 35;
// scottsDog.age++;

// scottsDog.age++;
// scottsDog['age']++;

// const staff = ['Scott', 'Myron', 'Rachael', 'Jackson'];
// const primeKC = {};

// for (let person of staff) {
//   console.log(person);
//   primeKC[person] = person;
// }

// console.log(primeKC);

// console.log('Is Baxter 4 years old? ', scottsDog.age);

// properties - A name for a variable on an object
// methods - Name for a function that belongs to an object
// key , value

const scottsDogs = [
  {
    name: 'Moxie',
    age: 3,
  },
  {
    name: 'Baxter',
    age: 3,
  },
];

function dogsBirthday() {
  for (let dog of scottsDogs) {
    dog.age++;
    console.log('Happy borthday ' + dog.name + '!');
    if (dog.name === 'Baxter') {
      console.log(`You are mom's favorite dog!`);
    }
  }
}

dogsBirthday();
