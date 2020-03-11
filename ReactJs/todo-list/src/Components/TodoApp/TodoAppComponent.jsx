import React from 'react';
import HeaderComponent from '../Header/HeaderComponent';
import TodoListComponent from '../TodoList/TodoListComponent';
import WrapperComponent from '../Wrapper/WrapperComponent';
import TodoItemComponent from '../TodoItem/TodoItemComponent';
import TodoFilterComponent from '../TodoFilter/TodoFilterComponent';

class TodoAppComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
          items : [],
          currentItem : {
            text: '',
            key: ''
          }
        }
        // this.handleInput=this.handleInput.bind(this);
        // this.addItem=this.addItem.bind(this);
        // this.deleteItem=this.deleteItem.bind(this);
    
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
    render() {
        const { currentItem, items } = this.state;
        return(
            <WrapperComponent>
                <HeaderComponent />
                <TodoItemComponent currentItem={currentItem} addItem={() => this.addItem()} handleInput={(e) => this.handleInput(e)} />
                <TodoListComponent items={items} deleteItem={(key) => this.deleteItem(key)}></TodoListComponent>
                <TodoFilterComponent />
            </WrapperComponent>
        );
    }
};

export default TodoAppComponent;
