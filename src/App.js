import TodoList from './toDo/toDoList';
import React from 'react';

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

  return (
    <div className="wrapper">
      <h1>React tuturial</h1>
      <TodoList todos = {todos} onCheck = {toggleToDo}/>
    </div>
  );
}

export default App;
