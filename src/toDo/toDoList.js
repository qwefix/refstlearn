import React from 'react';
import PropTypes from 'prop-types'
import TodoListItem from './ToDoItem';
const styles = {
    ul:{
        listStyle: 'none',
        margin: 0,
        padding: 0,
    }
}

function TodoList(props){
    return(
        <ul style = {styles.ul}>
            {props.todos.map((todo, idx) =>{
                return <TodoListItem 
                    todo = {todo} 
                    key = {todo.id} 
                    index = {idx} 
                    onCheck = {props.onCheck}
                />
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onCheck: PropTypes.func.isRequired,

}
export default TodoList