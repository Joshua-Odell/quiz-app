
let questionCount = 0;
let submittedAnswer = "";
let generatedQuote = "";
let result = 0;
let percentage = 0;


function begin() {
    $(".app").html(openingScreen());
    //listener for start quiz button press
     $('#start').on("click", function(e){
         //stop default GETTING A NOT DEFINED ERROR
         e.preventDefault();
         console.log("ignition");
         pullQuestion();
     });
}

function openingScreen() {
    return $(
            `<div class="flex-container">
                <h2 class="item">
                    Welcome Explorer:
                </h2>
                <p class="item">
                    The Rocket is fully fueled and ready to embark.
                    With you at the Helm we have the utmost confidence that you will reach Neptune. <br>
                    <br>
                    Ignition in:<br>
                    3 . . . <br>
                    2 . . . <br>
                    1 . . . <br>
                </p>
                <form class="item">
                    <input type="button" id="start" value="BLAST OFF">
                </form>               
            </div>` 
    )
    //return openingScreen;
    
}


function currentQuestion(questionCount) {
    return $(
           `<div class="flex-container">
                <h2>
                    ${list[questionCount].question}
                </h2>
                <fieldset>
                    <legend>Multiple Choice</legend>
                    <form>
                        <input type="radio" id="option1" name="options" value="option1">
                        <label for="option1">${list[questionCount].o1}</label><br>
                        <input type="radio" id="option2" name="options" value="option2">
                        <label for="option2">${list[questionCount].o2}</label><br>
                        <input type="radio" id="option3" name="options" value="option3">
                        <label for="option3">${list[questionCount].o3}</label><br>
                        <input type="radio" id="option4" name="options" value="option4">
                        <label for="option4">${list[questionCount].o4}</label><br> <!--correct-->
                        <br>
                        <input type="submit" class="nextQuestion" id="nextQuestion" value="Submit">

                    </form>
                </fieldset>
                <p> 
                    You have correctly answered  ${percentage}% of questions <br>
                    You have completed ${questionCount} of ${list.length}
                </p>
            </div>`
    )   
}

function resultsScreen() {
    //This will display the end results of the quiz complete with a try again button that resets the programs and counters
    return $(
            `<div class="flex-container">
                <h2>
                    Mission Debrief:
                </h2>
                <p>
                    Your Mission Successfully Made it ${percentage}% of the way to Neptune <br>
                    <br>
                    Out of ${list.length} questions you got ${result} correct <br>
                </p>
                <img src="pictures/debrief.jpg" alt="A bunch of people staring at the camera in a conference room">
                <p>
                ${generatedQuote}
                </p>
                <form>
                    <input type="button" id="restart" value="Try Again">
                </form>
                </div>` 
    )
}

function correctScreen(){
    //This screen will give feedback that the user was correct
    return $(
        `<div class="flex-container">
            <h2>
                You are a Competent and knowledgeable commander!
            </h2>
            <div> <img src="pictures/success.jpg" alt="A space ship taking off"></div>
            <form>
                <input type="button" id="submit" value="Next Question">
            </form>
        </div>` 
    )
}

function incorrectScreen(){
    //This screen will give feedback that the user was incorrect and offer the correct choice.
    return $(
        `<div class="flex-container">
            <h2>
                If you are going to be successful you will need to preform better
            </h2>
            <div> <img src="pictures/mistake.jpg" alt="a lego figurine standing next to a small grey lego space ship"> </div>
            <p>
                
                The correct answer is ${correctAnswer}.
            </p>
            <form>
                <input type="button" id="submit" value="Next Question">
            </form>
        </div>` 
    )
}

function pullQuestion() {
    //fill in a form with information from list 
    //create a submit button
    //return and display %
    if (questionCount<list.length){
        $(".app").html(currentQuestion(questionCount));
        $('#nextQuestion').on("click", function(e){
            //stop default GETTING A NOT DEFINED ERROR
            e.preventDefault();
            submittedAnswer = $("input[name=options]:checked").val();
            console.log(submittedAnswer);
            questionCheck();
        });
        //check remaining questions if none call display results function
        console.log("Question Generated");
        //this needs to call the results screen and skip the rest of the pullQuestion function
    }
    else {
        quoteGenerator();
        console.log(generatedQuote);
        $(".app").html(resultsScreen());
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
    if (submittedAnswer === undefined) {
        alert("you must answer this question!");
        
    }
    else {
        if (list[questionCount].answerChoice === submittedAnswer){
            console.log("correct") 
            result ++;
            percentage = result * 20;
            $(".app").html(correctScreen());
            
        }
        else {
            correctAnswer = list[questionCount].answer;
            percentage = result * 20;
            $(".app").html(incorrectScreen());
                
        }
        questionCount ++;
        $('#submit').on("click", function(e){
            pullQuestion();
        });
        
    }
   
    //check if answer was correct
    //update percentage
    //call pullQuestion
}

function startOver() {
    questionCount = 0;
    result = 0;
    percentage = 0;
    begin();
    //listen for the start over button
    //reset the percentage count to zero
    //call the begin function 
}

function quoteGenerator() {
    for (i=0; i<quotes.length; i++){
        if (quotes[i].progress === percentage){
            generatedQuote= quotes[i].quote;
        }
    }
}

function run (){
    begin();
}

$(run); 