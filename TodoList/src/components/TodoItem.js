import { useState } from "react"

const TodoItem = ({todo, editTodo, deleteTodo}) => {

    const[isEditing, setIsEditing] = useState(false)
    const [editedTodo, setEditedTodo] = useState(todo.text)

    const handleEdit = () => {
        editTodo(todo.id, editedTodo)
        setIsEditing(false)
    }
    const handleRemove = () => {
        deleteTodo(todo.id)
    }

    return(
        <li>
            {
                isEditing ? (
                    <input
                    type="text"
                        value={editedTodo} 
                        onChange={(e) => setEditedTodo(e.target.value)}
                        onBlur={handleEdit}
                    />
                ) : (
                    <>
                        { todo.text }
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                        <button onClick={handleRemove}>Delete</button>
                    </>
                )
            }
        </li>
    )
}

export default TodoItem