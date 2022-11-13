React是一个将数据渲染为HTML视图的开源JavaScript



### 特点

1. 声名式
   1. 开发者负责描述，React负责渲染UI，并在数据变化时更新UI
2. 基于组件(最重要) 
3. 学习一次，随处使用
   1. Web应用
   2. 移动端原生应用(react-native)
   3. VR(react360)

4. 使用虚拟DOM + 优秀的Diffing算法，尽量减少与真实DOM的交互



### 组件

1. 函数式组件
2. 类式组件

### 组件实例的三大属性

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
