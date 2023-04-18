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


    return(
        <div className="calculator">
            <Display value={100}/>
            <Button label="AC" click={() => clearMemory()} triple/>
            <Button label="/" click={() => setOperation()} operation/>
            <Button label="7" click={() => AddDigit()}/>
            <Button label="8" click={() => AddDigit()}/>
            <Button label="9" click={() => AddDigit()}/>
            <Button label="*" click={() => setOperation()} operation/>
            <Button label="4" click={() => AddDigit()}/>
            <Button label="5" click={() => AddDigit()}/>
            <Button label="6" click={() => AddDigit()}/>
            <Button label="-" click={() => setOperation()} operation/>
            <Button label="1" click={() => AddDigit()}/>
            <Button label="2" click={() => AddDigit()}/>
            <Button label="3" click={() => AddDigit()}/>
            <Button label="+" click={() => setOperation()} operation/>
            <Button label="0" click={() => AddDigit()} double/>
            <Button label="." click={() => AddDigit()}/>
            <Button label="=" click={() => setOperation()} operation/>

        </div>
    );
}

