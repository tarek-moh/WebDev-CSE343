let lhs = '';
let rhs = '';
let operator = '';

let display = document.getElementById('display');

function update(value) {

    if ((value >= '0' && value <= '9') || value === '.') {
        if (operator === '') {
            // Check if lhs already has a decimal point
            if (value === '.' && lhs.includes('.')) return;
            lhs += value;
        } else {
            // Check if rhs already has a decimal point
            if (value === '.' && rhs.includes('.')) return;
            rhs += value;
        }
    }

    if (value === '*' || value === '/' || value === '+' || value === '-') {
        if (lhs !== '') {
            operator = value;
        }
    }

    display.innerHTML = lhs + ' ' + operator + ' ' + rhs;

    if (value === '=') {
        calculate();
    }

}

function calculate()
{
    let result = 0;

    switch(operator)
    {
        case '*':
            result = parseFloat(lhs) * parseFloat(rhs);
            break;
        case '/':
            result = parseFloat(lhs) / parseFloat(rhs);
            break;
        case '+':
            result = parseFloat(lhs) + parseFloat(rhs);
            break;
        case '-':
            result = parseFloat(lhs) - parseFloat(rhs);
            break;
    }

    display.innerHTML = result;
    lhs = result.toString();
    rhs = '';
    operator = '';
}

function reset()
{
    display.innerHTML = '0';
    lhs = '';  
    rhs = '';
    operator = '';
}