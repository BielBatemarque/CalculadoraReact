import './Calculator.css';
import { Button } from '../components/Button';
import { Display } from '../components/Display';
import { useState } from 'react';

export const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('');
    const clearMemory = () => {
        setDisplayValue('');
    }

    const setop = (n) => {
        setDisplayValue(s => s + n);
    }

    const AddDigit = (n) => {
       setDisplayValue(s => s + n);
    }

    const realizaConta = (value, resultado) => {
       resultado =  eval(value);
        setDisplayValue(resultado);
    }

    return(
        <div className="calculator">
            <Display value={displayValue}/>
            <Button label="AC"click={() => clearMemory()} triple/>
            <Button label="/" click={() => setop('/')} operation/>
            <Button label="7" click={() => AddDigit(7)}/>
            <Button label="8" click={() => AddDigit(8)}/>
            <Button label="9" click={() => AddDigit(9)}/>
            <Button label="*" click={() => setop('*')} operation/>
            <Button label="4" click={() => AddDigit(4)}/>
            <Button label="5" click={() => AddDigit(5)}/>
            <Button label="6" click={() => AddDigit(6)}/>
            <Button label="-" click={() => setop('-')} operation/>
            <Button label="1" click={() => AddDigit(1)}/>
            <Button label="2" click={() => AddDigit(2)}/>
            <Button label="3" click={() => AddDigit(3)}/>
            <Button label="+" click={() => setop('+')} operation/>
            <Button label="0" click={() => AddDigit(0)} double/>
            <Button label="." click={() => AddDigit('.')}/>
            <Button label="=" click={() => realizaConta(displayValue)} operation/>
        </div>
    );
}

