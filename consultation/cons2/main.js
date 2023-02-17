// const foo = (age, name, cb) => {
//   console.log('foo started!')
//   if (age > 20) {
//     return cb('Старий ти вже ' + name);
//   }
//     cb('Welcome to platform ' + name)
// }
//
// foo(20, 'maksym', (text) => console.error(text));

// const users = [
//     {name: 'Tom', age: 12, status: false},
//     {name: 'Maksym', age: 22, status: false},
//     {name: 'Tamara', age: 42, status: false},
//     {name: 'Anna', age: 34, status: false},
// ];
// console.log(users.map((user, index) => {
//   if (user.age > 23) {
//     user.status = true;
//   }
//   user.id = index + 1;
//   delete user.age
//   return user;
// }));

// const users = [
//   {name: 'Tom', age: 12, status: false},
//   {name: 'Maksym', age: 22, status: false},
//   {name: 'Tamara', age: 42, status: false},
//   {name: 'Anna', age: 34, status: false},
// ];
// console.log(users.map((user, index) => {
//   if (user.age > 23) {
//     user.status = true;
//   }
//   return user;
// }))
// console.log(users.sort((a, b) => a.age > b.age));

// function splitString(str) {
//   if (str.length % 2 !== 0) {
//     str += '_';
//   }
//   let result = [];
//   for (let i = 1; i < str.length; i += 2) {
//     result.push(str[i - 1] + str[i]);
//   }
//   return result;
// }
// console.log(splitString('qweQWEasdQWEw'));

// - створити функцію  яка приймає два масиви та складає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

const foo = (arr1, arr2) => {
  let iterArr = arr1;
  let someArr = arr2;
  if (arr1.length < arr2.length) {
    iterArr = arr2;
    someArr = arr1;
  }

  return iterArr.map((value, index) => {
    if (someArr[index]) {
      return someArr[index] + value
    }
    return value
  });
}
console.log(foo([1, 2, 3], [9, 8, 44, 5]));
