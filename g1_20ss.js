var start;
var end;
var et;

const btn = document.getElementById('btn');
const result = document.getElementById('result');

function check_time()
{
  var txt = btn.innerText;

  if(txt == '시작') {
    start = new Date();
    btn.innerText = '종료';
    btn.style.backgroundColor = '#FF3333';
    result.innerText = '20초 세고 버튼을 다시 누르세요';
  } else {
    end = new Date();
    et = end - start;
    et = parseInt(et / 1000);
    btn.innerText = '시작';
    btn.style.backgroundColor = '#123E77';
    result.innerText = '경과 시간 ' + et + '초';
  }
}