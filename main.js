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



const array = [1, 5, 7, 2, 5, 7, 1, 9]
const resFilter = array.filter(function(element, index){
    return element >= 5
});

const resFind = array.find(function(el){
    return el > 4
});

console.log(array);
console.log(resFind);


