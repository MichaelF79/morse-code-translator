// have object with letters

const morseObj = {
	a: '.-',
	b: '-...',
	c: '-.-.',
	d: '-..',
	e: '.',
	f: '..-.',
	g: '--.',
	h: '....',
	i: '..',
	j: '.---',
	k: '-.-',
	l: '.-..',
	m: '--',
	n: '-.',
	o: '---',
	p: '.--.',
	q: '--.-',
	r: '.-.',
	s: '...',
	t: '-',
	u: '..-',
	v: '...-',
	w: '.--',
	x: '-..-',
	y: '-.--',
	z: '--..',
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


function convertMorse() {
	const arrayOfLetters = input.value.split('').map((letter) => letter.toLowerCase());
	const convertedMorse = arrayOfLetters
		.map((letter) => {
			if (morseObj[letter]) {
				return morseObj[letter];
			} else if (letter === ' ') {
				return '/';
			} else
				return letter;
		})
		.join('');
	return convertedMorse;
}

const onSubmit = (code) => {
	code.preventDefault();
	if (input.value.match(/[a-z0-9]/)) {
		output.innertext = convertMorse();
	}
};

form.addEventListener('submit', onSubmit);


