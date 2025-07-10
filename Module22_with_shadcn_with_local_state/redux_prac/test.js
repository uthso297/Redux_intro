const employee = {
    name: 'Uthso',
    address: {
        country: 'BD',
        city: 'Dhaka'
    }
}

const employee2 = {
    ...employee,
    name: 'Sihab',
    address: {
        ...employee.address,
        city: 'Chittagong'
    }
}

console.log(employee);
console.log(employee2);

console.log(employee === employee2);

// normal function
// const add = (a,b)=> a+b;

// curried function
/*
function add(a){
    return function (b){
     return a+b;
    }
}

*/
const add = (a) => (b) => a + b;
console.log(add(5)(6));

const totalPrice = (discount) => (amount) => amount - amount * discount;

const withDiscount = totalPrice(0.3);

console.log(withDiscount(100));
console.log(withDiscount(50));
console.log(withDiscount(90));