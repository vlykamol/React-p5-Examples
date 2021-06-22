import React, {useState, useEffect} from 'react'
import '../cssStyles/TodoList.css'

function TodoList1() {
  const [todo, settodo] = useState('');
  const [todolist, setList] = useState([]);

  const formSubmitted = (e) => {
    e.preventDefault();
  }

  const inputchange = (e) => {
    settodo(e.target.value);
  }

  const addbutton = (e) => {
    if(todo == '') return;
    else{
    setList([
      {
        id : todolist.length ? todolist[0].id + 1 : 1,
        name : todo,
        isCompleted: false
      },
      ...todolist
    ]);
    settodo('');
  }
  }

  const handleChange = (newtodo) => {
    newtodo.isCompleted = !newtodo.isCompleted;
    setList(todolist);
  }

  const deltodo = (todos) => {
    setList(todolist.filter(tododo => tododo != todos));
  }

  useEffect(() => {
    console.log(todolist);
  }, [todolist])

  return (
    <div>
      <h1>todolist with usestate</h1>

      <form onSubmit = {formSubmitted}>
        <input value = {todo} placeholder = "add todo to list" onChange = {inputchange}></input>
        <button type= "submit" onClick = {addbutton}>add</button>
      </form>

      <ul>
          {todolist.map((todos) =>
          <li
          className = {todos.isCompleted ? "done" : "notdone"}
          key = {todos.id}>
            <div>{todos.name}</div>
            <button onClick = {() => handleChange(todos)}>{todos.isCompleted ? "notdone" : "done"}</button>
            <button onClick = {() => deltodo(todos, todos.id)}>delete</button>            
          </li>
          )}
      </ul>
    </div>
  )
}

export default TodoList1