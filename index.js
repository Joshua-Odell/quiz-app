

function begin() {
    //listener for start quiz button press
    $('#start').on("click", function(e){
        //stop default GETTING A NOT DEFINED ERROR
        e.preventDefault();
         //reset percentage to zero
        const result=0;
        console.log(result)
        //run pullQues
        pullQuestion();
        console.log("ignition")
    });
   
}

function pullQuestion() {
    //fill in a form with information from list 
    //create a submit button
    let questionCount = 2
    const currentQuestion = $(
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
                    <input type="submit" id="nextQuestion" value="Next Question">

                </form>
                <p> 
                    Mission Completion: ${percentage} <br>
                    ${quotes[0].quote}
                </p>
            </div>`
    );
    //return and display %
    //
    $("main").html(currentQuestion);
    //check remaining questions if none call display results function
    questionCheck();
    console.log("Question Generated")
}

function questionCheck() {
    //listen for form submit button
    $(document).on(click, #nextQuestion, function(e){ 
        console.log("next question")
    });
    //check if awnser was correct
    //update percentage
    //call pullQuestion
}

function percentageQuote() {
    //based on percentage return a quote
}

function startOver() {
    //listen for the start over button
    //reset the percentage count to zero
    //call the begin function 
}

$(begin);