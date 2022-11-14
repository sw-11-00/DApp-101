React是一个将数据渲染为HTML视图的开源JavaScript



### 1. 特点

1. 声名式
   1. 开发者负责描述，React负责渲染UI，并在数据变化时更新UI
2. 基于组件(最重要) 
3. 学习一次，随处使用
   1. Web应用
   2. 移动端原生应用(react-native)
   3. VR(react360)

4. 使用虚拟DOM + 优秀的Diffing算法，尽量减少与真实DOM的交互



### 2. 组件

1. 函数式组件
2. 类式组件

#### 2. 1组件实例的三大属性

1. props
   1. 每个组件对象都有props(properties)属性
   2. 组件标签的所有属性都保存在props中
   3. 作用
      1. 通过标签属性从组件外向组件内传递变化的数据
      2. 组件内部不要修改props数据
2. refs
   1. 组件内的标签可以定义ref属性来标识自己
   2. 编码
      1. 字符串 <input ref="input1"/>
         1. 不被推荐，效率问题
      2. 回调形式 <input ref={(c) => {this.input1 = c}}/>
      3. createRef创建的ref容器 myRef = React.createRef()
3. state
   1. 是组件对象里最重要的属性，值是对象(可以包含多个key-value的组合)
   2. 组件被称为"状态机"，通过更新组件的state来更新对应的页面显示(重新渲染组件)
   3. 注意
      1. 组件中render方法中的this为组件实例对象
      2. 组件自定义中的this为undefined，a，强制绑定this：通过函数对象的bind()，b，箭头函数
      3. 状态数据，不能直接修改或者更新



### 3. 事件处理

1. 通过onXxx属性指定事件处理函数(注意大小写)
   1. React使用的是自定义(合成)事件，而不是使用原生的DOM事件
   2. React中的事件是通过事件委托方式处理的(委托给组件最外层的元素)
2. 通过event.target得到发生事件的DOM元素对象



### 4. 收集表单数据

#### 4.1 受控组件

​	随着输入维护状态

#### 4.2 非受控组件

​	现用现取



### 5. 组件生命周期

1. 组件从创建到死亡会经历一些特定的阶段
2. React组件中包含一系列钩子函数(生命周期回调函数)，会在特定的时刻调用
3. 我们在定义组件时，会在特定的生命周期回调函数中做特定的工作

#### 5.1 生命周期的三个阶段(旧)

1. 初始化阶段：由ReactDOM.render()触发 - 初次渲染
   1. constructor()
   2. componentWillMount()
   3. render()
   4. componentDidMount() - 常用
      1. 一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息
2. 更新阶段：由组件内部this.setState()或父组件重新render触发
   1. shouldComponentUpdate()
   2. componentWillUpdate()
   3. render()
   4. componentDidUpdate()
3. 卸载组件：由ReactDOM.unmountComponentAtNode()触发
   1. componentWillUnmount() - 常用
      1. 一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息

#### 5.2 生命周期的三个阶段(新)

1. 初始化阶段：由ReactDOM.render()触发 - 初次渲染
   1. constructor()
   2. getDerivedStateFromProps
   3. render()
   4. componentDidMount()
2. 更新阶段：由组件内部this.setState()或父组件重新render触发
   1. getDerivedStateFromProps
   2. shouldComponentUpdate()
   3. render()
   4. getSnapshotBeforeUpdate
   5. componentDidUpdate()
3. 卸载组件：由ReactDOM.unmountComponentAtNode()触发
   1. componentWillUnamount()
4. 重要的钩子
   1. Render：初始化渲染或者更新渲染调用
   2. componentDidMount：开启监听，发送ajax请求
   3. componentWillUnmount：做一些收尾的工作，如：清理定时器
5. 即将废弃的钩子
   1. componentWillMount
   2. componentWillReceiveProps
   3. componentWillUpdate





