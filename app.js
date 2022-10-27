var questions = [
    {
        question: "Html Stands For ______________________",
        options: [
            "Hyper Text Makeup Language",
            "html",
            "Case Cading Style Sheet",
            "Hypertext markup language",
        ],
        correctAns: "Hypertext markup language",
    },
    {
        question: "Css Stands For _______________________",
        options: [
            "Casecading Style Sheet",
            "Java",
            "Ram",
            "Hypertext markup language",
        ],
        correctAns: "Casecading Style Sheet",
    },
    {
        question: "Js Stands For _______________________",
        options: ["Java Style", "Java Script", "Script", "Script Src"],
        correctAns: "Java Script",
    },
    {
        question: "Dom Stands For _______________________",
        options: ["Document Object Model", "html", "Css", "Java"],
        correctAns: "Document Object Model",
    },
    {
        question: "Ram Stands For _______________________",
        options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
        correctAns: "Random Acccess Memory",
    },
    {
        question: "Rom Stands For _______________________",
        options: [
            "Hyper Text Markup Language",
            "html",
            "HTml",
            "Read Only Memory",
        ],
        correctAns: "Read Only Memory",
    },
]

var currentQues = document.getElementById('currentQues')
var totalQues = document.getElementById('totalQues')
var displayQues = document.getElementById('displayQues')
var displayOpt = document.getElementById('displayOpt')
var currentIndex = 0
var marks = 0
var marksDiv = document.getElementById('marksDiv')
var showMarks = document.getElementById('showMarks')
var displayMarks = document.getElementById('displayMarks')
var displayPercent = document.getElementById('displayPercent')
var displayStatus = document.getElementById('displayStatus')


function initRender() {
    currentQues.innerHTML = currentIndex + 1;
    totalQues.innerHTML = questions.length;
    displayQues.innerHTML = questions[currentIndex].question
    displayOpt.innerHTML = ""
    for (var i = 0; i < questions[currentIndex].options.length; i++) {
        displayOpt.innerHTML += `<div class="col-md-6">
        <button onclick="checkResult('${questions[currentIndex].options[i]}', '${questions[currentIndex].correctAns}')" class="btn btn-outline-primary w-100 my-1 fs-3">${questions[currentIndex].options[i]}</button>
    </div>
    `
    }
}



function nextQuestion() {
    if (currentQues == totalQues) {
        marksDiv.style.display = 'block'
    }
    else {
        currentIndex++
        initRender()
    }
}

function checkResult(a, b) {
    if (a == b) {
        marks++
        console.log(marks)
    }
    nextQuestion()
}

initRender()