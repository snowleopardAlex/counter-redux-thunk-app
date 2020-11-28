import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {increment, decrement} from "./redux"

function App(props) {
    const count = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    )
}

export default App

// REDUX THUNK - is a middleware that lets you call action creators that return a function instead of an 
// action object. That function relieves the store’s dispatch method, which is 
// then used to dispatch regular synchronous actions inside the function’s body 
// once the asynchronous operations have been completed. Redux Thunk especially comes handy when you are making asynchronous API requests and you need to dispatch on promise success and error.

// DISPATCH → send off to a destination or for a purpose. 

// MIDDLEWARE - it is a software which lies between an operating system and 
// the applications running on it. Common middleware examples include database
// middleware, application server middleware, message-oriented middleware, 
// web middleware and transaction-processing monitors. It is described as
// “software glue”. It acts as a bridge between an operating system or 
// database and applications, especially on a network. 

