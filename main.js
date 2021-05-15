// have object with letters

const morseObject = {
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
	1: '.----',
	2: '..---',
	3: '...--',
	4: '....-',
	5: '.....',
	6: '-....',
	7: '--...',
	8: '---..',
	9: '----.',
	0: '-----',
};

const form = document.querySelector('form');
const input = document.querySelector('input');
const output = document.querySelector('.output');

const convertToMorse = () => {
	const lettersArr = input.value.split('').map((letter) => letter.toUpperCase());
	const convertedMorse = lettersArr
		.map((letter) => {
			if (morseObject[letter]) {
				return morseObject[letter];
			} else if (letter === ' ') {
				return '/';
			} else return letter;
		})
		.join(' ');
	return convertedMorse;
};

const convertToWords = () => {
	const MorseArr = input.value.split('/');
	return MorseArr
		.map((string) => {
			return string
				.split(' ')
				.map((char) => {
					if (Object.values(morseObject).includes(char)) {
						return Object.keys(morseObject).find((key) => morseObject[key] === char);
					} else return char;
				})
				.join('');
		})
		.join(' ');
};

const handleSubmit = (element) => {
	element.preventDefault();
	if (input.value.match(/[a-z0-9]/gi)) {
		output.innerText = convertToMorse();
	} else {
		output.innerText = convertToWords();
	}
};

form.addEventListener('submit', handleSubmit);
