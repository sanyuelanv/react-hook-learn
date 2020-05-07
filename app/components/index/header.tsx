import * as React from "react"
import style from './index.css'
import { FILTERTYPE } from "../../config/interface"
const FILETEXTARR = ['全部', '未完成', '已完成']
interface HeaderProps {
  filterType: FILTERTYPE;
  setFilterType: React.Dispatch<React.SetStateAction<FILTERTYPE>>;
}
const MyHeader = (props: HeaderProps): React.ReactElement => {
  console.log('Header 渲染')
  const handlefilterBtn = (e: React.MouseEvent<HTMLDivElement>): void => {
    const ele: HTMLDivElement = e.target as HTMLDivElement
    const type: FILTERTYPE = Number(ele.getAttribute('data-index'))
    props.setFilterType(type)
  }
  const arr: React.ReactElement[] = []
  FILETEXTARR.map((item: string, index: number) => {
    const className = index == props.filterType ? style.filterItemActive : style.filterItem
    arr.push(
      <div data-index={index} key={index} className={className}> {item} </div>
    )
  })
  return (
    <div onClick={handlefilterBtn} className={style.filterBox}>
      {arr}
    </div>
  )
}
export const Header = (props: HeaderProps): React.ReactElement => {
  return React.useMemo(() => {
    return <MyHeader {...props} />
  }, [props.filterType])
}