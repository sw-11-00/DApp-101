//创建外壳组件APP
import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

class App extends Component {

    click = () => {
        axios.get('http://localhost:3000/students').then(
            result => { console.log("这个成功", result.data) },
            error => { console.log("失败", error) }
        )
    }

    render() {
        return (
            <div >
                <button onClick={this.click}>点击我</button>

            </div>
        )
    }
}

export default App  