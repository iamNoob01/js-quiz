var quizdata = [
     {
          question: 'Which framework is belongs to a JavaScript?',
          a: '.net',
          b: 'laravel',
          c: 'django',
          d: 'react',
          correct: 'd'
     },
     {
          question: 'CSS stand for ?',
          a: 'Central Style Sheets',
          b: 'Cascading Style Sheets',
          c: 'Cascading Simple Sheets',
          d: 'Cars SUVs Sailboats',
          correct: 'b'
     },
     {
          question: 'Which is not a Programming language?',
          a: 'HTML',
          b: 'JAVA',
          c: 'C++',
          d: 'JavaScript',
          correct: 'a'
     },
     {
          question: 'Which one is not a Web Browser?',
          a: 'Safari',
          b: 'Photoshope',
          c: 'Chrome',
          d: 'none of the above',
          correct: 'b'
     }
]

var quiz = document.getElementById('quizdiv')
var answer = document.querySelectorAll('.answer')
var question = document.getElementById('Question')
var option_a = document.getElementById('a_value')
var option_b = document.getElementById('b_value')
var option_c = document.getElementById('c_value')
var option_d = document.getElementById('d_value')

var submition = document.getElementById('submit')
var hidbtn = document.getElementById('hidbtn')

var currentQuestion = 0
var currentScore = 0

loadQuiz()

function loadQuiz() {

     deselect()
     question.innerHTML = quizdata[currentQuestion].question
     option_a.innerText = quizdata[currentQuestion].a
     option_b.innerText = quizdata[currentQuestion].b
     option_c.innerText = quizdata[currentQuestion].c
     option_d.innerText = quizdata[currentQuestion].d

}

function deselect() {
     answer.forEach(answer => answer.checked = false)
}

submition.addEventListener('click', () => {
     var selectedoption
     

     answer.forEach(answer => {
          if (answer.checked) {
               selectedoption = answer.id
          }
     })

     if (selectedoption == quizdata[currentQuestion].correct) {
          currentScore = currentScore +1
     }
     currentQuestion = currentQuestion + 1

     if (currentQuestion < quizdata.length) {
          loadQuiz()
     }
     else {

          document.getElementById('quizdiv').innerHTML = `<h1>You have scored ${currentScore} out of ${quizdata.length}</h1>`

          

          // var show = hidbutn.style.display = 'inline-block'
          // document.getElementById('quizdiv').appendChild(show)
     }
})

