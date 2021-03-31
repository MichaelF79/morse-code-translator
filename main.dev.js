"use strict";

// have object with letters
var morseObj = {
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
  9: '----.'
}; // pull typed text into JS

var form = document.querySelector('form');
var input = document.querySelector('input');
var output = document.querySelector('output');

function convertMorse() {
  var arrayOfLetters = input.value.split('').map(function (letter) {
    return letter.toLowerCase();
  });
  var convertedMorse = arrayOfLetters.map(function (letter) {
    if (morseObj[letter]) {
      return morseObj[letter];
    } else if (letter === ' ') {
      return '/';
    } else return letter;
  }).join('');
  return convertedMorse;
}

var onSubmit = function onSubmit(code) {
  code.preventDefault();

  if (input.value.match(/[a-z0-9]/)) {
    output.innertext = convertMorse();
  }
};

form.addEventListener('submit', onSubmit);