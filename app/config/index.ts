import * as React from "react"
import { TodoItem } from "./interface"
export const useTodoList = (key: string, def: TodoItem[]): [TodoItem[], React.Dispatch<React.SetStateAction<TodoItem[]>>] => {
  const [todoList, setValue] = React.useState<TodoItem[]>((): TodoItem[] => {
    try {
      const value = window.localStorage.getItem(key)
      return value ? JSON.parse(value) as TodoItem[] : def
    } catch (error) {
      return def
    }
  })
  // 对齐 useState 的功能：参数可能是一个值 / 函数
  const setTodoList = (value: React.SetStateAction<TodoItem[]>): void => {
    let myValue
    if (value instanceof Function) {
      setValue((v) => {
        myValue = value(v)
        return myValue
      })
    }
    else {
      myValue = value
      setValue(value)
    }
    try {
      window.localStorage.setItem(key, JSON.stringify(myValue))
    } catch (error) {

    }
  }
  return [todoList, setTodoList]
}
