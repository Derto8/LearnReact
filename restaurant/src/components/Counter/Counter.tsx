import { useEffect } from "react";
import { useCounter } from "../../hooks/useCounter";

function Counter({onHandleCounter, countValue}: {onHandleCounter?: (count: number) => void, countValue?: number}){
    
    const min = 0;
    const max = 5;
    
    const { count, increment, decrement } = useCounter({ min: min, max: max, initial: countValue != undefined ? countValue : 0 });

    function decrementFunc(){
        decrement();
        if(onHandleCounter != undefined) onHandleCounter(count - 1)
    }

    function incrementFunc(){
        increment();
        if(onHandleCounter != undefined) onHandleCounter(count + 1)
    }

    return(
        <div style={{display: "flex", height: "30px"}}>
            <button onClick={decrementFunc} disabled={count == min} type="button" style={{marginRight: "10px"}}>-</button>
            <p style={{marginRight: "10px", marginTop: "5px"}}>{count}</p>
            <button disabled={count == max} onClick={incrementFunc} type="button">+</button>
        </div>
    )
}

export default Counter;