import * as React from "react"
import style from './index.css'
export const Index = (): React.ReactElement => {
  return (
    <div className={style.app}>
      <div className={style.filterBox}>
        <div className={style.filterItem}>全部</div>
        <div className={style.filterItemActive}>未完成</div>
        <div className={style.filterItem}>已完成</div>
      </div>
      <div className={style.todoList}>
        <div className={style.todoItem}>事项1</div>
        <div className={style.todoItem}>事项2</div>
        <div className={style.todoItem}>事项3事项3事项3事项3事项3事项3事项3事项3事项3事项3事项3</div>
        <div className={style.todoItemCompleted}>完成事项</div>
      </div>
      <div className={style.addBox}>
        <input className={style.addInput} type='text' />
        <div className={style.addButton}>添加</div>
      </div>
    </div>
  )
} 