import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemEntry from './ItemEntry.js';
import DeleteItem from './DeleteItem.js';
import ItemList from './ItemList.js';

class App extends React.Component {
  state = {
    items: [],
  };

  addItem = item => {
    this.setState(oldState => ({
      items: [...oldState.items, item],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
		<ItemEntry addItem={this.addItem} addButton={this.addItem}/>
		<DeleteItem itemList={this.state.items} deleteAction={this.deleteLastItem}/>
        <ItemList items={this.state.items} />
      </div>
    );
  }
}

export default App;
