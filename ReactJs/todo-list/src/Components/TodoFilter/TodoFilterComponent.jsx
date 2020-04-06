import React from 'react';

function TodoFilterComponent(props) {
    const {displayActivelist,displayCompleted,items} = props;
   return( 
       <div>
            <button >ALL</button>
            <button onClick={ e => displayActivelist(e)}>ACTIVE</button>
            <button onClick = { e => displayCompleted(e)} >COMPLETED</button>
        </div>
   )
}
export default TodoFilterComponent;