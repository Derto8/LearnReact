import { useCounter } from "../../hooks/useCounter";
import { COUNTER_MAX, COUNTER_MIN } from "../../dataModels/env/Env";
import classNames from "classnames";
import styles from './counter.module.css';
import { Button } from "../Button/Button";

function Counter({onHandleCounter, countValue}: {onHandleCounter?: (count: number) => void, countValue?: number}){
    
    const { count, increment, decrement } = useCounter({ initial: countValue !== undefined ? countValue : 0 });

    function decrementFunc(){
        decrement();
        if(onHandleCounter !== undefined) onHandleCounter(count - 1)
    }

    function incrementFunc(){
        increment();
        if(onHandleCounter !== undefined) onHandleCounter(count + 1)
    }

    return(
        <div 
        className={classNames(styles.counterFlex, styles.counterMarginBottom5px)}>
            <Button className={classNames(styles.counterMarginRight10px)} onClick={decrementFunc} disabled={count == COUNTER_MIN}  isSmall={false}>-</Button>
            <p className={classNames(styles.counterMarginRight10px, styles.counterMarginTop5px)}>{count}</p>
            <Button onClick={incrementFunc} disabled={count == COUNTER_MAX}  isSmall={false}>+</Button>
        </div>
    )
}

export default Counter;