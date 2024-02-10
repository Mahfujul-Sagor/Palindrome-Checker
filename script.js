let input = document.querySelector('.input');
let button = document.querySelector('.btn');
let result = document.querySelector('.result');

button.addEventListener('click', ()=> {
  check();
});

function reverseString(str) {
  return str.split('').reverse().join('');
}

function check() {
  const value = input.value;
  const reverse = reverseString(value);
  if (value === reverse) {
    result.innerText = 'PALINDROME';
    result.style.color = 'green';
  } else {
    result.innerText = 'Not a PALINDROME';
    result.style.color = 'red';
  }
}