import React from 'react';
import TodoList from './toDo/toDoList';
import Context from './context';
import AddTodo from './toDo/AddTodo';

function App() {
  let [todos, setTodos] = React.useState([
    {id:1, completed:true,title:'Купить пива'},
    {id:2, completed:false,title:'Купить сиги'},
    {id:3, completed:false,title:'Купить чипсов'},
  ])

  function toggleToDo(id){
    setTodos( todos.map(todo=>{
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo
    })
    )
  };

  function addTodo(title){
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed:false,
    }]))
  }
  function removeTodoItem (idx){
    setTodos(todos.filter((item,i)=> i !== idx))
  }

  return (
    <Context.Provider value = {{ removeTodoItem }}>
      <div className="wrapper">
        <h1>React tuturial</h1>
        <AddTodo onCreate = {addTodo}/>
        {todos.length ?<TodoList todos = {todos} onCheck = {toggleToDo}/>:<p>No todos</p>}
      </div>
    </Context.Provider>
  );
}

export default App;
