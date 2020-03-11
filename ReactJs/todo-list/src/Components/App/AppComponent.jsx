import React from 'react';
import './AppComponent.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import TodoAppComponent from '../TodoApp/TodoAppComponent';

library.add(faTrash);

class App extends React.PureComponent{
  render(){
    return(
      <TodoAppComponent />
    );
  }
 
}

export default App;
