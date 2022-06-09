import { useState } from "react"

// export const useCounter = ( initialState = 10 ) => {
  
//     const [state, setstate] = useState(initialState); //10

//     const reset = () => {
//         setstate( initialState );
//     }

//     const increment = ( factor = 1 ) => {
//         setstate( state + factor );
//     }

//     const decrement = ( factor = 1 ) => {
//         setstate( state - factor );
//     }

//     return {
//         state,
//         reset,
//         increment,
//         decrement
//     }
// }


export const useCounter = ( initialState = 10 ) => {
  
    const [counter, setCounter] = useState(initialState); //10

    const reset = () => {
        setCounter( initialState );
    }

    const increment = () => {
        setCounter( counter + 1 );
    }

    const decrement = () => {
        setCounter( counter - 1 );
    }

    return {
        counter,
        reset,
        increment,
        decrement
    }
}