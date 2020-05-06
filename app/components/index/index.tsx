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
        <div className={style.todoItem}>
          <div className={style.todoItemContent}>事项1</div>
          <div className={style.todoItemTime}>2010-10-10 10:00:01</div>
        </div>
        <div className={style.todoItem}>
          <div className={style.todoItemContent}>事项2</div>
          <div className={style.todoItemTime}>2010-10-10 10:00:02</div>
        </div>
        <div className={style.todoItem}>
          <div className={style.todoItemContent}>事项3事项3事项3事项3事项3事项3事项3事项3事项3事项3事项3</div>
          <div className={style.todoItemTime}>2010-10-10 10:00:03</div>
        </div>
        <div className={style.todoItem}>
          <div className={style.todoItemContentCompleted}>完成事项</div>
          <div className={style.todoItemTime}>2010-10-10 10:00:04</div>
        </div>
      </div>
      <div className={style.addBox}>
        <input className={style.addInput} type='text' />
        <div className={style.addButton}>添加</div>
      </div>
    </div>
  )
} 