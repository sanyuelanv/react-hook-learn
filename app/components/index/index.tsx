import * as React from "react"
import { cloneDeep } from "lodash"
import style from './index.css'
import { useTodoList } from "../../config/index"
import { FILTERTYPE, TodoItem } from "../../config/interface"
import { AddBox } from "./addBox"
import { STORAGE_KEY } from "../../config/help"
import { Header } from "./header"
import { List } from "./list"


export const Index = (): React.ReactElement => {
  console.log('Index 渲染')
  // 数据
  const [filterType, setFilterType] = React.useState<FILTERTYPE>(FILTERTYPE.all)
  const [todoList, setTodoList] = useTodoList(STORAGE_KEY, [])
  // 逻辑
  const addBtnEvent: (todoItem: TodoItem) => void = (todoItem: TodoItem): void => {
    // 避免 todoList 不改变,采用函数式改变。
    // 如果不采用函数式的话会一直不变。因为 addBtnEvent 是需要传入到 AddBox（useMemo） 内部的，但是 todoList 确没有关联 AddBox
    setTodoList((myTodoList: TodoItem[]): TodoItem[] => {
      const newTodoList: TodoItem[] = cloneDeep(myTodoList)
      newTodoList.push(todoItem)
      return newTodoList
    })
  }
  return (
    <div className={style.app}>
      <Header filterType={filterType} setFilterType={setFilterType} />
      {/* {renderTodoList()} */}
      <List
        filterType={filterType}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <AddBox addBtnEvent={addBtnEvent} />
    </div>
  )
} 