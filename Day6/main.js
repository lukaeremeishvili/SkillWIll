// Homework #1
 function toggle(){
    const modal = document.getElementById('modal');
    modal.classList.toggle('hidden')
 }

// Homework #2
const btn = document.getElementById('button');

function bgColor(){
    const color = document.getElementById('color').value.toLowerCase();
    const validColors = ['red', 'blue', 'green', 'black', 'white'];

    if(validColors.includes(color)){
        document.body.style.backgroundColor = color;
    } else{
        alert('Invalid Color, Enter one of the following: red, blue, green, black, white')
    }
}

btn.addEventListener('click', bgColor)
// Homework #3

let calculate = document.getElementById('calculate');
let Result =  document.getElementById('average');

calculate.addEventListener('click', CalculateAverage);

function CalculateAverage(){
    const numberInput = document.getElementById('numberInput').value;
    const numbersArray = numberInput.split(':').map(Number);

    if (numbersArray.length === 0){
        Result.textContent = 'Please enter numbers';
        return;
    }

    const sum = numbersArray.reduce((total, num) => total + num, 0);
    const average = sum / numbersArray.length;

    Result.textContent = `Average: ${average}`;
}