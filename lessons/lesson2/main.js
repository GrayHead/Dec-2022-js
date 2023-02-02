// let names = 'vasya,petya,anna,olga.....';

//              0        1        2      3      4    5          6
//                                                          0   1   2
//                                                               0   1   2

let name1 = 'vasay';
let names = [name1, 'petya', 'anna', 'olya', 123, true, [11, [111, 222, 333], 33]];

// console.log(names);
// console.log(names[0]); // VASYA
// console.log(names[2]); // anna
// let innerArrayOfNumbers = names[6];
// console.log(innerArrayOfNumbers[1]);
// console.log(names[6][1][1]);
//
// console.log(typeof 111);
// console.log(typeof 'asdasd');
// console.log(names[1], names[2],);
//
// console.log(names[0]);
//
// names[3] = 'TOLYA';
// console.log(names);

// names[7] = 'foo';// lenhgth = 8
// names[8] = 'asjdf'
// names[9] = 'quyqwetqwr';
// names[10] = 'quyqwetqwr';


// names[names.length] = 'foo';
// names[names.length] = 'bar';
// names[names.length] = 'foobar';
// console.log(names);
// console.log(names[100500]); // undefined


// console.log(typeof 111);
// console.log(typeof names); // object
// console.log(Array.isArray(names)); // true
//
// let user = {
//     username: 'kokos',
//     age: 23,
//     status: true,
//     skills: ['java', 'js', 'html'],
//     wife: {
//         username: 'anna',
//         age: 21
//     }
//
// };

// console.log(user);
// // console.log(user.username);
// // console.log(user.age);
// // console.log(user.status);
// // console.log(user.skills);
// // console.log(user.skills[2]);
// //
// // console.log(user['username']);
// // console.log(user['age']);
// // console.log(user['status']);
// // console.log(user['skills']);
// // console.log(user['skills'][2]);
//
// console.log(user.wife.username);
// console.log(user.username);
// console.log(user['wife'].username);
// console.log(user['wife']['username']);


/**/
// let skills = [
//     {title: 'java', exp: 3},
//     {title: 'js', exp: 4},
//     {title: 'html', exp: 12}
// ];

// let user = {
//     username: 'kokos',
//     age: 23,
//     status: true,
//     skills: [
//         {title: 'java', exp: 3},
//         {title: 'js', exp: 4},
//         {title: 'html', exp: 12}
//     ],
//     wife: {
//         username: 'anna',
//         age: 21
//     }
//
// };
//
// console.log(user.skills[2].exp);
//
// // user.nickname = 'kamikadze';
// user['nickname'] = 'kamikadze';
// console.log(user);
// user.car = {
//     manufactirer: 'porsche',
//     model: 'cayyene',
//     year: 2014,
//     generation: 2,
//     power: 300
// };
//
// console.log(user);


// let x = 0;
// let y = x;
//
// y = y + 1;
// console.log(x, y); // 0 1
//
// let obj = {
//     foo: 0
// }
//
// let obj2 = obj;
// obj2.foo = 100500;
// console.log(obj2);
//
// console.log(obj);
// console.log(obj === obj2);


// const obj = {
//     name : 'vasya'
// }
//
// obj.age = 123;
//
// const obj2 = obj;
// console.log(obj2);


// let color = 'ared';
//
// if (color === 'black') {
//     console.log('++++');
// } else {
//     console.log('----');
// }

// const answer = confirm('are tou older than 18?');
// console.log(answer);
//
// if (answer) {
//     document.write('<h1>hello and watch your hot movies</h1>');
// } else {
//     document.write('<h1>hello and watch your cartoons</h1>');
// }


let color = 'green';
let israodClear = true;

// if (color === 'green' || israodClear) {
//     console.log('go');
// } else if (color === 'yellow') {
//     console.log('wait')
// } else if (color === 'red') {
//     console.log('stop')
// } else {
//     console.log('????');
// }


// if (color === 'green' || israodClear) {
//     console.log('go');
// }
//
// if (color === 'yellow') {
//     console.log('wait')
// }
//
// if (color === 'red') {
//     console.log('stop')
// } else {
//     console.log('????');
// }


// true && true -> true
// true && false -> false
// false && false -> false
// false && true -> false

// true || true -> true
// true || false -> true
// false || false -> false
// false || true -> true


// console.log(5 < 4 && 100 > 99); // false
// console.log(5 < 4 || 100 > 99); // true

// switch ('foo') {
//
//     case 'foo':
//     case 'bar':
//         console.log('fofofofooofofofofo');
//         console.log('brabrbbrabbarbr');
//         break;
//     default:
//         console.log('asdfadfyerr12371r376');
//
// }


// let x;
// if (false) {
//     x = 100;
// } else {
//     x = 200;
// }
//
// console.log(x);


// let x = !!'ashdfashgd' ? 100 : 200;
// console.log(x);




