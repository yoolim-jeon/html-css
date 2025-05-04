const form = document.createElement('form');
const usernameLabel = document.createElement('div');
usernameLabel.textContent = 'username';
form.appendChild(usernameLabel);

const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.name = 'username';
form.appendChild(usernameInput);

form.appendChild(document.createElement('br'));

// password label
const passwordLabel = document.createElement('div');
passwordLabel.textContent = 'password';
form.appendChild(