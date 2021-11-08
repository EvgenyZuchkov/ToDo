import React, {useEffect} from "react";
import './App.css';
import TodoList from "./ToDo/TodoList";
import Context from "./Context";
import Loader from "./ToDo/Loader";

// Technologies React lazy used for educational purposes
const AddTodo = React.lazy(() => import ("./ToDo/AddTodo"))

function App() {

    const [todos, setTodos] = React.useState([
        // {id: 1, completed: false, title: 'Купить молоко'},
        // {id: 2, completed: false, title: 'Купить хлеб'},
        // {id: 3, completed: false, title: 'Купить сахар'},
    ])

    const [loading, setLoading] = React.useState(true)

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(()=> {
                    setTodos(todos)
                    setLoading(false)
                },2000)

            })
    },[])

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
                <React.Suspense fallback={<p>Loading...</p>}>
                    <AddTodo onCreate={addTodo}/>
                </React.Suspense>

                {loading && <Loader/>}
                {todos.length ? <TodoList todos={todos} toggleToDo={toggleToDo}/> :
                    loading ? null : 'No todos!'}
            </div>
        </Context.Provider>
    );
}

export default App;
