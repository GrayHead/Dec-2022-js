// const user = { name: "Anna", age: 25, gender: 'female' }

// if (user.age > 20) {
//   console.log('Ти старий тіп!');
// } else {
//   console.log('Ти молодий тіп!');
// }

// user.age > 20
//   ? console.log('Ти старий тіп!')
//   : console.log('Ти молодий тіп!')

// const foo = (xxx) => {
//   if (xxx.age > 20) {
//     return 'Ти старий тіп!';
//   } else {
//     return 'Ти молодий тіп!';
//   }
// }
// console.log(foo(user));

// const foo = (xxx) => {
//   return xxx.age > 20
//     ? xxx.gender === 'female'
//       ? 'Ти стара тіпиня!'
//       : 'Ти молода тіпиня!'
//     : 'Ти молодий тіп!';
// }
// console.log(foo(user));

// let book3 = {
//   title: "Angel Empire",
//   pageCount: 340,
//   genre: "detective",
//   authors: [
//     {
//       name: "Bernar Verber",
//       age: 60
//     },
//     {
//       name: "Amanda Waller",
//       age: 60
//     }
//   ]
// }

// class Book {
//   constructor(title, pageCount, genre, ...authors) {
//     this.title = title;
//     this.pageCount = pageCount;
//     this.genre = genre;
//     this.authors = authors;
//   }
// }
//
// class Author {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
//
// const book1 = new Book(
//     "Angel Empire",
//     345,
//     'detective',
//     new Author("Bernar Verber", 60),
//     new Author("Amanda Verber", 60),
//     new Author("Max Verber", 60),
//     new Author("Anna Verber", 60),
//     new Author("Tip Verber", 55),
// );

// try {
//   console.log(book1.authors[5].age)
// } catch (e) {
//   console.log(e.message)
// }

// This.drive=function (){}…

// Drive = function (){}



class TagObj {
  constructor(name, actionDescription, ...atr) {
    this.titleOfTag = name;
    this.action = actionDescription;
    this.attrs = TagObj.makeAttributes(atr)
  }
  static makeAttributes(arr) {
    let attr = [];
    for (let i = 0; i < arr.length; i += 2) {
      attr.push({titleOfAttr: arr[i], actionOfAttrarr: arr[i + 1]});
    }
    return attr;
  }
}
