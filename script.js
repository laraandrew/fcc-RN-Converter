// Get elements
const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
const modeBtn = document.getElementById('mode-btn');
const container = document.getElementById('container');
const title = document.getElementById('title');

// Initialize mode
let mode = 'arabic-to-roman';

// Event listener for convert button
convertBtn.addEventListener('click', () => {
  const value = numberInput.value.trim();
  if (mode === 'arabic-to-roman') {
    const num = parseInt(value);
    output.textContent = convertToRoman(num);
  } else {
    output.textContent = convertToArabic(value.toUpperCase());
  }
});

// Event listener for 'Enter' key press on the input element
numberInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    convertBtn.click();
  }
});

// Event listener for mode button
modeBtn.addEventListener('click', () => {
  if (mode === 'arabic-to-roman') {
    mode = 'roman-to-arabic';
    container.style.background = 'rgba(0, 0, 0, 0.8)';
    document.body.style.background = 'linear-gradient(90deg, #42a5f5, #5e92f3, #83b5f9)';
    title.textContent = 'Roman to Arabic Numeral Converter';
    modeBtn.style.background = '#42a5f5';
    numberInput.placeholder = "Roman Numeral";
  } else {
    mode = 'arabic-to-roman';
    container.style.background = 'rgba(0, 0, 0, 0.5)';
    document.body.style.background = 'linear-gradient(90deg, #a1c4fd, #c2e9fb)';
    title.textContent = 'Arabic to Roman Numeral Converter';
    modeBtn.style.background = '#ff8c42';
    numberInput.placeholder = "Enter a Number";
  }
});

// Function to convert number to Roman numeral
function convertToRoman(num) {
  if (isNaN(num)) return 'Please enter a valid number';
  if (num < 1) return 'Please enter a number greater than or equal to 1';
  if (num >= 4000) return 'Please enter a number less than or equal to 3999';
  
  const romanNums = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let romanStr = '';

  for (let key in romanNums) {
    while (num >= romanNums[key]) {
      romanStr += key;
      num -= romanNums[key];
    }
  }
  return romanStr;
}

// Function to convert Roman numeral to number
function convertToArabic(roman) {
  const romanNums = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let num = 0;
  for (let i = 0; i < roman.length; i++) {
    const current = romanNums[roman[i]];
    const next = romanNums[roman[i + 1]];
    if (next && current < next) {
      num -= current;
    } else {
      num += current;
    }
  }
  if (num < 1 || num >= 4000 || isNaN(num)) {
    return `Please enter a valid Roman numeral between I and MMMCMXCIX.
    Valid Roman numerals: 
    I = 1
    IV = 4
    V = 5
    IX = 9
    X = 10
    XL = 40
    L = 50
    XC = 90
    C = 100
    CD = 400
    D = 500
    CM = 900
    M = 1000`;
  }
  return num;
}
