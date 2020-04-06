import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
    return(
        <div>
            <h2>I am a counter !</h2>
            <p>Count: {props.count}</p>
            <button onClick={ props.IncrementOnClick}>Incerement</button>
        </div>
    ) 
}

function mapStateToProps(state){
    return {
        count: state.count
    }
}

function mapDispatchToProps(dispatch){
    return{
        IncrementOnClick : () => {
            const action = { type: 'INCREMENT'};
            dispatch(action); 
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);