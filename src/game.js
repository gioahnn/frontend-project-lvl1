import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcom to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  return '';
};
