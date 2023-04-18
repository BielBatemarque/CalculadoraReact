import './Calculator.css';
import { Button } from '../components/Button';
import { Display } from '../components/Display';

export const Calculator = () => {
    const clearMemory = () => {
        console.log('limpar');
    }

    const setOperation = (operation) => {
        console.log(operation);
    }

    const AddDigit = (n) => {
        console.log(n);
    }

        const addD = n => AddDigit(n);
        const setOp = n => setOperation(n);
    return(
        <div className="calculator">
            <Display value={100}/>
            <Button label="AC" click={() => clearMemory()} triple/>
            <Button label="/" click={() => setOp('/')} operation/>
            <Button label="7" click={() => addD(7)}/>
            <Button label="8" click={() => addD(8)}/>
            <Button label="9" click={() => addD(9)}/>
            <Button label="*" click={() => setOp('*')} operation/>
            <Button label="4" click={() => addD(4)}/>
            <Button label="5" click={() => addD(5)}/>
            <Button label="6" click={() => addD(6)}/>
            <Button label="-" click={() => setOp('-')} operation/>
            <Button label="1" click={() => addD(1)}/>
            <Button label="2" click={() => addD(2)}/>
            <Button label="3" click={() => addD(3)}/>
            <Button label="+" click={() => setOp('+')} operation/>
            <Button label="0" click={() => addD(0)} double/>
            <Button label="." click={() => addD('.')}/>
            <Button label="=" click={() => setOp('=')} operation/>
        </div>
    );
}

