// 변수 초기화
const result = document.getElementById("result");
const num = document.getElementById('num');

// 1~100사이의 난수 생성
var com = Math.random() * 100 + 1;
com = Math.floor(com);

// 시도횟수 저장할 변수 초기화
cnt = 0

function check_num()
{
  // usr에 입력 숫자 불러오기 parseInt()
  var usr = parseInt(num.value);

  // 시도 수 증가
  cnt += 1;

  // usr와 com의 값을 비교하여 msg 결정하기
  // msg: UP!, DOWN!, 성공!
  if(usr > com) {
    msg = 'DOWN!';
  } else if(usr < com) {
    msg = 'UP!';
  } else if(usr == com) {
    msg = 'CORRECT!';
    msg += '\n' + cnt + '번째 맞히셨군요!';
    
    const b = document.getElementById('btn');
    b.innerText = ' ';
    b.disabled = 'disabled';
  } else {
    msg = '1~100 숫자를 입력해!';
  }

  result.innerText = msg;
};
