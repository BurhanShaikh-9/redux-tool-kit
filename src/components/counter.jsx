import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiply } from '../redux/counter/counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>currently  {count}
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(multiply())}>x2</button>
        </div>
    )
}

export default Counter