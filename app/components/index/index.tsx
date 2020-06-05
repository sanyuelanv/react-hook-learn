import * as React from "react"
import style from './index.css'
import { AddBox } from "./addBox"
import { Header } from "./header"
import { List } from "./list"


export const Index: React.FC = (): React.ReactElement => {
  console.log('Index 渲染')
  // 数据
  return (
    <div className={style.app}>
      <Header />
      <List />
      <AddBox />
    </div>
  )
} 