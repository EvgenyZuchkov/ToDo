import React, {useState} from "react";
import PropTypes from 'prop-types';


// Create custom hook
function useInputValue (defaultValue = '') {
    const [value, setValue] = useState('')

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

const AddTodo = ({onCreate}) => {
    const input = useInputValue('')

    function submitHandler(event) {
        event.preventDefault()

        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <input {...input.bind}/>
            <button type='submit'>Add todo</button>
        </form>
    )
}

// AddTodo.propTypes = {
//     onCreate: PropTypes.func.isRequired
// }

export default AddTodo;