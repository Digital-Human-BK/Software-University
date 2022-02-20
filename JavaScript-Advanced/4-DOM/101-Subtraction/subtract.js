function subtract() {
    const numOne = document.getElementById('firstNumber').value;
    const numTwo = document.getElementById('secondNumber').value;

    document.getElementById('result').textContent = Number(numOne) - Number(numTwo)
}