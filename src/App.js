import React from "react";
import './App.css';
import TodoList from "./ToDo/TodoList";
import Context from "./Context";
import AddTodo from "./ToDo/AddTodo";

function App() {

    const [todos, setTodos] = React.useState([
        {id: 1, completed: false, title: 'Купить молоко'},
        {id: 2, completed: false, title: 'Купить хлеб'},
        {id: 3, completed: false, title: 'Купить сахар'},
    ])


    function toggleToDo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )

    }

    function removeToDo(id) {
        setTodos(
            todos.filter(todo => todo.id !== id)
        )
    }

    function addTodo (title) {
        setTodos(
            todos.concat([{
                id: Date.now(),
                completed: false,
                title
            }])
        )
    }

    return (
        <Context.Provider value={{removeToDo}}>
            <div className='wrapper'>
                <h1>React tutorial</h1>
                <AddTodo onCreate={addTodo}/>
                {todos.length ? <TodoList todos={todos} toggleToDo={toggleToDo}/> : 'No todos'}
            </div>
        </Context.Provider>
    );
}

export default App;
