// console.log('This is working');
// const myNumber = 10;
// const myStrNumber = '10';
// const MyBoolean = true;
// const a = 3;
// const b = 5;

// if(a + b === 8){
//     console.log(true);
// }else{
//     console.log(false);
// }

// function calculate(){
//     return 'Giga'
// }

// const MyName = calculate();

// console.log(MyName);

// function calculate(name){
//     return name
// }

// console.log(calculate('Giorgi'));

// function calculate(num1, num2) {
//     return num1 + num2
// }

// console.log(calculate(110,90));

// function calculate(num1, num2) {
//     if(typeof num1 === 'string'){
//         return false
//     }
//     if(typeof num2 === 'string'){
//         return false
//     }

//     return num1 + num2
// }
// console.log(calculate(110,90));
// console.log(calculate('Giga'));
// console.log(calculate('110',90));
// const user = {
//     name: 'James',
//     lastName: 'Bond',
//     userName: '007',
//     move: function(){
//         console.log('James Bond in action');
//     }
// };

// console.log(user.name, user.lastName, user.userName,);
// user.move();

// let A = 30; 
// let B = A;
// A = 45; 
// console.log(A, B);



// const A = {
//     name: 'James',
//     lastName: 'Bond',
//     userName: '007'
// };

// const B = A;

// A.name = 'Giga';

// console.log(A);
// console.log(B);


// const arr = ['James', 'Temo', 'Giga', 'Giorgi'];
// const A = {
//     name: 'James',
//     lastName: 'Bond',
//     userName: '007',
// };

// console.log(arr.length);
// console.log(arr[0]);

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i] + ' ' + 'is moving');
    
// }

// for(const name of arr){
//     console.log(name);
    
// }

// for(const f in A){
//     console.log(A[f]);
    
// }

// for(const i in arr){
//     console.log(i);
    
// }

// function randomNumber(){
//     return parseInt(Math.random() * 10) + 1
// }

// let result = randomNumber();


// while(result !== 9){
//     result = randomNumber();
//     console.log(result);
    
// };
// do{
//     result = randomNumber();
//     console.log(result);
    
// }while(result !== 9);


// const arr = ['James', 'Temo', 'Giga', 'Giorgi'];

// const resForEach = arr.forEach(function(element, index){
//     return index + ' ' + 'is equal to' + element;
    
// });

// const resMap = arr.map(function(element, index){
//     return index + ' ' + 'is equal to' + element;
    
// });

// console.log(arr);
// console.log(resMap);



// const array = [1, 5, 7, 2, 5, 7, 1, 9]
// const resFilter = array.filter(function(element, index){
//     return element >= 5
// });

// const resFind = array.find(function(el){
//     return el > 4
// });

// console.log(array);
// console.log(resFind);


// const user = {
//     firstName: 'James',
//     lastName: 'Bond',
//     nickName: '007',
//     age: 40
// }

// const {firstName, lastName, nickName, age} = user

// console.log(firstName, lastName, nickName, age);

// const users = ['James', 'Giga', 'Tornike','Giorgi'];

// const [name1, name2] = users;

// console.log(name1, name2);

// const firstName = 'Temo';

// const user = {
//     firstName: 'James',
//     lastName: 'Bond',
//     profile: {
//     nickName: '007',
//     age: 40,
//     address: {
//         street: 'tamarashvili13'
//     }
//     }
// }

// const {firstName:myFirstName, lastName, profile: {nickName, age, address: {street} } } = user

// // console.log(myFirstName);

// function myProfile(user){
//     return 'address' + ' ' + user.profile.address.street
// }

// console.log(myProfile(user));


// function profile(username){
//     return 'hello' + ' ' + username
// }

// // string literals

// const newProfile = (username) => {
//     return `hello ${username}`
// }

// console.log(newProfile('James'));


// const user = {
//         firstName: 'James',
//         lastName: 'Bond',
//         sayHello: function(){
//             console.log(`${this.firstName} ${this.lastName}`);
            
//         }
// }

// user.sayHello()
// const user = {
//     firstName: 'James',
//     lastName: 'Bond',
//     sayHello: () => {
//         console.log(this);
        
//     }
// }

// user.sayHello()

// const {address: {city} = {} } = user

// console.log(city);

// const user = {
//     firstName: 'James',
//     lastName: 'Bond',
//     profile: {
//         age: 40,
//         nickname: '007'
//     },
//     targets: ['target1', 'target2']
// }


// const user2 = {
//     ...user,
//     profile: {
//         ...user.profile
//     },
//     targets: [...user.targets]
// }

// user.profile.age = 45

// console.log(user.profile.age);
// console.log(user2.profile.age);

// function calculateSum(...args){
//     let sum = 0

//     for(const num of args){
//         sum += num
//     }
//     return sum
// }

// console.log(calculateSum(3,5,10));


// const calculatePercentage = (numbers) =>{
//     let sum = 0 
//     for(const num of numbers){
//         sum += num
//         // sum = sum + num
//     }

//     return numbers.map((el) => ((el / sum) *100).toFixed(2));
// }
// console.log(calculatePercentage(0.2 + 0.1));

// const names = ["James", "Temo", "Giga"];

// names.pop()
// names.push("Nona")
// names.shift()
// names.unshift("Tamuna");

// const newArray = names.slice(1)

// console.log(names);
// console.log(newArray);

// const combineArrays = ([start, end], arr2) => {
//     const result = []
//     result.push(arr1[0])
//     for(const num of arr2){
//         result.push(num)
//     }
//     result.push(arr1[1])
//     return result

//     return [start, ...arr2, end]
// }

// console.log(combineArrays([1, 9], [2, 3, 4, 5, 6, 7, 8]));



// const capitalWords = (words) => {
//     // const result = []
//     // for(const word of words){
//     //     const splitArr = word.split('_') // ["agent", "james", "bond"] 
//     //     const capitalArr = []
//     //     for(const w of splitArr){
//     //         const upper = w[0].toUpperCase() + w.slice(1)
//     //         capitalArr.push(upper)
//     //     }

//     //     result.push(capitalArr.join(" "))
//     // }
//     // return result

//     return words
//     .map((word) => word.split('_')
//     .map((w) =>w[0].toUpperCase() + w.slice(1))
//     .join(" ")
// )
// }

// console.log(capitalWords(["hello_world", "agent_james_bond", "world_cup_sports_association"]));

// const person = {
//     name: 'James',
//     address: {
//         tbilisi: { district: {street: "Tamarashvili"}}
//     },
//     friends:[
//         {closeFriend: {name: "Giga"}},
//         {closeFriend: {name: "Temo"}}
//     ]
// }


// const deepCopy = (obj) => {
//     const result = {}

//     for(const fn in obj){
//         if(typeof obj[fn] === 'object'){

//             if(Array.isArray(obj[fn])){
//                 // Array
//                 result[fn] = obj[fn].map((el) => deepCopy(el))
//             }else{
//                 // Object
//                 result[fn] = deepCopy(obj[fn])
//             }

//         }else{
//             // Primitive
//             result[fn] = obj[fn]
//         }
//     }

//     return result
// }

// const person2 = deepCopy(person)
// person2.name = 'Jango';
// person2.address.tbilisi.district.street = 'Marjanishvili';
// person2.friends[0].closeFriend.name = "Nino";

// console.log(person);
// console.log(person2);


// Callbacks

// setTimeout(() => {
//     console.log('started')
    
// }, 3000 )

// function dance(action, callback){
//     console.log(action);
//     callback()
// }
// dance('this is a long dance', () => {
//     console.log('Applaud');
    
// })


// (Promises/Then/Catch)

// const promiseResponse  = new Promise((resolve, reject) => {
//     if(Math.random() > 0.1){
//         resolve('this is true')
//     }else{
//         reject('this is false')
//     }
// })


// promiseResponse
// .then((res) => console.log(res))
// .catch(err => console.log(err))
// .finally(() => console.log('this was tuff')) 



// function makeToys(){
//     return new Promise((resolve, reject) => {
//         if(Math.random() > 0.1){
//             resolve('Undefected')
//         }else{
//             reject('Defected')
//         }
//     })
// }

// function sellToys(status){
//     return new Promise((resolve, reject) => {
//         if(status === 'Undefected'){
//            if(Math.random() > 0.7){
//             resolve('Toy has been sold')
//         }else{
//             reject('Toy was unsuccessful')
//         }
//     }
//     })
// }

// makeToys()
//     .then((status) => sellToys(status))
//     .then((res) => console.log(res))
//     .catch(err => console.log(err))



//  ASYNC / AWAIT

// async function sum() {
//     return 1 + 1
// }


// async function result() {
//     const res = await sum()
//     return res
// }
// console.log(result())

// async function makeToys() {
//     if(Math.random() > 0.1){
//         resolve('Undefected')
//     }else{
//         reject('Defected')
//     }
// }

// async function sellToys(status){
//     if(status === 'Undefected'){
//         if(Math.random() > 0.7){
//             return 'Toy has been sold'
//         } else {
//             return 'Toy was unsuccessful'
//         }
//     }
// }

// async function promisify() {
//     try {
//         const status = await makeToys()
//         const result = await sellToys(status)
//         console.log(result);
//     } catch (error){
//         console.log(error)
//     }
// }

// promisify();

const isNumber = require('is-number');

console.log(isNumber(125));
console.log(isNumber("125"));
console.log(isNumber("false"));
