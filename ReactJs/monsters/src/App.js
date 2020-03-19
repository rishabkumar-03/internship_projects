import React, {Component} from 'react';
import './App.css';
import {CardList} from './Components/card-list/card-list.component';
import {SearchBox} from './Components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField : ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}));
  }

  render() {
    const monsters = this.state.monsters;
    const searchField = this.state.searchField;
    const filetredMonters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <SearchBox placeholder='Search Monsters' handleChange={ e => this.setState({ searchField :  e.target.value })} />
        <CardList monsters={filetredMonters} />
        
      </div>
    );
 }
}

export default App;
