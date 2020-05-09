import * as React from "react"
import style from './index.css'
import { useStorageValue } from "../../config/index"
import { FILTERTYPE, TodoItem } from "../../config/interface"
import { AddBox } from "./addBox"
import { STORAGE_KEY } from "../../config/help"
import { Header } from "./header"
import { List } from "./list"


export const Index: React.FC = (): React.ReactElement => {
  console.log('Index 渲染')
  // 数据
  const [filterType, setFilterType] = React.useState<FILTERTYPE>(FILTERTYPE.all)
  const [todoList, setTodoList] = useStorageValue<TodoItem[]>(STORAGE_KEY, [])
  return (
    <div className={style.app}>
      <Header filterType={filterType} setFilterType={setFilterType} />
      <List
        filterType={filterType}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <AddBox
        setTodoList={setTodoList}
      />
    </div>
  )
} 