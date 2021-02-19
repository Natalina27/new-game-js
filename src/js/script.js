let num = '0';
let score;
const question1 = {
    question: 'When JS was created and Hwo created it?  ',
    answer1: '',
    answer2: '',
    correctAnswer: 'JS was created in 1995 by Brendan Eich'
};
const question2 = {
    question: 'What is JavaScript?',
    answer1: '',
    answer2: '',
    correctAnswer: 'JavaScript is a client-side as well as server side scripting language that can be inserted into HTML pages and is understood by web browsers. JavaScript is also an Object based Programming language.'
};
const question3 = {
    question: 'Are Java and JavaScript same?',
    answer1: '',
    answer2: '',
    correctAnswer: 'No, Java and JavaScript are the two different languages. Java is a robust, secured and object-oriented programming language whereas JavaScript is a client side scripting language with some limitations.'
};
const question4 = {
    question: 'What is ‘this’ keyword in JavaScript?',
    answer1: '',
    answer2: '',
    correctAnswer: '‘This’ keyword refers to the object from where it was called.'
};

const arrayOfQuestions = [question1, question2, question3, question4];

// console all correct answers
arrayOfQuestions.forEach(item => console.log(`Correct answer for:  ${item.question}: `, item.correctAnswer));

//array of correct answers
const correctAnswers = [];
for(let i of arrayOfQuestions){
    correctAnswers.push(i.correctAnswer);
}
console.log('correctAnswers', correctAnswers);

//function than check if answer is correct
const checkAnswer = ( correctAnswers, answer) => {
    return correctAnswers.includes(answer);
}


let answer = question4.answer1;
let isCorrect = checkAnswer(correctAnswers, answer);
console.log('isCorrect', isCorrect);

answer = question4.correctAnswer;
let isCorrect1 = checkAnswer(correctAnswers, answer);
console.log('isCorrect1', isCorrect1);