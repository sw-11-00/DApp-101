import React, { Component } from 'react'
import PropType from 'prop-types'
import './header.css'

export default class Header extends Component {

  static propTypes = {
    code: PropType.func.isRequired
  }


  handleKeyUp = (event) => {
    // 解构赋值，获取KeyCode、target
    const { target, keyCode } = event
    // 判断是否是回车按键
    if (keyCode !== 13) return
    if (target.value.trim() === '') {
      alert("输入的不能为空");
      return
    }
    this.props.code(target.value);
    target.value = "";
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}