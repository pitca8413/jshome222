function calc() {
  const in1 = document.getElementById('n1');
  const in2 = document.getElementById('n2');
  const res = document.getElementById('result');

  n1 = parseInt(in1.value);
  n2 = parseInt(in2.value);
  s = n1 + n2;

  res.innerText = s;
}
