const questions = [
    {
question: "At a party do you",
a: {answer:"Interact with many, including strangers",type:"extrovert"},
b: {answer:"Interact with a few, known to you",type:"introvert"}
},
    {
question: "Are you more:",
a: "Realistic than speculative",
b: "Speculative than realistic"
},
    {
question: "Is it worse to:",
a: "Have your head in the clouds",
b: "Be in a rut"
},
{
question: "Is it worse to:",
a: "Have your head in the clouds",
b: "Be in a rut"
},
    {
question: "Are you more impressed by:",
a: "Principles",
b: "Emotions"
},
    {
question: "Are more drawn toward the:",
a: "Convincing",
b: "Touching"
},
    {
question: "Do you prefer to work:",
a: "To deadlines",
b: "Just whenever"
},

    {
question: "Do you tend to choose:",
a: "Rather carefully",
b: "Somewhat impulsively"
},

    {
question: "At parties do you:",
a: "Stay late, with increasing energy",
b: "Leave early with decreased energy"
},

    {
question: "Are you more attracted to:",
a: "Sensible people",
b: "Imaginative people"
},

    {
question: "Are you more interested in:",
a: "What is actual",
b: "What is possible"
},

    {
question: "In judging others are you more swayed by:",
a: "Laws than circumstances",
b: "Circumstances than laws"
},

    {
question: "In approaching others is your inclination to be somewhat",
a: "Objective",
b: "Personal"
},

    {
question: "Are you more:",
a: "Punctual",
b: "Leisurely"
},

    {
question: "Does it bother you more having things:",
a: "Incomplete",
b: "Completed"
},

    {
question: "In your social groups do you:",
a: "Keep abreast of other's happenings",
b: "Get behind on the news"
},

    {
question: "In doing ordinary things are you more likely to:",
a: "Do it the usual way",
b: "Do it your own way"
},

    {
question: "Writers should:",
a: "Say what they mean and mean what they say",
b: "Express things more by use of analogy"
},

    {
question: "Which appeals to you more:",
a: "Consistency of thought",
b: "Harmonious human relationships"
},

    {
question: "Are you more comfortable in making:",
a: "Logical judgments",
b: "Value judgments"
},

    {
question: "Do you want things:",
a: "Settled and decided",
b: "Unsettled and undecided"
},
    ]

const ansA = document.getElementById("answerA")
const ansB = document.getElementById("answerB")
const quizQuestion = document.querySelector(".question")
const submitBtn = document.querySelector(".submitbtn")


let count = 0;

loadQuiz();

function loadQuiz(){
    
    const currQuestion = questions[count]

    quizQuestion.textContent = currQuestion.question;
    ansA.textContent = currQuestion.a;
    ansB.textContent = currQuestion.b;
}

function getSelected(){
    const answers = document.querySelectorAll(".answer");

    let answer = undefined;

    answers.forEach(a => {
        if (a.checked){
            answer =  a.id;
        }
    });
    return answer;
}

submitBtn.addEventListener("click",() =>{

    const answer = getSelected()
    
    if(answer){
        if(answer === answer.a){
            extro++
        }
        else{
            intro++
        }
    }
    
    count++

    if(count < questions.length){
        loadQuiz();
    }
    else{
        alert("Thank you. Please review the result!")
        console.log(extro)
        console.log(intro)
    }
})
