import React, { Component } from 'react';
import CardList from './CardList';
import { items } from './items';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            items: items,//the state describes the items and searchfield within the app
            searchfield: ''
        }
    }

onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
}

    render() {
    const filteredItems = this.state.items.filter(items =>{//it can be 2nd items....
    return items.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
    return (
        <div className='tc'>
        <h1 className='f1'>Item Sorter</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList items={filteredItems}/>
        </div>
    );
}
}

export default App;