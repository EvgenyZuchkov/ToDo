import React from "react";
import './App.css';
import TodoList from "./ToDo/TodoList";

function App() {

    const todos = [
        {id: 1, completed: false, title: 'Купить молоко'},
        {id: 2, completed: false, title: 'Купить хлеб'},
        {id: 3, completed: false, title: 'Купить сахар'},
    ]

    return (
        <div>
            <h1>React tutorial</h1>

            <TodoList todos={todos}/>
        </div>
    );
}

export default App;
