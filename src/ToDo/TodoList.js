import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {


    return (
            <ul>
                {props.todos.map((todo, index) => {
                    return <TodoItem todo={todo} index={index} key={todo.id}/>
                })}
            </ul>
    )
}

export default TodoList;