// Homework #1
       
const button = document.createElement("button");
button.id = "hideButton";
button.innerText = "Click Me";

const div = document.createElement("div");
div.id = "randomText";
div.innerText = "random text";

document.body.appendChild(button);
document.body.appendChild(div);

button.addEventListener("click", function() {
    div.style.display = "none";
});

// Homework #2

const Card = document.createElement("div");
Card.id = "card";

const Name = document.createElement("h2");
Name.innerText = "Gandalf";

const Link = document.createElement("a");
Link.href = "#";
Link.innerText = "Go to profile";

Card.appendChild(Name);
Card.appendChild(Link);

document.body.appendChild(Card);

// Homework #3

const questions = [
    {
        question: "What is the capital of Georgia?",
        options: ["Tbilisi", "Batumi", "Kutaisi", "Rustavi"],
        answer: 0 
    },
    {
        question: "What is the largest country on Earth?",
        options: ["United States", "Canada", "Russia", "China"],
        answer: 2 
    },
    {
        question: "How fast is the speed of sound?",
        options: ["1235 km/h", "1500 km/h", "343 m/s", "299,792 km/s"],
        answer: 2 
    }
];


let score = 0;


const scoreElement = document.createElement("div");
scoreElement.innerText = `Score: ${score}`;
document.body.appendChild(scoreElement);

function createQuiz() {
    const container = document.createElement("div");

    questions.forEach((q) => {
        const question = document.createElement("div");
        question.style.marginBottom = "20px";
        const text = document.createElement("h3");
        text.innerText = q.question;
        question.appendChild(text);

        q.options.forEach((option, optionIndex) => {
            const button = document.createElement("button");
            button.innerText = option;
            button.style.margin = "5px";

            button.addEventListener("click", function () {
                
                if (optionIndex === q.answer) {
                    button.style.backgroundColor = "green";
                    score++; 
                    scoreElement.innerText = `Score: ${score}`; 
                } else {
                    button.style.backgroundColor = "red";
                    
                    const correctAnswerButton = question.querySelectorAll("button")[q.answer];
                    correctAnswerButton.style.backgroundColor = "green";
                }


                question.querySelectorAll("button").forEach(btn => btn.disabled = true);
            });

            question.appendChild(button);
        });

        container.appendChild(question);
    });

    document.body.appendChild(container);
}

createQuiz();
