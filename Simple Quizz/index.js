const questions  =  [
  {
    Question: "Which is the Largest animal in the World",
    answers: [
      { text: "shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    Question: "Which is the Smallest country in the World",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "sriLanka", correct: false },
    ],
  },
  {
    Question: "Which is the Largest Desert in the World",
    answers: [
      { text: "Kalhari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antartica", correct: true },
    ],
  },
  {
    Question: "Which is the smallest Contient in the World",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
];

const QuestElement = document.getElementById('questions');
const answerButons = document.getElementById('list-container');
const nextButton = document.getElementById('nxt-btn');

let countIndex = 0;
let score = 0;

function startquiz(){
    countIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}

function showQuestions(){
    reset();
    currentQuestion = questions[countIndex];
    currentNum = countIndex + 1;
    QuestElement.innerHTML = currentNum + " . " + currentQuestion.Question;

    currentQuestion.answers.forEach((answer)=>{
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click',selectNext);
    })
}
function selectNext(e){
    selectbtn = e.target;
    iscorrect = selectbtn.dataset.correct === 'true';
    if(iscorrect){
        selectbtn.classList.add('correct');
        score++;
    }else{
        selectbtn.classList.add('incorrect');
    }
    Array.from(answerButons.children).forEach((button)=>{
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    })
    nextButton.style.display = 'block';
}
nextButton.addEventListener('click',()=>{
    if(countIndex < questions.length){
        handlenextqust();
    }else{
        startquiz();
    }
})
function handlenextqust(){
    countIndex++;
    if(countIndex < questions.length){
        showQuestions();
    }else{
        showscore();
    }
}
function showscore(){
    reset();
    QuestElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = 'block';

}

function reset(){
    nextButton.style.display = "none";
    while(answerButons.firstChild){
        answerButons.removeChild(answerButons.firstChild)
    }
}

startquiz();