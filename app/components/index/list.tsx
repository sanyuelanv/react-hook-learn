import * as React from 'react'
import { cloneDeep } from "lodash"
import style from './index.css'
import { TodoItem, FILTERTYPE } from '../../config/interface'
import { filterTodoListState, todoListState } from '../../recoil'
import { useRecoilValue, useSetRecoilState } from 'recoil'
// import { AppContext } from '../../store'
export const List: React.FC = (): React.ReactElement => {
  console.log('-- List 渲染')
  const arr: React.ReactElement[] = []
  const setTodoList = useSetRecoilState(todoListState)
  // setToDoList
  const todoList: TodoItem[] = useRecoilValue(filterTodoListState)
  const handleChangeItemState = (e: React.MouseEvent<HTMLDivElement>): void => {
    const ele: HTMLDivElement = e.target as HTMLDivElement
    const index: string | null = ele.getAttribute('data-index')
    if (index != null) {
      const pos = Number(index)
      setTodoList((list: TodoItem[]): TodoItem[] => {
        const newTodoList: TodoItem[] = cloneDeep(list)
        const currentItem: TodoItem = todoList[pos]
        for (let index = 0; index < newTodoList.length; index++) {
          const item: TodoItem = newTodoList[index]
          if (item.ts == currentItem.ts && item.content == currentItem.content && item.type == currentItem.type) {
            item.type = item.type == FILTERTYPE.active ? FILTERTYPE.completed : FILTERTYPE.active
          }
        }
        return newTodoList
      })
    }
  }
  for (let index = todoList.length - 1; index >= 0; index--) {
    const item: TodoItem = todoList[index]
    arr.push(
      <div
        data-index={index}
        key={index}
        className={style.todoItem}
      >
        <div className={item.type == FILTERTYPE.completed ? style.todoItemContentCompleted : style.todoItemContent}>{item.content}</div>
        <div className={style.todoItemTime}>{item.ts}</div>
      </div>
    )
  }
  return (
    <div onClick={handleChangeItemState} className={style.todoList}> {arr} </div>
  )
}