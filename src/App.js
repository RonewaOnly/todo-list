import './App.css';
import { useState } from 'react'
function App() {
  const [newItem,setNewItem] = useState("")
  const [todo,setTodos] = useState([])
  function handleSubmit(e){
    e.preventDefault();
    setTodos((currentTodo) => {
      return[
        ...currentTodo,
      {
        id: crypto.randomUUID(),
        title: newItem,
        completed:false
      },
      ]
      
    })
      setNewItem("")
  }

  function toggleTodo(id,completed){
    setTodos(currentTodo =>{
      return currentTodo.map(todo =>{
        if(todo.id === id){
          //todo.completed = completed
          return{...todo,completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodo => {
      return currentTodo.filter(todo=> todo.id !== id )
    })
  }


  //console.log(todo);
  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input 
          type="text" 
          value={newItem}
          onChange={(e)=> setNewItem(e.target.value) }
          id="item"/>
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todo.map(todos =>{
          return(
          <li key={todos.id}>
              <label>
                <input type="checkbox" 
                checked={todos.completed}
                onChange={e => toggleTodo(todos.id,e.target.checked)}
                />
                    {todos.title}
                </label>
                <button onClick={() => deleteTodo(todos.id)} className="btn btn-danger">Delete</button>
          </li>
          )
        })}
      </ul>
    </>
  );
}

export default App;
