import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';
import './TodoList.css';

function TodoList(props) {

    return (
        <ul>
            {props.todos.map((todo, index) => {
                return <TodoItem key={todo.id}
                                 todo={todo}
                                 index={index}
                                 toggleToDo={props.toggleToDo}/>
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleToDo: PropTypes.func.isRequired,
}

export default TodoList;