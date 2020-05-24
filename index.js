const STORE = {
    questionsAnswered: 0,
    responses: []
}

function begin() {
    //listener for start quiz button press
    $('#start').on("click", function(e){
        //stop default GETTING A NOT DEFINED ERROR
        e.preventDefault();
        console.log("ignition");
        render(1);
        
    });
}

function home() {
    return `
        <div class="js-quiz-start">
            <h2>Welcome Explorer:</h2>
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
        </div>
    `
}

function render(textQuestion) {
    let question;
    if (textQuestion  === 0) {
        question = home()
    } else {
        question = pullQuestion(0);
    }
    $('.app').append(question)
    console.log("rendering")
    begin()
}

function pullQuestion(questionCount) {
    return 
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
                    Mission Completion: "test"% <br>
                    "test"
                </p>
            </div>`
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
    render(0);
}




$(run); // Test save