import React from 'react';

function TodoItem(props) {
    console.log(props)
    const deleteItem = () => {
        
    }
    return (
        <div>
            {props.item}
            <button onClick={deleteItem}>삭제</button>
        </div>
    );
}

export default TodoItem;