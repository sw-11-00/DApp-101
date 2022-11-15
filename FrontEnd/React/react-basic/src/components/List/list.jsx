import React, { Component } from 'react';
import PropType from 'prop-types'
import Item from '../Item/item'
import './list.css'

class List extends Component {

  static propTypes = {
    todos: PropType.array.isRequired,
    show: PropType.func.isRequired,
    deleteById: PropType.func.isRequired,
  }

  render() {
    const { todos } = this.props;
    return (

      <ul className="todo-main">
        {
          todos.map((todo) => {
            return <Item key={todo.id} {...todo} createCheck={this.props.show} deleteById={this.props.deleteById} />
          })
        }
      </ul>
    );
  }
}

export default List;