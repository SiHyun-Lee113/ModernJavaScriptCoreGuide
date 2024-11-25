
// 객체의 복사
let car = {
    color: 'red',
};

let secondCar = car;

car.wheels = 4;
console.log(car);
console.log(secondCar);

// Object.assign()
const car1 = {
    color: 'red',
};

const car2 = Object.assign({}, car);

car.wheels = 4;

console.log(car1);
console.log(car2);
