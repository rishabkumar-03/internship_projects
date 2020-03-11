import React from 'react';
import logo from './logo.svg';
import './App.css';
import Listitem from './listitem.js';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items : [],
      currentItem : {
        text: '',
        key: ''
      }
    }
    this.handleInput=this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);

  }
  handleInput(e){
    this.setState({
      currentItem : {
        text : e.target.value,
        key : Date.now()
      }
    });
  }
  deleteItem(key){
    const filteredItem = this.state.items.filter( item => item.key !== key);
    this.setState({
      items : filteredItem

    })
  }
  hideItem(key){

  }
  addItem(e){
    e.preventDefault();
    const newItem=this.state.currentItem;
    console.log(newItem);
    if(newItem.text !== ""){
      const newItems=[...this.state.items,newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text:'',
          key: ''
        }
      });
    }

  }
  render(){
    return(
      <div className="list-container">
        <h1 className="heading">to-Dos</h1>
        <header>
            <form id="to-do-list" onSubmit={this.addItem}>
              <input type="text" placeholder="Enter an item !"  value={this.state.currentItem.text} onChange={this.handleInput}/>
              <button type="submit">ADD ITEM</button>
            </form>
        </header>
        <Listitem items={this.state.items} deleteItem={this.deleteItem}></Listitem>
        <footer>
          <button type="submit" onClick={this.showall}>ALL</button>
          <button type="submit" onClick={this.show_active}>ACTIVE</button>
          <button type="submit" onClick={this.show_done}>COMPLETED</button>
        </footer>
      </div>
      
    );
  }
 
}

export default App;
