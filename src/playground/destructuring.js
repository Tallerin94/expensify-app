//
// Object destructuring
//

// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: '92'
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${ firstName } is ${ age }.`);

// const { city, temp: temperature } = person.location;
// if ( city && temperature ) {
//     console.log(`It's ${ city } in ${ temperature }`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(`This book is from ${ publisherName }.`);

//
// Array destructuring
//

// const adress = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania' , '19147'];
// const [, city, state = 'New York'] = adress;
// console.log(`You are in ${ state }.`);

// const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
// const [itemName, , mediumPrice] = item;
// console.log(`A medium ${ itemName } costs ${ mediumPrice }.`);
