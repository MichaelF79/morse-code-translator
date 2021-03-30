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

const convertToMorse = () => {
	const arrayOfLetters = input.value.split('').map((char) => char.toUpperCase());
	const convertedMorse = arrayOfLetters
		.map((char) => {
			if (morseObj[char]) {
				return morseObj[char];
			} else if (char === ' ') {
				return '/';
			} else return char;
		})
		.join(' ');
	return convertedMorse;
};

const handleSubmit = (e) => {
	e.preventDefault();
	if (input.value.match(/[a-z1-0]/gi)) {
		output.innerText = convertToMorse();
	} else {
		output.innerText = convertToWords();
	}
};

// add eventListener

form.addEventListener('submit', handleSubmit);