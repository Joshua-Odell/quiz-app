

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
    });
   
}

function pullQuestion() {
    //fill in a form with information from list 
    //create a submit button
    const questionCount = 0
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
                    <input type="submit" class="nextQuestion" id="nextQuestion" value="Next Question">

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
    console.log("Question Generated");
}

function questionCheck() {
    //listen for form submit button
    $(document).on('click', '.nextQuestion', function(e){ 
        e.preventDefault;
        questionCount ++;
    });
    if (list[questionCount].awnser === submitedAwnser){
        result ++;
    };
    pullQuestion();
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




// This is the code used for an example
function handleSelectOption() {
    $('body').on("submit",'#js-questions', function(event) {
      event.preventDefault();
      let currentQues = STORE.questions[STORE.currentQuestion];
      let selectedOption = $("input[name=options]:checked").val();
      if (!selectedOption) {
        alert("Choose an option");
        return;
      } 
      let id_num = currentQues.options.findIndex(i => i === selectedOption);
      let id = "#js-r" + ++id_num;
      $('span').removeClass("right-answer wrong-answer");
      if(selectedOption === currentQues.answer) {
        STORE.score++; 
        $(`${id}`).append(`You got it right<br/>`);
        $(`${id}`).addClass("right-answer");
      }
      else {
        $(`${id}`).append(`You got it wrong <br/> The answer is "${currentQues.answer}"<br/>`);
        $(`${id}`).addClass("wrong-answer");
      }
  
      STORE.currentQuestion++;
      $("#js-score").text(`Score: ${STORE.score}/${STORE.questions.length}`);
      $('#answer').hide();
      $("input[type=radio]").attr('disabled', true);
      $('#next-question').show();
    });
  }


$(begin); // Test save