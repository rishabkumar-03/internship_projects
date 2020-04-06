import React from 'react';
import './App.css';
import TrelloList from './Components/trello-list';
import { connect } from 'react-redux';
import './Components/trello-list.css';
import TrelloActionButton from './Components/trelloActionButton';
import logo from './trello2copy.jpg';
import { DragDropContext } from 'react-beautiful-dnd';


class App extends React.Component {
  onDragEnd = () => {
    //render after drsg
  };
  render() {
    const { lists } = this.props;

    

    return (
      <div>
        <header style={ styles.headerContent}>
          <input type="search" placeholder="Search.."  style={ { margin: "2px", padding: "3px", maxHeight: "40px", maxWidth: "200px"}}/>
          <img src={logo}  alt=" trello" style={{ minWidth: "10px", minHeight: "10px"}}/>
        </header>
        <DragDropContext onDragEnd={ this.onDragEnd }>
          <div className="App">
            { lists.map( list => <TrelloList  listId={ list.id} key={list.id} title={ list.title} cards={ list.cards } /> ) } 
            <TrelloActionButton list />
          </div>
        </DragDropContext>
        
      </div>
    );
  }
}

const styles = {
  headerContent: {
    backgroundColor: "rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    height: "100%"
  }
};


  
  const mapStateToProps = state => ({
    lists: state.lists
  });

export default connect(mapStateToProps)(App);
