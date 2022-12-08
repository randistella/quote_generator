let quotes = [
    'Everything I know I learned from dogs. – Nora Roberts',
    'Dogs do speak, but only to those who know how to listen.– Orhan Pamuk',
    'Dogs lives are too short. Their only fault, really. – Agnes Sligh Turnbull',
    'Dogs are not our whole life, but they make our lives whole. – Roger Caras',
    'The better I get to know men, the more I find myself loving dogs. – Charles De Gaulle',
    'Scratch a dog and you’ll find a permanent job. – Franklin P. Jones',
    'The dog is a gentleman; I hope to go to his heaven not man’s. – Mark Twain',
]

function newQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
