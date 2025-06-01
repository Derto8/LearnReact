import { useEffect } from 'react';
import { useState } from 'react';
import { COUNTER_MAX, COUNTER_MIN } from '../dataModels/env/Env';

export function useCounter({ min = COUNTER_MIN, max = COUNTER_MAX, initial = 0 } = {}) {
    const [count, setCount] = useState(initial);

    useEffect(() => {
        setCount(initial)
    }, [initial])

    const increment = () => setCount(
        (currentCount) => (currentCount < max ? currentCount + 1 : currentCount)
    );
    const decrement = () => setCount(
        (currentCount) => (currentCount > min ? currentCount - 1 : currentCount)
    );

    return { count, increment, decrement };
}