const q1 = {
    question: '',
    answer1: '',
    answer2: '',
    correctAnswer: 'c'
};
const q2 = {
    question: '',
    answer1: '',
    answer2: '',
    correctAnswer: 'a'
};
const q3 = {
    question: '',
    answer1: '',
    answer2: '',
    correctAnswer: 'c'
};
const q4 = {
    question: '',
    answer1: '',
    answer2: '',
    correctAnswer: 'b'
};

const array = [q1, q2, q3, q4];

console.log('****************************')
console.log('All correct answers:');
array.forEach(item => console.log('correctAnswer', item.correctAnswer));

console.log('****************************');
console.log('Only correctAnswer === c');
array.forEach(item => (item.correctAnswer === 'c' && console.log('correctAnswer === c: ',item.correctAnswer)));
