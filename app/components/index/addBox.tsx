import * as React from "react"
import style from './index.css'
import { formatDate } from "../../config/help"
import { cloneDeep } from "lodash"
import { TodoItem, FILTERTYPE } from "../../config/interface"
import { useSetRecoilState } from "recoil"
import { todoListState } from "../../recoil"

export const AddBox: React.FC = (): React.ReactElement => {
  console.log('-- AddBox 渲染')
  // 数据
  const [inputContent, setInputContent] = React.useState<string>('')
  const setTodoList = useSetRecoilState(todoListState)
  // 逻辑
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputContent(e.currentTarget.value)
  }
  const handleAddBtn = (): void => {
    if(inputContent.length <= 0) return
    const newTodoItem: TodoItem = {
      content: inputContent,
      type: FILTERTYPE.active,
      ts: formatDate(new Date())
    }
    setInputContent('')
    setTodoList((myTodoList: TodoItem[]): TodoItem[] => {
      const newTodoList: TodoItem[] = cloneDeep(myTodoList)
      newTodoList.push(newTodoItem)
      return newTodoList
    })
  }
  const hanleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.keyCode == 13 && inputContent.length > 0) {
      handleAddBtn()
    }
  }
  return (
    <div className={style.addBox}>
      <input
        value={inputContent}
        onKeyUp={hanleKeyUp}
        onChange={handleInput}
        className={style.addInput}
        type='text'
      />
      <div onClick={handleAddBtn} className={style.addButton}>添加</div>
    </div>
  )
}
