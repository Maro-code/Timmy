let questions = document.querySelectorAll(".sec");
let right = 0;
let wrong = 0;
let correctDisplay = document.querySelector(".good span");
let incorrectDisplay = document.querySelector(".bad span");
let answers = ["Gideon", "Daniel", "David", "Taylor","Gideon", "Daniel", "David", "Taylor","Gideon", "Daniel"];
let success = document.getElementById("successful");
let incomplete = document.getElementById("Unsuccessful");
success.style.display = "none";
incomplete.style.display = "none";
let score = 0;
questions.forEach((question, index) => {
    let options = question.querySelectorAll("input[type='radio']");
    
    options.forEach(option => {
        option.addEventListener("change", function() {
            disableAllOptions(options);

            let label = option.closest("label");
            if (option.checked) {
                if (option.value === answers[index]) {
                    markAsCorrect(label);
                    score++;
                } else {
                    markAsIncorrect(label);
                    score++;
                }
            }
        });
    });
});
function disableAllOptions(options) {
    options.forEach(opt => {
        opt.disabled = true;
    });
}
function markAsCorrect(label) {
    label.style.backgroundColor = "#35e135";
    label.style.color = "#000000";
    right++;
    correctDisplay.textContent = right;
}
function markAsIncorrect(label) {
    label.style.backgroundColor = "#ff2c2c";
    label.style.color = "#ffffff";
    wrong++;
    incorrectDisplay.textContent = wrong;
}
function opendiv(){
    if(score == 10){
        if(success.style.display === "none"){
            success.style.display = "flex";
            document.querySelector(".scoreNum").innerHTML = correctDisplay.textContent;
        } else {
            success.style.display = "none";
        }
    }else{
        if(incomplete.style.display === "none"){
            incomplete.style.display = "flex";
            document.querySelector(".scoreNum").innerHTML = correctDisplay.textContent;
        } else {
            incomplete.style.display = "none";
        }
    }
}
function dismiss(){
    if(incomplete.style.display === "flex"){
        incomplete.style.display = "none";
    }
    if(success.style.display === "flex"){
        success.style.display = "none";
    }
    
}


    
