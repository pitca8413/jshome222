function check_calc()
{
  const n1 = document.getElementById("n1");
  const n2 = document.getElementById("n2");
  const r = document.getElementById("result");

  var v1 = parseInt(n1.value);
  var v2 = parseInt(n2.value);

  // msg 변수에 연산 결과를 출력한다.
  msg = v1 + "+" + v2 + "=" + (v1 + v2) + "\n";
  msg += v1 + "-" + v2 + "=" + (v1 - v2) + "\n";
  msg += v1 + "*" + v2 + "=" + (v1 * v2) + "\n";
  msg += v1 + "/" + v2 + "=" + (v1 / v2) + "\n";

  r.innerText = msg;
}