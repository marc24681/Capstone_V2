function submit() {
  const resultElement = document.getElementById('score');
  const totalScore = parseInt(localStorage.getItem('totalScore'));
  
  if (totalScore > 20) {
    resultElement.innerText = 'You are in danger.';
  } else {
    resultElement.innerText = 'You are safe.';
  }
  }
  