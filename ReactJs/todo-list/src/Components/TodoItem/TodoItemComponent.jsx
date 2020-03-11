import React from 'react';

function TodoItemComponent(props) {
    const { currentItem, addItem, handleInput } = props;
    return (
        <div>
            <input type="text" placeholder="Enter an item !"  value={currentItem.text} onChange={handleInput}/>
            <button onClick={addItem}>ADD ITEM</button>
        </div>
        
    )
}
export default TodoItemComponent;
