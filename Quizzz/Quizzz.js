let questions = document.querySelectorAll(".sec");
let right = 0;
let wrong = 0;
let correctDisplay = document.querySelector(".good span");
let incorrectDisplay = document.querySelector(".bad span");
let answers = ["Gideon", "Daniel", "David", "Taylor", "Gideon", "Daniel", "David", "Taylor", "Gideon", "Daniel"];
let success = document.getElementById("successful");
let incomplete = document.getElementById("Unsuccessful");
success.style.display = "none";
incomplete.style.display = "none";
let score = 0;
let realans = document.querySelectorAll(".Question span");
const labels = document.querySelectorAll("label");

// Initialize the correct answer display
realans.forEach((ans, index) => {
    ans.innerHTML = "Ans. " + answers[index];
    ans.style.display = "none"; // Hide initially
});

questions.forEach((question, index) => {
    let options = question.querySelectorAll("input[type='radio']");
    
    options.forEach(option => {
        option.addEventListener("change", function() {
            disableAllOptions(options);
            const label = option.closest("label");
            updateBackgroundImages(options);

            // Show the correct answer after selection
            realans[index].style.display = "flex"; // Show the answer for the current question
            
            if (option.checked === true) {
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

function updateBackgroundImages(options) {
    options.forEach(option => {
        const label = option.closest("label");
        if (!option.checked) {
            label.style.backgroundColor = "#595959";
        } else {
            label.style.backgroundColor = "#ffffff";
        }
    });
}

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

function opendiv() {
    if (score == 10) {
        if (success.style.display === "none") {
            success.style.display = "flex";
            document.querySelector(".scoreNum").innerHTML = correctDisplay.textContent;
        } else {
            success.style.display = "none";
        }
    } else {
        if (incomplete.style.display === "none") {
            incomplete.style.display = "flex";
            document.querySelector(".scoreNum").innerHTML = correctDisplay.textContent;
        } else {
            incomplete.style.display = "none";
        }
    }
}

function dismiss() {
    if (incomplete.style.display === "flex") {
        incomplete.style.display = "none";
    }
    if (success.style.display === "flex") {
        success.style.display = "none";
    }
}

function clearRadioOptions() {
    const radioOptions = document.querySelectorAll("input[type='radio']");
    radioOptions.forEach(option => {
        option.checked = false; // Clear the checked state
        option.disabled = false; // Enable the radio button
    });
    labels.forEach(lab => {
        lab.style.backgroundColor = "#ffffff";
        lab.style.color = "#595959";
    });
    // Reset scores and displays
    right = 0;
    wrong = 0;
    score = 0;
    correctDisplay.textContent = right;
    incorrectDisplay.textContent = wrong;

    // Hide answers when cleared
    realans.forEach(ans => {
        ans.style.display = "none"; // Hide all answers
    });
}

document.getElementById("clear").addEventListener("click", clearRadioOptions);
