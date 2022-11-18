import React, { Component } from 'react'
import Header from './header/header';
import List from './list/list'

class App extends Component {

    render() {
        return (
            <div className="container">
                <Header />

                <List />
            </div>

        )
    }
}

export default App  