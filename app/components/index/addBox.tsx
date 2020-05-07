import * as React from "react"
import style from './index.css'
import { formatDate } from "../../config/help"
import { TodoItem, FILTERTYPE } from "../../config/interface"

interface AddBoxProps {
  addBtnEvent: (todoItem: TodoItem) => void;
}
/*
 该组件无须接收上层组件的数据，只需要把数据返回给上一层
 如果 把 MyAddBox 变成 AddBox export 给 index 用的话
 console.log('AddBox 渲染') 的执行情况会怎么样
*/
const MyAddBox = (props: AddBoxProps): React.ReactElement => {
  console.log('AddBox 渲染')
  // 数据
  const [inputContent, setInputContent] = React.useState<string>('')
  // 逻辑
  const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
    setInputContent(e.currentTarget.value)
  }
  const handleAddBtn = (): void => {
    const newTodoItem: TodoItem = {
      content: inputContent,
      type: FILTERTYPE.active,
      ts: formatDate(new Date())
    }
    setInputContent('')
    props.addBtnEvent(newTodoItem)
  }
  const hanleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if(e.keyCode == 13 && inputContent.length > 0){
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
export const AddBox = (props: AddBoxProps): React.ReactElement => {
  return React.useMemo(() => {
    return <MyAddBox {...props} />
  }, [])
}