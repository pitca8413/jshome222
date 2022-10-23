const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

btn1.onclick = function() {
  alert('버튼1을 클릭하셨군요!');
};

btn2.ondblclick = function() {
  alert('버튼2를 더블 클릭하셨군요!');
}
