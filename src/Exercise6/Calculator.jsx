import React, {useState} from 'react';

function Calculator() {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState('');


const handleNumber1Change = (e) => {
    setNumber1(e.target.value);
}

const handleNumber2Change = (e) => {
    setNumber2(e.target.value);
}

const handleOperatorChange = (e) => {
    setOperator(e.target.value)
}

const handleCalculate = () => {
    let calculatedResult;

    switch (operator) {
        case '+':
            calculatedResult = Number(number1) + Number(number2);
            break;

        case '-':
            calculatedResult = Number(number1) - Number(number2);
            break;

        case '*':
            calculatedResult = Number(number1) * Number(number2);
            break;

        case '/':
            calculatedResult = Number(number1) / Number(number2);
            break;

            default:
            calculatedResult = '';
    }

    setResult(calculatedResult);
};

    return(
        <div>

            <input 
            type="number"
            placeholder="Enter First Number"
            value={number1}
            onChange={handleNumber1Change} />

            <select value={operator} onChange={handleOperatorChange}>
                <option value="">Select Operator</option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>

            <input 
            type="number"
            placeholder="Enter Second Number"
            value={number2}
            onChange={handleNumber2Change} />

            <button onClick={handleCalculate}>Calculate</button>

            {result && <div>Result: {result}</div>}
        </div>
    );
}

export default Calculator;