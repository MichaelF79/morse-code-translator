"use strict";

// have object with letters
var morseObject = {
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
  0: '-----'
};
var form = document.querySelector('form');
var input = document.querySelector('input');
var output = document.querySelector('.output');

var convertToMorse = function convertToMorse() {
  var lettersArr = input.value.split('').map(function (letter) {
    return letter.toUpperCase();
  });
  var convertedMorse = lettersArr.map(function (letter) {
    if (morseObject[letter]) {
      return morseObject[letter];
    } else if (letter === ' ') {
      return '/';
    } else return letter;
  }).join(' ');
  return convertedMorse;
};

var handleSubmit = function handleSubmit(element) {
  element.preventDefault();

  if (input.value.match(/[a-z0-9]/)) {
    output.innerHTML = convertToMorse();
  }
};

form.addEventListener('submit', handleSubmit);