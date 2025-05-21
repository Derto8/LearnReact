import { useCounter } from "../../hooks/useCounter";

function Counter(){

    const { count, increment, decrement } = useCounter({ min: 0, max: 5, initial: 0 });
    
    return(
        <div style={{display: "flex", height: "30px"}}>
            <button onClick={decrement} style={{marginRight: "10px"}}>-</button>
            <p style={{marginRight: "10px", marginTop: "5px"}}>{count}</p>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter;