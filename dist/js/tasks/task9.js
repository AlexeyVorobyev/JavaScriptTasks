const form = document.getElementById('form');
const password = document.getElementById('password');
const passwordCheck = document.getElementById('passwordCheck');
passwordCheck.style.border = 'none';

form.subm.onclick = (event) => {
  if (password.value != passwordCheck.value) {
    event.preventDefault();
    passwordCheck.setCustomValidity('Пароли не совпадают.');
    passwordCheck.reportValidity();
    form.passwordCheck.style.border = '2px solid #db545a';
  }
  else if (passwordCheck.value != '') {
    form.passwordCheck.style.border = '2px solid #32CD32';
    passwordCheck.setCustomValidity('');
  }
};

password.oninvalid = () => {
  password.setCustomValidity('Пароль должен содержать 8 символов, 1 букву верхнего и 1 букву нижнего регистров, 1 цифру');
  passwordCheck.reportValidity();
};

password.oninput = () => {
  password.setCustomValidity('');
};

