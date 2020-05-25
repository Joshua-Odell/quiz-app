const STORE = {
    questionsAnswered: 0,
    responses: []
}

let questionCount = 0;

function begin() {
    openningScreen();
    //listener for start quiz button press
     $('#start').on("click", function(e){
         //stop default GETTING A NOT DEFINED ERROR
         e.preventDefault();
         console.log("ignition");
         pullQuestion();
     });
}

function openningScreen() {
    const openningScreen = $(
            `<div>
                <h2>
                    Welcome Explorer:
                </h2>
                <p>
                    The Rocket is fully fueled and ready to embark.
                    With you at the Helm we have the utmost confidence that you will reach Neptune. <br>
                    Ignition in:<br>
                    3 . . . <br>
                    2 . . . <br>
                    1 . . . <br>
                </p>
                <form>
                    <input type="button" id="start" value="IGNITION">
                </form>
            </div>` 
    )
    $(".app").html(openningScreen);
}


function currentQuestion(questionCount) {
    const currentQuestion =
        `   <div>
                <h2>
                    ${list[questionCount].question}
                </h2>
                <form>
                    <input type="radio" id="option1" name="options" value="option1">
                    <label for="option1">${list[questionCount].o1}</label><br>
                    <input type="radio" id="option2" name="options" value="option2">
                    <label for="option2">${list[questionCount].o2}</label><br>
                    <input type="radio" id="option3" name="options" value="option3">
                    <label for="option3">${list[questionCount].o3}</label><br>
                    <input type="radio" id="option4" name="options" value="option4">
                    <label for="option4">${list[questionCount].o4}</label><br> <!--correct-->
                    <input type="submit" class="nextQuestion" id="nextQuestion" value="Next Question">

                </form>
                <p> 
                    Mission Completion: "Temporary" <br>
                    "Temporary"
                </p>
            </div>`
    ;
    $(".app").html(currentQuestion);
}

function resultsScreen() {
    //This will display the end results of the quiz complete with a try again button that resets the programs and counters
}

function pullQuestion() {
    //fill in a form with information from list 
    //create a submit button
    //return and display %
    currentQuestion(questionCount);
    $('#nextQuestion').on("click", function(e){
        //stop default GETTING A NOT DEFINED ERROR
        e.preventDefault();
        console.log("test");
        questionCheck();
    });
    //check remaining questions if none call display results function
    console.log("Question Generated");
}

function questionCheck() {
    //listen for form submit button
    // if (list[questionCount].awnser === submitedAwnser){
    //     result ++;
    // };
    questionCount ++;
    console.log(questionCount);
    pullQuestion();
    //check if awnser was correct
    //update percentage
    //call pullQuestion
}

function percentageQuote() {
    //based on percentage return a quote
}

function startOver() {
    questionCount = 0;
    //listen for the start over button
    //reset the percentage count to zero
    //call the begin function 
}



// // This is the code used for an example
// function handleSelectOption() {
//     $('body').on("submit",'#js-questions', function(event) {
//       event.preventDefault();
//       let currentQues = STORE.questions[STORE.currentQuestion];
//       let selectedOption = $("input[name=options]:checked").val();
//       if (!selectedOption) {
//         alert("Choose an option");
//         return;
//       } 
//       let id_num = currentQues.options.findIndex(i => i === selectedOption);
//       let id = "#js-r" + ++id_num;
//       $('span').removeClass("right-answer wrong-answer");
//       if(selectedOption === currentQues.answer) {
//         STORE.score++; 
//         $(`${id}`).append(`You got it right<br/>`);
//         $(`${id}`).addClass("right-answer");
//       }
//       else {
//         $(`${id}`).append(`You got it wrong <br/> The answer is "${currentQues.answer}"<br/>`);
//         $(`${id}`).addClass("wrong-answer");
//       }
  
//       STORE.currentQuestion++;
//       $("#js-score").text(`Score: ${STORE.score}/${STORE.questions.length}`);
//       $('#answer').hide();
//       $("input[type=radio]").attr('disabled', true);
//       $('#next-question').show();
//     });
 // }

function run (){
    begin();
}

$(run); // Test save