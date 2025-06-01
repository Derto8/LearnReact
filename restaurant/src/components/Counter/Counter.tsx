import { useCounter } from "../../hooks/useCounter";
import { COUNTER_MAX, COUNTER_MIN } from "../../dataModels/env/Env";

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
        <div style={{display: "flex", height: "30px"}}>
            <button onClick={decrementFunc} disabled={count == COUNTER_MIN} type="button" style={{marginRight: "10px"}}>-</button>
            <p style={{marginRight: "10px", marginTop: "5px"}}>{count}</p>
            <button disabled={count == COUNTER_MAX} onClick={incrementFunc} type="button">+</button>
        </div>
    )
}

export default Counter;