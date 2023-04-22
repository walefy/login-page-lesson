const KEY_USER_LOGIN = 'userLogin';

const changeIconShowPasswordBtn = () => {
  const openEye = 'openEye.svg';
  const closeEye = 'closeEye.svg';
  const showPasswordIcon = document.querySelector('#showPassword img');

  if (showPasswordIcon.src.includes(openEye)) {
    showPasswordIcon.src = `/${closeEye}`;
    return;
  }

  showPasswordIcon.src = openEye;
};

const saveUserLogin = (name, password) => {
  localStorage.setItem(KEY_USER_LOGIN, JSON.stringify([name, password]));
};

const recoveryUserLogin = () => {
  const userLogin = localStorage.getItem(KEY_USER_LOGIN);

  if (!userLogin) return;

  return JSON.parse(userLogin);
};

const addUserLogin = () => {
  const userLogin = recoveryUserLogin();

  if (!userLogin) return;

  const name = document.querySelector('#inputNameFormMainLogin');
  const password = document.querySelector('#inputPasswordFormMainLogin');

  name.value = userLogin[0];
  password.value = userLogin[1];
};

const addEventOnSubmit = () => {
  const submitBtn = document.querySelector('#submit');

  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const name = document.querySelector('#inputNameFormMainLogin').value;
    const password = document.querySelector('#inputPasswordFormMainLogin').value;

    saveUserLogin(name, password);
  });
};

const clearUserLogin = () => {
  localStorage.removeItem(KEY_USER_LOGIN);
};

const addEventOnClearBtn = () => {
  const clearBtn = document.querySelector('#clearUserLogin');

  clearBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const name = document.querySelector('#inputNameFormMainLogin');
    const password = document.querySelector('#inputPasswordFormMainLogin');

    name.value = '';
    password.value = '';

    clearUserLogin();
  });
};

const addEventOnShowPasswordBtn = () => {
  const showPassword = document.querySelector('#showPassword');

  showPassword.addEventListener('click', (event) => {
    event.preventDefault();
    const password = document.querySelector('#inputPasswordFormMainLogin');
    changeIconShowPasswordBtn();

    if (password.type !== 'password') {
      password.type = 'password';
      return;
    }

    password.type = 'text';
  });
};

window.onload = () => {
  addUserLogin();
  addEventOnSubmit();
  addEventOnClearBtn();
  addEventOnShowPasswordBtn();
};
