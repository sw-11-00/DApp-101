import React, { Component } from 'react'
import Header from './header/header';
import List from './list/list'

class App extends Component {

    state = {
        Git: [],
        isFrist: true,
        isLoad: false,
        isError: ''
    }

    updateAppState = (stateObj) => {
        this.setState(stateObj)
    }

    render() {
        return (
            <div className="container">
                <Header updateAppState={this.updateAppState} />

                <List {...this.state} />
            </div>

        )
    }
}

export default App  