const questions = [
    {
question:"1. Toronto is the largest city in Canada, and the nth largest city in North America. Answer nth:",
a: "2nd",
b: "4th",
c: "3rd",
answer: "b"
},
    {
question:"2. What is the North America's only castle?",
a: "Hearst Castle, California",
b: "Bannerman Castle, New York",
c: "Casa Loma, Toronto",
answer: "c"
},
    {
question:"3. What is the busiest airport in Canada",
a: "Vancouver International Airport",
b: "Toronto Pearson International Airport",
c: "Montreal Pierre Elliott Trudeau International Airport",
answer: "b"
},
    {
question:"4. What is the longest street in Toronto?",
a: "King St",
b: "Yonge St",
c: "Dundas St",
answer: "b"
},
    {
question:"5. What is the largest underground shopping complex in the world?",
a: "PATH",
b: "WALK",
c: "MALL",
answer: "a"
},
    ];

const ansA = document.getElementById("answerA");
const ansB = document.getElementById("answerB");
const ansC = document.getElementById("answerC");
const quiz = document.querySelector(".quiz");
const quizQuestion = document.querySelector(".question");
const submitBtn = document.querySelector(".submitbtn");
const answers = document.querySelectorAll(".answer");


let quizCount = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    
    deselectAnswers();
    const currQuestion = questions[quizCount]

    quizQuestion.textContent = currQuestion.question;
    ansA.textContent = currQuestion.a;
    ansB.textContent = currQuestion.b;
    ansC.textContent = currQuestion.c;
}

function getSelected(){
    let answer = undefined;

    answers.forEach((a) => {
        if (a.checked){
            answer =  a.id;
        }
    });
     return answer;
}

function deselectAnswers(){
    answers.forEach((a) => {
        a.checked = false;
    });
}

submitBtn.addEventListener("click",() =>{

    const answer = getSelected()
    
    if (answer){
        if (answer === questions[quizCount].answer){
            score++
        }
    
    quizCount++

    if(quizCount < questions.length){
        loadQuiz();
    }
    else{
        quiz.innerHTML = `<h2>Answered : ${score} out of ${questions.length} correct!</h2>

        <button onclick="location.reload()">Reload</button>`;
    }
}
});
