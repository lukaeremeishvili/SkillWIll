// Homework #1
const replaceString = (string, valueToReplace, valueToReplaceWith) =>
    string.split(valueToReplace).join(valueToReplaceWith);


console.log(replaceString("When you have eliminated the impossible, whatever remains, however improbable, must be the truth.", 
    "impossible",
    "unlikely"));

// Homework #2
const capitalizeWords = (sentence) => 
    sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

const Sentence = "the world is full of obvious things which nobody by any chance ever observes.";
const capitalizedSentence = capitalizeWords(Sentence);
console.log(capitalizedSentence);


// Homework #3

const usersArray = [
    { name: 'Lasha', age: 30 },
    { name: 'Saba', age: 20 },
    { name: 'Luka', age: 40 },
    { name: 'Dato', age: 50 },
    { name: 'Giorgi', age: 10 },
];

function sortByAge(users){
    return users.slice().sort((a, b) => a.age - b.age)
}

const sortedUsers = sortByAge(usersArray);

console.log(sortedUsers);