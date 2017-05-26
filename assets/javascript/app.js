var intervalID = 0
var time = 30
var correctAnswers = 0;
window.onload = function() {
    intervalID = setInterval(count, 1000);
}

function count() {
    time--;
    ($("#time-remaining")).html(time);
    if (time<=0) {
        clearInterval(intervalID);
    }
}


function grade_quiz() {
    var answerArray = []
    var a1 = $("input[name='question-1-answers']:checked").val();
    var a2 = $("input[name='question-2-answers']:checked").val();
    var a3 = $("input[name='question-3-answers']:checked").val();
    var a4 = $("input[name='question-4-answers']:checked").val();
    var a5 = $("input[name='question-5-answers']:checked").val();
    var a6 = $("input[name='question-6-answers']:checked").val();
    answerArray.push(a1,a2,a3,a4,a5,a6);
    for (var i = 0; i < answerArray.length; i++) {
        if (answerArray[i] == "True") {
            correctAnswers++;
        }
    }
    // if (answers.a1 === "True") {
    //     correctAnswers++;
    // }
    // if (answers.a2 === "True") {
    //     correctAnswers++;
    // }
    // if (answers.a3 === "True") {
    //     correctAnswers++;
    // }
    // if (answers.a4 === "True") {
    //     correctAnswers++;
    // }
    // if (answers.a5 === "True") {
    //     correctAnswers++;
    // }
    // if (answers.a6 === "True") {
    //     correctAnswers++;
    // }

    console.log(answerArray, correctAnswers);
}
    
    
    
        

// for (var i = 0; i < answers.length; i++) {
//         if (answers[i] === "True") {
//             correctAnswers++;
//             console.log(correctAnswers);

