let number = process.argv.slice(2);

const timer1 = () => {
  if (isNaN(number)) {
    return console.log(`${number} is not a number, please try again!`);
  }
  if (number < 0) {
    return console.log('Oops! You cant set a timer for the past!');
  }
  if (number === []) {
    return console.log('Please enter a number!');
  }
  for (let time of number) {
  setTimeout(() => {
    process.stdout.write(`Time is up! ${time}! `);
    process.stdout.write('\n');
  },  time * 1000); 
}
};

timer1();