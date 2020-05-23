

function begin() {
    //listener for start quiz button press
    $('#start').on("click", function(e){
        //stop default GETTING A NOT DEFINED ERROR
        e.preventDefault();
         //reset percentage to zero
        const result=0;
        console.log(result);
        //run pullQues
        pullQuestion();
        console.log("ignition");
        questionCheck();
    });
   
}

function pullQuestion() {
    //fill in a form with information from list 
    //create a submit button
    let questionCount = 0
    const currentQuestion = $(
        `<div class="generatedQuestion">
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
                    Mission Completion: ${percentage}% <br>
                    ${quotes[0].quote}
                </p>
            </div>`
    );
    let currentQues = list[questionCount];
    console.log(currentQues);
    questionCount ++;
    console.log(questionCount)
    //return and display %
    //
    $("main").html(currentQuestion);
    //check remaining questions if none call display results function
    questionCheck();
    console.log("Question Generated");
}

function questionCheck() {
    //listen for form submit button
    //this event listener is not functional
    $(document).on('click', '#nextQuestion', function(e){ 
        e.preventDefault;
        questionCount ++; //There is a scope issue here
        let submittedAwnser = $("input[name=options]:checked").val();
        alert(submittedAwnser);
        if (list[questionCount].awnser === submitedAwnser){
            result ++;
            console.log("result increased");
        };
    });
    //
    //alert("questionCheck run")
    //pullQuestion();
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

function run(){
    begin();
    questionCheck();
}




$(run); // Test save