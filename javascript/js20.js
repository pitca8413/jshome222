function print_name() {
  const in1 = document.getElementById('name');
  const in2 = document.getElementById('age');
  const out1 = document.getElementById('result');

  var name = in1.value;
  var age = parseInt(in2.value);
  
  console.log(name);
  // alert(name + '님 ' + (age + 1) + '살 이시군요!');

  out1.innerText = name + '님은 내년에 ' + (age + 1) + '살이 되는군요!';
}