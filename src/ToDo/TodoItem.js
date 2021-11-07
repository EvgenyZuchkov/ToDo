import React, {useContext} from "react";
import PropTypes from 'prop-types';
import './TodoItem.css'
import Context from "../Context";

const TodoItem = ({todo, index, toggleToDo}) => {
    const {removeToDo} = useContext(Context)
    const classes = []
    if (todo.completed) {
        classes.push('done')
    }


    return (
        <li>
            <span className={classes.join(' ')}>
                <input type="checkbox"
                       onChange={() => toggleToDo(todo.id)}
                       checked={todo.completed}
                />
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>

            <button onClick={() => removeToDo(todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    toggleToDo: PropTypes.func.isRequired,
}

export default TodoItem;