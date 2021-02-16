import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    li:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:'.5rem 1rem',
        border:'1px solid #ccc',
        borderRadius:'5px',
        marginBottom:'.5rem',
    },
    input:{
        marginRight:'1rem',
    }
}

function TodoListItem({todo , index, onCheck}){
    const  classes =[];
    if(todo.completed) {
        classes.push('done')
    } 
    return(
        <li style = {styles.li}>
            <span className={classes.join(' ')}>
                <input 
                    style={styles.input}
                    checked = {todo.completed}
                    type='checkbox' 
                    onChange = {()=>onCheck(todo.id)}
                />
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>
            <button className='rm'>&times;</button>
        </li>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onCheck: PropTypes.func.isRequired,
}

export default TodoListItem;