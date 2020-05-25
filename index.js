const STORE = {
    questionsAnswered: 0,
    responses: []
}

let questionCount = 0;
let submitedAwnser = "";
let result = 0;


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
           `<div>
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
                    Mission Completion: ${result} <br>
                    "Temporary"
                </p>
            </div>`
    ;
    $(".app").html(currentQuestion);
}

function resultsScreen() {
    //This will display the end results of the quiz complete with a try again button that resets the programs and counters
    const finalScreen = $(
        `<div>
                <h2>
                    Mission Debrief:
                </h2>
                <p>
                    Your Mission Sucessfuly Made it ${result}% of the way to Neptune <br>
                    Insert generated Quote Here <br>
                </p>
                <form>
                    <input type="button" id="restart" value="Try Again">
                </form>
            </div>` 
    )
    $(".app").html(finalScreen);
}

function pullQuestion() {
    //fill in a form with information from list 
    //create a submit button
    //return and display %
    if (questionCount<list.length){
        currentQuestion(questionCount);
        $('#nextQuestion').on("click", function(e){
            //stop default GETTING A NOT DEFINED ERROR
            e.preventDefault();
            submitedAwnser = $("input[name=options]:checked").val();
            console.log(submitedAwnser);
            questionCheck();
        });
        //check remaining questions if none call display results function
        console.log("Question Generated");
        //this needs to call the results screen and skip the rest of the pullquestion function
    }
    else {
        resultsScreen();
        console.log("results");
        $('#restart').on("click", function(e){
            startOver();
        });

    }
    //check remaining questions if none call display results function
    console.log("Question Generated");
}

function questionCheck() {
    //listen for form submit button
    if (list[questionCount].awnser === submitedAwnser){
        console.log("correct") 
        result ++;
        console.log(result);
    };
    questionCount ++;
    console.log(questionCount);
    pullQuestion();
    //check if awnser was correct
    //update percentage
    //call pullQuestion
}

function startOver() {
    questionCount = 0;
    result = 0;
    begin();
    //listen for the start over button
    //reset the percentage count to zero
    //call the begin function 
}


function run (){
    begin();
}

$(run); // Test save