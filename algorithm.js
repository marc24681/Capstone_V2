function Submit() {
	const form = document.getElementById('questionnaire');
    const resultElement = document.getElementById('result');
    const tables = document.getElementById('container');
    const tablessafe = document.getElementById('container-safe');
    const tablesdanger = document.getElementById('container-danger');

	const q1 = isValid(parseInt(form.elements['q1'].value));
	const q2 = isValid(parseInt(form.elements['q2'].value));
    const q3 = isValid(parseInt(form.elements['q3'].value));
	const q4 = isValid(parseInt(form.elements['q4'].value));
    const q5 = isValid(parseInt(form.elements['q5'].value));
    const q6 = isValid(parseInt(form.elements['q6'].value));
    const q7 = isValid(parseInt(form.elements['q7'].value));
    const q8 = isValid(parseInt(form.elements['q8'].value)); 
    const q9 = isValid(parseInt(form.elements['q9'].value));
    const q10 = isValid(parseInt(form.elements['q10'].value));

	const total = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 +q10;
console.log(total);
	if (total > 20) {
		resultElement.innerText = 'You are in danger!\n' + parseInt((total/60)*100, 10) +'%'
        
        ;
		resultElement.setAttribute('id','danger');
        tables.style.display='block';
        tablesdanger.style.display='block';

        
	} else {
		resultElement.innerText = 'You are safe.\n'+ parseInt((total/60)*100, 10) +'%';
		resultElement.setAttribute('id','safe');
        tables.style.display='block';
        tablessafe.style.display='block';
	}

	form.style.display = 'none';
	fadeIn(resultElement);

    function fadeIn(element) {
        element.style.display = 'block';
        const opacity = parseFloat(window.getComputedStyle(element).getPropertyValue('opacity'));
    
        let currentOpacity = 0;
        const intervalId = setInterval(function() {
            currentOpacity += 0.1;
            element.style.opacity = currentOpacity;
    
            if (currentOpacity >= opacity) {
                clearInterval(intervalId);
            }
        }, 50);
    }

}
function isValid(value){
    if(value>=1 && value <=6){
        return value;
    }else{return 0;}
}
/* Make questions appear and disapear*/
var currentQuestion = 1;
var totalQuestions = 10;

    function displayQuestion() {
      var question = document.getElementById("question" + currentQuestion);
      question.style.display = "block";
      
    }

    function hideQuestion() {
      var question = document.getElementById("question" + currentQuestion);
      question.style.display = "none";
      
    }

    function nextQuestion() {
      hideQuestion();
      currentQuestion++;
      
      if (currentQuestion <= totalQuestions) {
        displayQuestion();
      }else{
        
          var nothing = document.getElementById("appear");
          nothing.style.display = "none";
          Submit();
        
      }

    }

    function previousQuestion() {
        hideQuestion();
        currentQuestion--;

        if (currentQuestion >= 1) {
            displayQuestion();
        }
    }
