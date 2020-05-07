import * as React from 'react'
import { cloneDeep } from "lodash"
import style from './index.css'
import { TodoItem, FILTERTYPE } from '../../config/interface'
interface ListProps {
  todoList: TodoItem[];
  filterType: FILTERTYPE;
  setTodoList: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}
const MyList = (props: ListProps): React.ReactElement => {
  console.log('List 渲染')
  const handleChangeItemState = (e: React.MouseEvent<HTMLDivElement>): void => {
    const ele: HTMLDivElement = e.target as HTMLDivElement
    const index: string | null = ele.getAttribute('data-index')
    if (index != null) {
      const pos = Number(index)
      const newTodoList: TodoItem[] = cloneDeep(props.todoList)
      newTodoList[pos].type = newTodoList[pos].type == FILTERTYPE.active ? FILTERTYPE.completed : FILTERTYPE.active
      props.setTodoList(newTodoList)
    }
  }
  const arr: React.ReactElement[] = []
  for (let index = props.todoList.length - 1; index >= 0; index--) {
    const item: TodoItem = props.todoList[index]
    let className = style.todoItemContent
    let flag = true
    if ((props.filterType == FILTERTYPE.active && item.type == FILTERTYPE.completed) || props.filterType == FILTERTYPE.completed && item.type == FILTERTYPE.active) {
      flag = false
    }

    if (flag) {
      if (item.type == FILTERTYPE.completed) {
        className = style.todoItemContentCompleted
      }
      arr.push(
        <div
          data-index={index}
          key={index}
          className={style.todoItem}
        >
          <div className={className}>{item.content}</div>
          <div className={style.todoItemTime}>{item.ts}</div>
        </div>
      )
    }

  }
  return (
    <div onClick={handleChangeItemState} className={style.todoList}> {arr} </div>
  )
}
export const List = (props: ListProps): React.ReactElement => {
  return React.useMemo(() => {
    return <MyList {...props} />
  }, [props.filterType, props.todoList])
}