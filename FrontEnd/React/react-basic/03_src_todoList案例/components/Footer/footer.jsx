import React, { Component } from 'react';
import './footer.css'
class Footer extends Component {


  chose = (event) => {
    this.props.choseAll(event.target.checked)
  }

  Alldelete = () => {
    this.props.Alldelete();
  }



  render() {

    const { todos } = this.props.allCheck;
    const sum = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)

    return (
      <div className="todo-footer">
        <label>
          <input onChange={this.chose} type="checkbox" checked={sum === todos.length && todos.length !== 0 ? true : false} />
        </label>
        <span>
          <span>已完成{sum}</span> / 全部{todos.length}
        </span>
        <button onClick={this.Alldelete} className="btn btn-danger">清除已完成任务</button>
      </div>
    );
  }
}

export default Footer;