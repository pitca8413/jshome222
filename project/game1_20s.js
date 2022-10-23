var start;
var end;
var et;

function check_time() {
  const btn = document.getElementById('btn');
  const msg = document.getElementById('msg');
  // console.log(btn.innerText);

  if(btn.innerText == '시작') {
    // 시작 버튼 클릭 코드
    start = new Date();
    btn.innerText = "종료";
    btn.style.backgroundColor = '#FF3333';
    msg.innerText = "20초를 세고 종료버튼을 누르세요.";
  } else {
    // 종료 버튼 클릭 코드
    end = new Date();
    et = (end - start) / 1000; // 시간 ms
    et = parseInt(et);
    btn.innerText = '시작';
    btn.style.backgroundColor = '#123E77';
    msg.innerText = '지난 시간은 ' + et + '초 입니다.';
  };
};