// Homework #1
const people = [
    {name: 'Temo', age: 25}, 
    {name: 'Lasha', age: 21}, 
    {name: 'Ana', age: 28}
];

function youngest(people) {
    let youngestPerson = people[0]; 
  
    for (let i = 1; i < people.length; i++) {
      if (people[i].age < youngestPerson.age) {
        youngestPerson = people[i];
      }
    }
    
    return youngestPerson.name;
  }

  console.log(youngest(people));
// Homework #2
const original = {
    name: 'James',
    surname: 'Bond',
    username: '007',
};

function clone(user){
    const newUser = {};
for (const key in user){
    newUser[key] = user[key];
}
    return newUser;
}
const clonedUser = clone(original);
console.log(clonedUser);

// Homework #3

function Dice(){
    return Math.floor(Math.random() * 6 ) + 1;
}

function game(){
    let Aattempts = 0;
    let Battempts = 0;
    let Aresult;
    let Bresult;
    

    do{
        Aresult = Dice();
        Aattempts++;

        Bresult = Dice();
        Battempts++;


        console.log(`A: ${Aresult}, Attempts: ${Aattempts}`);
        console.log(`B: ${Bresult}, Attempts: ${Battempts}`);
        
    } while(Aresult !== 3 && Bresult !== 3);

    if (Aresult === 3 && Bresult === 3) {
        console.log("Tie");
    } else if (Aresult === 3) {
        console.log(`A wins with ${Aattempts} attempts`);
    } else {
        console.log(`B wins with ${Battempts} attempts`);
    }
}

game();