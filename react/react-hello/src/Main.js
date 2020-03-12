import React from 'react'
import './main.css'
import Pra from './Pra'
const Main = () => {
  return (
    <div className="main">
      <Pra title='声明式' onePra='React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据改变时 React 能有效地更新并正确地渲染组件。' />
      <Pra title='声明式' onePra='React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据改变时 React 能有效地更新并正确地渲染组件。' />
      <Pra onePra='React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据改变时 React 能有效地更新并正确地渲染组件。' />
    </div>
  )
}
export default Main