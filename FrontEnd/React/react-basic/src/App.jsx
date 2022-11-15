import React, { Component } from 'react'
import './App.css'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import List from './components/List/list'

class App extends Component {

  state = {
    todos: [
      { id: 1, name: "吃饭", done: true },
      { id: 2, name: "睡觉", done: false },
      { id: 3, name: "打代码", done: true },
    ]
  }

  code = (value) => {

    const { todos } = this.state;
    let p = { id: (todos.length + 1), name: value, done: false }
    this.setState({ todos: [p, ...todos] });
  }


  checked = (id, checked) => {
    const { todos } = this.state;
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: checked };
      }
      return todo;
    })
    this.setState({ todos: newTodo })

  }

  deleteById = (id) => {
    const { todos } = this.state;
    const newTo = todos.filter((todo) => {
      return todo.id !== id
    })
    this.setState({ todos: newTo })
  }

  choseAll = (done) => {
    const { todos } = this.state

    const newTo = todos.map((todo) => {
      return { ...todo, done };
    })
    this.setState({ todos: [...newTo] })
  }


  Alldelete = () => {
    const { todos } = this.state;
    const newTo = todos.filter((todo) => {
      return todo.done !== true
    })
    this.setState({ todos: newTo })
  }


  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header code={this.code} />
          <List todos={this.state.todos} show={this.checked} deleteById={this.deleteById} />
          <Footer allCheck={this.state} choseAll={this.choseAll} Alldelete={this.Alldelete} />
        </div>

      </div>
    )
  }
}

export default App  