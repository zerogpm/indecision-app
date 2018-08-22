// const square = function(x) {
//   return x * x;
// };
//
// const squareArrow = (x) => x * x;
//
// console.log(squareArrow(3));

// const getFirstName = (fullName) => fullName.split(" ")[0];
//
// console.log(getFirstName('Chris su'));

// const add2 = function (a, b) {
//   console.log(this);
//   return a + b;
// };
//
// const add =  (a, b) => {
//   console.log(this);
//   return a + b;
// };
//
// console.log(add2(4,4));

// const user = {
//   name: 'Chris',
//   cities: ['Vancouver', 'New York'],
//   printPlacesLived: function () {
//     console.log(this.cities);
//     console.log(this);
//     this.cities.forEach((city) => {
//       console.log(this.name + city);
//     });
//   }
// };

const user = {
  name: 'Chris',
  cities: ['Vancouver', 'New York'],
  printPlacesLived() {
    console.log(this.cities);
    console.log(this);
    return this.cities.map((city) => this.name + ' has live in ' + city);
    // return this.cities.forEach((city) => {
    //   console.log(city);
    // });
  }
};

console.log(user.printPlacesLived());


const multiplier = {
  number: [2, 3, 4, 5],
  multiplyBy: 2,
  multiple() {
    return this.number.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiple());