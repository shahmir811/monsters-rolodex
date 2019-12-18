import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

// Importing components
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  state = {
    monsters: [],
    searchField: ''
  };

  async componentDidMount() {
    let response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    this.setState({
      monsters: response.data
    });
  }

  handleChange = e => {
    this.setState({
      searchField: e.target.value
    });
  };

  render = () => {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='Search monster'
          searchField={this.state.searchField}
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  };
}

export default App;
