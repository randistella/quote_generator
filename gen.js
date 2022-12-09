let quotes = [
    'Everything I know I learned from dogs. – Nora Roberts',
    'Dogs lives are too short. Their only fault, really. – Agnes Sligh Turnbull',
    'Dogs are not our whole life, but they make our lives whole. – Roger Caras',
    'The better I get to know men, the more I find myself loving dogs. – Charles De Gaulle',
    'Scratch a dog and you’ll find a permanent job. – Franklin P. Jones',
    'The dog is a gentleman; I hope to go to his heaven not man’s. – Mark Twain',
]

let images = new Array (
    'dog_1.jpeg',
   'dog_2.jpeg',
    'dog_3.jpeg',
    'dog_4.jpg',
    'dog_5.jpg',
    'dog_6.jpeg',
);

function newQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

function newDog() {
    let randomNumber = Math.floor(Math.random() * images.length);
    document.getElementById('dogDisplay').src = images[randomNumber];
}