const quizForm = document.getElementById('quiz');
const resultForm = document.getElementById('result');
const submitButton = document.getElementById('submit');

//

const myQuestions = [
    {
        question: "Who invented JavaScript?",
        answers: {
            a: "Steve Jobs",
            b: "Brendan Eich",
            c: "David Bowie"
        },
        correctAnswer: "b"
    },
    {
        question: "When JS was created ?",
        answers: {
            a: "1996",
            b: "1990",
            c: "2001"
        },
        correctAnswer: "a"
    },
    {
        question: "Are Java and JavaScript same?",
        answers: {
            a: "Yes",
            b: "Almost",
            c: "No",
        },
        correctAnswer: "c"
    }
];

//
const correctAnswers = myQuestions.map(item =>  item.correctAnswer);
//

const buildQuiz = () => {
    //change html to js
}

//

export const showResults = () => {
    //check quantity of correct answers
}


//
buildQuiz();
submitButton.addEventListener('click', showResults);