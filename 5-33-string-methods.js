let name = 'Lukas Nagy';
let pass = 'abc123456789';

console.log(name.toLowerCase())
console.log(pass.includes('1234'));

//isValidPassword
function isValidPassword (password) {
	return password.length > 8 && !password.includes('password');
}

//length is more than 8 - and it doesn't contain the word password

console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abc123!@@$@'));
console.log(isValidPassword('asdlsdflkpassword'));