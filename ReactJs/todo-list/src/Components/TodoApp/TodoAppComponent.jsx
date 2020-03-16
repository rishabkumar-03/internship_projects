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
            key: '',
            status: false
          }
        }
        // this.handleInput=this.handleInput.bind(this);
        // this.addItem=this.addItem.bind(this);
        // this.deleteItem=this.deleteItem.bind(this);
        //  this.handleStatus=this.handleStatus.bind(this);

    
    }
    handleInput(e){
        const currentItemFromState = this.state.currentItem;
        currentItemFromState.text = e.target.value;
        this.setState({
            currentItem: currentItemFromState
        }, () => console.log(this.state));
    }

    deleteItem(key){
        const filteredItem = this.state.items.filter( item => item.key !== key);
        this.setState({
            items : filteredItem
        })
    }
    
    addItem(e){
        const newItem=this.state.currentItem;
        newItem.key = Date.now();
        if (newItem.text !== "") {
            const newItemsArray = [
                ...this.state.items,
                newItem
            ];
            this.setState({
                items: newItemsArray,
                currentItem: {
                    text:'',
                    key: '',
                    status: false
                }
            });
        }
    }
    handleStatus(index) {
        const itemFromList = this.state.items[index];
        
       // console.log(itemFromList.state);
    }
    render() {
        const { currentItem, items } = this.state;
        return(
            <WrapperComponent>
                <HeaderComponent />
                <TodoItemComponent currentItem={currentItem} addItem={() => this.addItem()} handleInput={(e) => this.handleInput(e)} />
                <TodoListComponent items={items} deleteItem={(key) => this.deleteItem(key)} handleStatus = { (key) => this.handleStatus(key)}></TodoListComponent>
                <TodoFilterComponent />
            </WrapperComponent>
        );
    }
};

export default TodoAppComponent;
