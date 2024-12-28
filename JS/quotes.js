const quotes = [
  {
    quote: 'The only thing we have to fear is fear  itself',
    author: 'Franklin D Roosevelt'
  },
  {
    quote: 'You must be the change you wish to see in the world',
    author: 'Mahatma Gandhi'
  },
  {
    quote:
      'Ask not what your country can do for you; ask what you can do for your country',
    author: 'John F. Kennedy'
  },
  {
    quote: 'To be, or not to be, that is the question.',
    author: 'William Shakespeare '
  },
  {
    quote:
      'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.',
    author: 'Martin Luther King Jr'
  },
  {
    quote:
      'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt'
  },
  {
    quote: 'Do one thing every day that scares you.',
    author: 'Eleanor Roosevelt '
  },
  {
    quote: 'Well done is better than well said.',
    author: 'Benjamin Franklin'
  },
  {
    quote:
      'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
    author: 'Mother Teresa'
  }
]

const quote = document.querySelector('#quote span:first-child')
const author = document.querySelector('#quote span:last-child')

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author
