let userName = 'Michelle';
let userQuestion = 'Will I be a famous singer in the future?';
let randomNumber = Math.floor(Math.random()*8);
let eightBall = '';

userName ? console.log(`Hello, ${userName}! This is your question:`) :
console.log('Hello! This is your');
console.log(userQuestion);
console.log('');
console.log('This is the answer of the Magic 8 Ball:');

switch (randomNumber) {
  case 0 :
  eightBall = 'It is certain';
  break;
  case 1 :
  eightBall = 'It is decidedly so';
  break;
  case 2 :
  eightBall = 'Reply hazy try again';
  break;
  case 3 :
  eightBall = 'Cannot predict now';
  break;
  case 4 :
  eightBall = 'Do not count on it';
  break;
  case 5 :
  eightBall = 'My sources say no';
  break;
  case 6 :
  eightBall = 'Outlook not so good';
  break;
  case 7 :
  eightBall = 'Signs point to yes';
  break;
} 

console.log(eightBall);





