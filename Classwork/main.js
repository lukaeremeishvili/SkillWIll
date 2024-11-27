// login
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
    });
});

function createElement(tag, classes = [], content = '') {
    const element = document.createElement(tag);
    element.classList.add(...classes);
    element.textContent = content;
    return element;
}

// cards
function createCard(author, title, text, imageSrc) {
    const card = createElement('div', ['card', 'col-12', 'col-md-4', 'mb-4']);
    
    const img = createElement('img', ['card-img-top']);
    img.src = imageSrc;
    img.alt = title;
    card.appendChild(img);

    const cardBody = createElement('div', ['card-body']);
    card.appendChild(cardBody);

    const cardTitle = createElement('h5', ['card-title'], title);
    cardBody.appendChild(cardTitle);

    const cardAuthor = createElement('p', ['card-author'], `By: ${author}`);
    cardBody.appendChild(cardAuthor);

    const cardDescription = createElement('p', ['card-text'], text);
    cardBody.appendChild(cardDescription);

    const countdownContainer = createElement('div', ['row', 'w-100']);
    cardBody.appendChild(countdownContainer);

    const countdown = createElement('div', ['col-6', 'card-countdown']);
    countdownContainer.appendChild(countdown);

    const seeMoreBtnContainer = createElement('div', ['col-6']);
    countdownContainer.appendChild(seeMoreBtnContainer);

    // timer
    let timeRemaining = 15 + Math.floor(Math.random() * 20); 
    countdown.textContent = `Time remaining: ${timeRemaining}s`;

    const countdownInterval = setInterval(() => {
        timeRemaining--;
        countdown.textContent = `Time remaining: ${timeRemaining}s`;

        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            countdown.textContent = 'This card has timed out';
        }
    }, 1000);

    const seeMoreBtn = createElement('button', ['btn', 'btn-link']);
    seeMoreBtn.textContent = 'See more';
    seeMoreBtn.style.color = 'white'; 
    seeMoreBtn.style.textDecoration = 'none'; 
    seeMoreBtnContainer.appendChild(seeMoreBtn);

    seeMoreBtnContainer.style.display = 'flex';
    seeMoreBtnContainer.style.justifyContent = 'flex-end';

    return card;
}

function displayCards() {
    const latestNewsSection = document.getElementById('latestNewsCards');

    const cards = [
        { 
            author: 'Sarah Hogward', 
            title: 'Space tourism takes giant leap forward', 
            text: 'Commercial space travel inches closer to reality as industry leaders announce successful test flights and expedited timelines for space tourism ventures. With innovative spacecraft designs and robust...', 
            imageSrc: 'Images/Card.png' 
},
        { 
            author: 'Sarah Hogward', 
            title: 'Space tourism takes giant leap forward', 
            text: 'Commercial space travel inches closer to reality as industry leaders announce successful test flights and expedited timelines for space tourism ventures. With innovative spacecraft designs and robust...', 
            imageSrc: 'Images/Card.png' 
},
        { 
            author: 'Sarah Hogward', 
            title: 'Space tourism takes giant leap forward', 
            text: 'Commercial space travel inches closer to reality as industry leaders announce successful test flights and expedited timelines for space tourism ventures. With innovative spacecraft designs and robust...', 
            imageSrc: 'Images/Card.png' 
},
    ];

    cards.forEach(data => {
        const card = createCard(data.author, data.title, data.text, data.imageSrc);
        latestNewsSection.appendChild(card);
    });
}

displayCards();
