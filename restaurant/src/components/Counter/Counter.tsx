import { useCounter } from "../../hooks/useCounter";
import { COUNTER_MAX, COUNTER_MIN } from "../../dataModels/env/Env";
import classNames from "classnames";
import styles from './counter.module.css';

function Counter({onHandleCounter, countValue}: {onHandleCounter?: (count: number) => void, countValue?: number}){
    
    const { count, increment, decrement } = useCounter({ initial: countValue !== undefined ? countValue : 0 });

    function decrementFunc(){
        decrement();
        if(onHandleCounter != undefined) onHandleCounter(count - 1)
    }

    function incrementFunc(){
        increment();
        if(onHandleCounter != undefined) onHandleCounter(count + 1)
    }

    return(
        <div className={classNames(styles.counterFlex, styles.counterMarginBottom5px)}>
            <button onClick={decrementFunc} disabled={count == COUNTER_MIN} type="button" className={classNames(styles.counterMarginRight10px)}>-</button>
            <p className={classNames(styles.counterMarginRight10px, styles.counterMarginTop5px)}>{count}</p>
            <button disabled={count == COUNTER_MAX} onClick={incrementFunc} type="button">+</button>
        </div>
    )
}

export default Counter;