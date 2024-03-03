import { useState } from "react"

const CounterApp = () => {
    const [{ counter1, counter2, counter3}, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });


    return (
    <>
        <h1>Counter1: {counter1}</h1>
        <h1>Counter2: {counter2}</h1>
        <h1>Counter3: {counter3}</h1>
        <hr />
        <button
            className="btn btn-primary" 
            onClick={ () => setCounter(prev => ({...prev, counter1:  counter1+ 1}))}>
                +1
        </button>
    </>
  )
}

export default CounterApp