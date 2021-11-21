'use strict';

const form = document.getElementById('form');
const email = document.getElementById('email');
const icon = document.getElementById('icon');
const message = document.getElementById('message');
const button = document.getElementById('button');

form.addEventListener('submit', (e) => {
	const input = email.value.trim();
	if (input === '') {
		e.preventDefault();
		validateEmail(input);
	}
})

const validateEmail = (email)  => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!re.test(email)) {
		icon.style.visibility = "visible";
		message.style.visibility = "visible";
		this.email.style.border = "2px solid hsl(0, 93%, 68%)";
		return false;
	}
	return re.test(email);
}

button.addEventListener('click', () => {
	validateEmail(email.value)
})