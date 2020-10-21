import React, {Component} from 'react';
import './App';
import List from './components/List';

class App extends Component {
    constructor () {
        super();
        this.state = {

        }
    }

    render() {
        return(
        <div className='App'>
            <h1 className='movieList'>The Most Amazing Movie List</h1>
            <List/>
        </div>
        )
    }
}

export default App