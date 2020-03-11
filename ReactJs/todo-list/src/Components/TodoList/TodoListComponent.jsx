import React from 'react';
import './TodoListComponent.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function TodoListComponent(props){
    const items = props.items;
    const listItems = items.map(item => {
       return <div className="list-display" key={item.key}>
           <p>  
                {item.text}
                <span>
                <FontAwesomeIcon className="font-icon" icon="trash" onClick ={ () => props.deleteItem(item.key)} ></FontAwesomeIcon>
                </span>
                <span><input type="checkbox" onClick={ () => props.hideItem(item.key)}/></span>
           </p>
           
       </div>
    }
        )
    return(
        <div>{listItems}</div>
    );
}
export  default TodoListComponent;