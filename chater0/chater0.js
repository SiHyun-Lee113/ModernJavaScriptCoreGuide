// js는 동적언어 이다.
var userId;

userId = 12;
console.log(typeof userId);

userId = 'user1';
console.log(typeof userId);

// Object : 여러 속성의 모음
const car = {
    wheels: 4,
    color: "red",
    drive: function() {
        console.log("wroom wroom");
    }
};

console.log(Object.keys(car)[0]);
console.log(typeof Object.keys(car)[0]);
car.drive();

//const newCar = new Object();
const newCar = {};
newCar.color = 'red';
console.log(newCar);


const car3 = {
    wheels: 4,
    color: "red",
};

console.log(car3.wheels);
console.log(car3['color']);
