// have object with letters

const morseObj = {
	A: '.-',
	B: '-...',
	C: '-.-.',
	D: '-..',
	E: '.',
	F: '..-.',
	G: '--.',
	H: '....',
	I: '..',
	J: '.---',
	K: '-.-',
	L: '.-..',
	M: '--',
	N: '-.',
	O: '---',
	P: '.--.',
	Q: '--.-',
	R: '.-.',
	S: '...',
	T: '-',
	U: '..-',
	V: '...-',
	W: '.--',
	X: '-..-',
	Y: '-.--',
	Z: '--..',
  0: '-----',
	1: '.----',
	2: '..---',
	3: '...--',
	4: '....-',
	5: '.....',
	6: '-....',
	7: '--...',
	8: '---..',
	9: '----.',
	
};

// pull typed text into JS

const form = document.querySelector('form');
const input = document.querySelector('input');
const output = document.querySelector('output');


const convertMorse = () => {
	const arrayOfLetters = input.value.split('').map((letter) => letter.toUpperCase());
	const convertedMorse = arrayOfLetters
		.map((letter) => {
			if (morseObj[letter]) {
				return morseObj[letter];
			} else if (letter === ' ') {
				return '/';
			} else return letter;
		})
		.join('');
	return convertedMorse;
};

const onSubmit = (code) => {
	code.preventDefault();
	if (input.value.match(/[a-z0-9]/)) {
		output.innertext = convertMorse();
	}
};

button.addEventListener('submit', onSubmit);


