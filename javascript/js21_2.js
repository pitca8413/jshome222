function calc() {
  const s = document.getElementById('score');
  var score = parseInt(s.value);
  var grade;
  if(score >= 90) {
    grade = 'A';
  } else if(score >= 80) {
    grade = 'B';
  } else if(score >= 70) {
    grade = 'C';
  } else if(score >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  const r = document.getElementById('result');
  r.innerText = score + ' is ' + grade;
}