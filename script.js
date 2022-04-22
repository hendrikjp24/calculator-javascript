let prevNumber = '';
let operator = '';
let currentNumber = '0';

// Membuat display calculator
const screenCalculate = document.querySelector(".calculator-screen");

// function display
const displayCalculate = (number) => {
    screenCalculate.value = number;
}

// Membuat btn clear
const clearButton = document.querySelector(".all-clear");

// fungsi btn clear
clearButton.addEventListener("click", () => {
    prevNumber = '';
    operator = '';
    currentNumber = '0';
    displayCalculate(currentNumber);
})

// membuat agarn menampilkan angka yang di xlixk
const numbers = document.querySelectorAll(".number");

// inputan number
const inputNumber = (number) =>{
    if(currentNumber === '0'){
        currentNumber = number;
    }else{
        currentNumber += number;
    }
}

// menampilkan inputan
numbers.forEach((number) => {
    number.addEventListener("click",(event) => {
        inputNumber(event.target.value);
        displayCalculate(currentNumber);
    })
});

// inputan decimal
const decimal = document.querySelector(".decimal");

const inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return;
    }else{
        currentNumber += dot;
    }
}

// Menampilkan inputan decimal
decimal.addEventListener("click",() =>{
    inputDecimal(event.target.value);
    displayCalculate(currentNumber);
})

// mengambil nilai operator
const nilaiOperator = document.querySelectorAll(".operator");

const inputOperator = (btnoperator) => {
    if(operator === ''){
        prevNumber = currentNumber;
    }
    operator = btnoperator;
    currentNumber = '';
    
}

nilaiOperator.forEach((btnoperator) => {
    btnoperator.addEventListener("click",(event) => {
        inputOperator(event.target.value);  
        displayCalculate(currentNumber);   
    })
});

// perhitungan
const equalSign = document.querySelector(".equal-sign");

const calculate = () => {
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;

        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;

        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;

        default:
            result = currentNumber;
            break;
    }
    currentNumber = result;
    operator = '';
    prevNumber = '';
}

//menampilak hasil calculate
equalSign.addEventListener("click",() => {
    calculate();
    displayCalculate(currentNumber);
})


// %
const persen = document.querySelector(".percentage");

const ubahPersen = (number) => {
    if(currentNumber === '' || currentNumber === '0'){
        return
    }

    currentNumber = number / 100;
}

persen.addEventListener("click",() => {
    ubahPersen(currentNumber);
    displayCalculate(currentNumber);
})