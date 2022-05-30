/* Creating a function */
let showDiv = function(targetDiv){

    targetDiv
}



let time = 60;

const timer = document.getElementById(`countdown`);

setInterval(updateCountdown, 1000);

function updateCountdown() { 
    
            const minutes = Math.floor(time / 60);
    let seconds = time % 60;
        seconds = seconds < 10 ? `0` + seconds : seconds;
        if (minutes > 0 || seconds >= 0) {
    if (timer) 
        timer.innerHTML = `${minutes}: ${seconds}`;
            time--;
         }
    }


let questionArray = [
    `question q0: What are the collection of instructions that make up a  JavaScript program called? `,
    `question q1: Which of the following is not one of the three primitive data types associated with JavaScript? `,
    `question q2: In JavaScript, null is:`,
    `question q3: Which of the following was a prior name for JavaScript: `
]

  var currentQuestion = 0
const start = document.getElementById(`start`) 
start.addEventListener(`click` , function(e) {
    displayQuestion(currentQuestion)
 console.log(this)
    
});
     
    var answerButtonArray = document.querySelectorAll(`answerButton`)
    console.log(answerButtonArray)
    for (var i = 0 ; i < answerButtonArray.length; i++) {
        answerButtonArray[i].addEventListener(`click` ,handleAnswerClick() )
        

    }



let listOfQuestions = document.getElementsByClassName("question")

function displayQuestion(question) {
    for (i=0; i < listOfQuestions.length; i++){
        if (i == currentQuestion) {
            listOfQuestions[i].style.display = 'block'
        }
        else {
            listOfQuestions[i].style.display = 'none'
        }
    }   
}

    function handleAnswerClick(buttonClicked) {

        console.log(buttonClicked.classList)
        if (!buttonClicked.classList.contains(`correct`)){
            time -= 10

        }
        // Handle end of array if statment
        currentQuestion += 1;
    
        displayQuestion(currentQuestion)


    }



const answerA0 = document.getElementById(`answerA0`)

    answerA0.addEventListener(`click` , function(e)  {


    
            
            answerA0.style.color = `green`;
            answerB0.style.color = `black`;
            answerC0.style.color = `black`;
            answerD0.style.color = `black`;

            
handleAnswerClick(this)
         console.log(this)
     });

const answerB0 = document.getElementById(`answerB0`)

    answerB0.addEventListener(`click` , function(e)  {

            answerA0.style.color = `black`;
            answerB0.style.color = `red`;
            answerC0.style.color = `black`;
            answerD0.style.color = `black`;
            handleAnswerClick(this)
            console.log(this)
    });

const answerC0 = document.getElementById(`answerC0`)
    
    answerC0.addEventListener(`click` , function(e)  {

            answerA0.style.color = `black`;
            answerB0.style.color = `black`;
            answerC0.style.color = `red`;
            answerD0.style.color = `black`;
            handleAnswerClick(this)
        console.log(this)
    });

const answerD0 = document.getElementById(`answerD0`)
    
    answerD0.addEventListener(`click` , function(e)  {

            answerA0.style.color = `black`;
            answerB0.style.color = `black`;
            answerC0.style.color = `black`;
            answerD0.style.color = `red`;
            handleAnswerClick(this)
        console.log(this)
    });

       
    

const answerA1 = document.getElementById(`answerA1`)
answerA1.addEventListener(`click` , function(e)  {
    
            answerA1.style.color = `red`;
            answerB1.style.color = `black`;
            answerC1.style.color = `black`;
            answerD1.style.color = `black`;
            handleAnswerClick(this)
        console.log(this)
     });

const answerB1 = document.getElementById(`answerB1`)
    answerB1.addEventListener(`click` , function(e)  {

            answerA1.style.color = `black`;
            answerB1.style.color = `red`;
            answerC1.style.color = `black`;
            answerD1.style.color = `black`;
            handleAnswerClick(this)
        console.log(this)
    });

const answerC1 = document.getElementById(`answerC1`)
    answerC1.addEventListener(`click` , function(e)  {

            answerA1.style.color = `black`;
            answerB1.style.color = `black`;
            answerC1.style.color = `red`;
            answerD1.style.color = `black`;
            handleAnswerClick(this)
        console.log(this)
    });

const answerD1 = document.getElementById(`answerD1`)
    answerD1.addEventListener(`click` , function(e)  {

            answerA1.style.color = `black`;
            answerB1.style.color = `black`;
            answerC1.style.color = `black`;
            answerD1.style.color = `green`;
            handleAnswerClick(this)
        console.log(this)
    });

    

const answerA2 = document.getElementById(`answerA2`)
answerA2.addEventListener(`click` , function(e)  {

            answerA2.style.color = `red`;
            answerB2.style.color = `black`;
            answerC2.style.color = `black`;
            answerD2.style.color = `black`;
            handleAnswerClick(this)
        console.log(this)
     });

const answerB2 = document.getElementById(`answerB2`)
    answerB2.addEventListener(`click` , function(e)  {

            answerA2.style.color = `black`;
            answerB2.style.color = `red`;
            answerC2.style.color = `black`;
            answerD2.style.color = `black`;
            handleAnswerClick(this)
        console.log(this)
    });

const answerC2 = document.getElementById(`answerC2`)
    answerC2.addEventListener(`click` , function(e)  {

            answerA2.style.color = `black`;
            answerB2.style.color = `black`;
            answerC2.style.color = `red`;
            answerD2.style.color = `black`;
handleAnswerClick(this)
        console.log(this)
    });

const answerD2 = document.getElementById(`answerD2`)
    answerD2.addEventListener(`click` , function(e)  {

            answerA2.style.color = `black`;
            answerB2.style.color = `black`;
            answerC2.style.color = `black`;
            answerD2.style.color = `green`;
            handleAnswerClick(this)
        console.log(this)
    });

     

const answerA3 = document.getElementById(`answerA3`)
answerA3.addEventListener(`click` , function(e)  {

            answerA3.style.color = `red`;
            answerB3.style.color = `black`;
            answerC3.style.color = `black`;
            answerD3.style.color = `black`;
            handleAnswerClick(this)
        console.log(this)
     });

const answerB3 = document.getElementById(`answerB3`)
    answerB3.addEventListener(`click` , function(e)  {

            answerA3.style.color = `black`;
            answerB3.style.color = `green`;
            answerC3.style.color = `black`;
            answerD3.style.color = `black`;
            handleAnswerClick(this)
        console.log(this)
     });

const answerC3 = document.getElementById(`answerC3`)
    answerC3.addEventListener(`click` , function(e)  {

            answerA3.style.color = `black`;
            answerB3.style.color = `black`;
            answerC3.style.color = `red`;
            answerD3.style.color = `black`;
            handleAnswerClick(this)
        console.log(this)
    });

const answerD3 = document.getElementById(`answerD3`)
    answerD3.addEventListener(`click` , function(e)  {

            answerA3.style.color = `black`;
            answerB3.style.color = `black`;
            answerC3.style.color = `black`;
            answerD3.style.color = `red`;
            handleAnswerClick(this)
        console.log(this)
    });

     
