// Get elements
const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

// Event listener for convert button
convertBtn.addEventListener('click', () => {
  const num = parseInt(numberInput.value);
  output.textContent = convertToRoman(num);
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
