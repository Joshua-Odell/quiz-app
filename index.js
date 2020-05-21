const result = 0;

function begin() {
    //listener for start quiz button press
    $(document).on("click", "#start", function(e){
        //stop default GETTING A NOT DEFINED ERROR
        preventDefault();
         //reset percentage to zero
        result=0;
        //run pullQues
        pullQuestion();
        console.log("ignition")
    });
   
}

function pullQuestion() {
    //fill in a form with information from list 
    //create a submit button
    //return and display %
    //check remaining questions if none call display results function
}

function questionCheck() {
    //listen for form submit button
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