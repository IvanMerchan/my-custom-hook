import { useState } from "react"

export const useForm = ( initialState ={} ) => {

    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }



    const handleImputChange = ({ target }) => {
        // console.log(target.name);
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    return [ values, handleImputChange, reset ];
  
}
