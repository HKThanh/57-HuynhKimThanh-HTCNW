const firstNumber = document.getElementById('so1');
const secondNumber = document.getElementById('so2');
const kq = document.getElementById('kq');
const defaultError = "(*)"

function validate() {
    if (firstNumber.value === '' || secondNumber.value === '') {
        document.getElementById('error1').innerHTML = '*Vui lòng nhập đủ 2 số';
        document.getElementById('error2').innerHTML = '*Vui lòng nhập đủ 2 số';
        return false;
    }

    if (isNaN(firstNumber.value) || isNaN(secondNumber.value)) {
        document.getElementById('error1').innerHTML = '*Vui lòng nhập số';
        document.getElementById('error2').innerHTML = '*Vui lòng nhập số';
        return false;
    }

    if (parseFloat(secondNumber.value) === 0) {
        document.getElementById('error2').innerHTML = '*Số thứ 2 phải khác 0';
        return false;
    }
    return true;
}

function add() {
    if (validate() === false) {
        return;
    } else {
        document.getElementById('error1').innerHTML = defaultError;
        document.getElementById('error2').innerHTML = defaultError;
        kq.value = parseFloat(firstNumber.value) + parseFloat(secondNumber.value);
    }
}

function subtract() {
    if (validate() === false) {
        return;
    } else {
        document.getElementById('error1').innerHTML = defaultError;
        document.getElementById('error2').innerHTML = defaultError;
        kq.value = parseFloat(firstNumber.value) - parseFloat(secondNumber.value);
    }
}

function multiply() {
    if (validate() === false) {
        return;
    } else {
        document.getElementById('error1').innerHTML = defaultError;
        document.getElementById('error2').innerHTML = defaultError;
        kq.value = parseFloat(firstNumber.value) * parseFloat(secondNumber.value);
    }
}

function divide() {
    if (validate() === false) {
        return;
    } else {
        document.getElementById('error1').innerHTML = defaultError;
        document.getElementById('error2').innerHTML = defaultError;
        kq.value = parseFloat(firstNumber.value) / parseFloat(secondNumber.value);
    }
}