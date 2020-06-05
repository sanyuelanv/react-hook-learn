const needAddZero = (num: number): string => {
  return num < 10 ? `0${num}` : num.toString()
}

export const STORAGE_KEY = 'todoList'
export const formatDate = (date: Date): string => {
  const Y = date.getFullYear()
  const M = needAddZero(date.getMonth() + 1)
  const D = needAddZero(date.getDate())
  const h = needAddZero(date.getHours())
  const m = needAddZero(date.getMinutes())
  const s = needAddZero(date.getSeconds())
  return `${Y}-${M}-${D} ${h}:${m}:${s}`
}

export const getByLocalStorage = <T>(key: string, def: T): T => {
  try {
    const storageValue = window.localStorage.getItem(key)
    return storageValue ? JSON.parse(storageValue) as T : def
  } catch (error) {
    return def
  }
}