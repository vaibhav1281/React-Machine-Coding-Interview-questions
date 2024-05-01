import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const [input, setInput] = useState("")
    const [todo, setTodo] = useState([])

    const handleAdd = () => {
        setTodo([...todo, {text: input, id: Date.now()}] )
        setInput('')
    }
    const  handleRemove = (id) =>{
        setTodo(todo.filter(todo => todo.id !== id))
    }
    const handleEdit = (id, newText) => {
        setTodo(todo.map(todo => (
            todo.id === id ? {...todo, text:newText} : todo
        )))
    }
    return(
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {
                    todo.map(todo => (
                        <TodoItem 
                        key={todo.id} 
                        todo={todo}
                        deleteTodo={handleRemove}
                        editTodo={handleEdit}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList;