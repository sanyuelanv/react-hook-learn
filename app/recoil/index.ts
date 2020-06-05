import { FILTERTYPE, TodoItem } from '../config/interface'
import { STORAGE_KEY, getByLocalStorage } from '../config/help'
import { atom, RecoilState, RecoilValueReadOnly, selector, useSetRecoilState, ReadWriteSelectorOptions } from 'recoil'

export const filterTypeState: RecoilState<FILTERTYPE> = atom({
  key: 'filterTypeState',
  default: FILTERTYPE.all
})
export const todoListAtomState: RecoilState<TodoItem[]> = atom({
  key: 'todoListAtomState',
  default: getByLocalStorage(STORAGE_KEY, []),
})
export const todoListState: RecoilState<TodoItem[]> = selector({
  key: 'todoListState',
  get: ({ get }) => {
    return get(todoListAtomState)
  },
  set: ({ set }, newValue: TodoItem[]): void => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(newValue))
    set(todoListAtomState, newValue)
  }
})
export const filterTodoListState: RecoilValueReadOnly<TodoItem[]> = selector({
  key: 'filterTodoListState',
  get: ({ get }) => {
    const filterType = get(filterTypeState)
    const todoList = get(todoListAtomState)
    switch (filterType) {
      case FILTERTYPE.active: {
        return todoList.filter((item: TodoItem) => { return item.type == FILTERTYPE.active })
      }
      case FILTERTYPE.completed: {
        return todoList.filter((item: TodoItem) => { return item.type == FILTERTYPE.completed })
      }
      default: {
        return todoList
      }
    }
  }
})