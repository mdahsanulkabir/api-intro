//JavaScript Object Notation
//JSON


const user = {id: 11, name:'gorib amir',job:'actor'}
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name : 'Alia Store',
    address : 'Ranvir Road',
    profit: 15000,
    products : ['laptop',  'mobile', 'pepsi'],
    owner : {
        name : 'Alia Vatt',
        profession: 'actor'
    },
    isExpensive: false
};
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);