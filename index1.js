const form = document.createElement('form');

const usernameLabel = document.createElement('div');
usernameLabel.textContent = 'username';
form.appendChild(usernameLabel);

const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.name = 'username';
form.appendChild(usernameInput);

form.appendChild(document.createElement('br'));

const passwordLabel = document.createElement('div');
passwordLabel.textContent = 'password';
form.appendChild(passwordLabel);

const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.name = 'password';
form.appendChild(passwordInput);

form.appendChild(document.createElement('br'));

const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'submit';
form.appendChild(submitButton);

document.body.appendChild(form);