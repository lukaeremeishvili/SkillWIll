// Homework #1
function calculate(...numbers){
    if(numbers.length < 3){
        console.log("ფუნქციას ესაჭიროება მინიმუმ 2 ციფრი");
    }
    const sum = numbers[0] + numbers[1];
    let rem = 1;

    for(let i = 2; i < numbers.length; i++){
        rem *= numbers[i]
    }
    return[sum, rem]
}

const result = calculate(2,3,4,5);
console.log(result);

// Homework #2
const user = {
    name: 'James',
    lastname: 'Bond',
    username: '007',
    banks:[
        {address: {city: "Tbilisi"}},
        {address: {city: "Batumi"}},
        {address: {city: "Kutaisi"}},
    ]
};

const city = user.banks[2].address.city;



console.log(city); 

const user2 = {
    ...user, 
    banks:[
        ...user.banks.slice(0, 2),
        {}
    ]
};

const {address: { city:missingCity} = {} } = user2.banks[2];
console.log(missingCity);

// Homework #3

const Clone = input => {
    const result = {}; 
    for (const key in input) { 
        result[key] = typeof input[key] === 'object' && input[key] !== null
            ? { ...Clone(input[key]) }
            : input[key]; 
    }
    
    return result; 
};


const OG = {
    name: 'James',
    lastname: 'Bond',
    username: '007',
    address: { street: "Tamarashvili13" }, 
};

const copyOb = Clone(OG);


console.log('Original:', OG);
console.log('Copy:', copyOb);
