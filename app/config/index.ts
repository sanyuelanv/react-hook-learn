import * as React from "react"
export const useStorageValue = <T>(key: string, def: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [val, setVal] = React.useState<T>((): T => {
    try {
      const storageValue = window.localStorage.getItem(key)
      return storageValue ? JSON.parse(storageValue) as T : def
    } catch (error) {
      return def
    }
  })
  // 对齐 useState 的功能：参数可能是一个值 / 函数
  const setMyValue = (value: React.SetStateAction<T>): void => {
    let myValue
    if (value instanceof Function) {
      setVal((v) => {
        myValue = value(v)
        return myValue
      })
    }
    else {
      myValue = value
      setVal(value)
    }
    try {
      window.localStorage.setItem(key, JSON.stringify(myValue))
    } catch (error) {

    }
  }
  return [val, setMyValue]
}
