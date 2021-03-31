"use strict";

// have object with letters
var morseObj = {
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
  9: '----.'
}; // pull typed text into JS

var form = document.querySelector('form');
var input = document.querySelector('input');
var output = document.querySelector('output');

var convertToMorse = function convertToMorse() {
  var arrayOfLetters = input.value.split('').map(function (_char) {
    return _char.toUpperCase();
  });
  var convertedToMorse = arrayOfLetters.map(function (_char2) {
    if (morseObj[_char2]) {
      return morseObj[_char2];
    } else if (_char2 === ' ') {
      return '/';
    } else return _char2;
  }).join(' ');
  return convertedToMorse;
};

var convertToWords = function convertToWords() {
  var arrayOfMorse = input.value.split('/');
  return arrayOfMorse.map(function (string) {
    return string.split(' ').map(function (_char3) {
      if (Object.values(morseObj).includes(_char3)) {
        return Object.keys(morseObj).find(function (key) {
          return morseObj[key] === _char3;
        });
      } else return _char3;
    }).join('');
  }).join(' ');
};

var handleSubmit = function handleSubmit(e) {
  e.preventDefault();

  if (input.value.match(/[a-z0-9]/gi)) {
    output.innerText = convertToMorse();
  } else {
    output.innerText = convertToWords();
  }
};

form.addEventListener('submit', handleSubmit);