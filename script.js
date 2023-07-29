const quizDB = [
  {
    question: "01: what is the full form of HTML?",
    a: "Hello To My Land",
    b: "Hey Text Markup Language",
    c: "HyperText Makeup Language",
    d: "Hypertext Markup Language",
    ans: "ans4",
  },
  {
    question: "02: what is the full form of CSS?",
    a: "Cascading Style Sheets",
    b: "Cascading Style Sheep",
    c: "Cartoon Style Sheets",
    d: "Cascading Super Sheets",
    ans: "ans1",
  },
  {
    question: "03: what is the full form of HTTP?",
    a: "Hypertext Transfer Product",
    b: "Hypertext Test Protocol",
    c: "Hey Transfer Protocol",
    d: "Hypertext Transfer Protocol",
    ans: "ans4",
  },
  {
    question: "Q4: What is the full form of JS?",
    a: "JavaScript",
    b: "JavaSuper",
    c: "JustScript",
    d: "JordenShoes",
    ans: "ans1",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#Submit");

const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showscore");

let questioncount = 0;
let score = 0;

const loadquestion = () => {
  let questions = quizDB[questioncount].question;
  let options = quizDB[questioncount];

  question.innerHTML = questions;

  option1.innerHTML = options.a;
  option2.innerHTML = options.b;
  option3.innerHTML = options.c;
  option4.innerHTML = options.d;
};

loadquestion();


const getCheckAnswer = () =>{
    let answer;
    answers.forEach((curAnsLem)=>{
        if(curAnsLem.checked){
            answer = curAnsLem.id;
        };
    });
    return answer;
};

const deselectAll = () =>{
    answers.forEach((curAnsLem)=> curAnsLem.checked = false);
}

submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckAnswer();
    if(checkedAnswer == quizDB[questioncount].ans){
        score++;
    };
    questioncount++;
    deselectAll();

    if(questioncount < quizDB.length){
        loadquestion();
    }
    else{
        showScore.innerHTML = `
        <h3>You Scored ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()">PlayAgain</button>
        `;
        showScore.classList.remove('scoreArea');
    }
});