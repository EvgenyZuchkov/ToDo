import React from "react";

const TodoItem = ({todo, index}) => {
    return (
        <ul>
            <strong>{index +1}</strong>{todo.title}
        </ul>
    )
}

export default TodoItem;