// Homework #1
function Equality(a, b){
    if(a == b){
        return "ტოლია"
    }else{
        return "არ არის ტოლი"
    }
}

const EqualityResults = [];

EqualityResults.push(Equality(5,5));
EqualityResults.push(Equality(5,3));
EqualityResults.push(Equality(5,"5"));
EqualityResults.push(Equality("hi", "hi"));

console.log("=== 1st Homework ===");
console.log(EqualityResults);

// Homework #2
function Temperature(fahrenheit){
    if (typeof fahrenheit !== 'number') {
        return false;
    }
    const celsius = (fahrenheit - 32) * (5 / 9);
    return celsius;
}

const TemperatureResults = [];

TemperatureResults.push(Temperature(82));
TemperatureResults.push(Temperature(200));
TemperatureResults.push(Temperature("102"));
TemperatureResults.push(Temperature("hello"));
TemperatureResults.push(Temperature(138));

console.log("=== 2nd Homework ===");
console.log(TemperatureResults);

// Homework #3

function calculate(a, b, operation) {
    
    if (typeof a !== 'number' || typeof b !== 'number') {
        return false;
    }
    if (operation === '+') {
        return a + b;
    } else if (operation === '-') {
        return a - b;
    } else if (operation === '*') {
        return a * b;
    } else if (operation === '/') {
       
        if (b === 0) {
            return false; 
        }
        return a / b;
    } else {
        return false; 
    }
}
const CalculateResults = [];
CalculateResults.push(calculate(7, 2, '+')); 
CalculateResults.push(calculate(7, 2, '-')); 
CalculateResults.push(calculate(7, 2, '*')); 
CalculateResults.push(calculate(7, 2, '/'));  
CalculateResults.push(calculate(7, 2, '/'));  
CalculateResults.push(calculate("7", 2, '+'));
CalculateResults.push(calculate(7, 2, '%'));  

console.log("=== 3rd Homework ===");
console.log(CalculateResults);