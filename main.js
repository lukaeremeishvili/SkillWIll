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
