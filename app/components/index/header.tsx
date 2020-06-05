import * as React from "react"
import style from './index.css'
import { FILTERTYPE } from "../../config/interface"
import { filterTypeState } from '../../recoil'
import { useRecoilState } from 'recoil'
const FILETEXTARR = ['全部', '未完成', '已完成']
export const Header: React.FC = (): React.ReactElement => {
  console.log('-- Header 渲染')
  const arr: React.ReactElement[] = []
  const [filterType, setFilterType] = useRecoilState(filterTypeState)
  const handlefilterBtn = (e: React.MouseEvent<HTMLDivElement>): void => {
    const ele: HTMLDivElement = e.target as HTMLDivElement
    const type: FILTERTYPE = Number(ele.getAttribute('data-index'))
    setFilterType(type)
  }
  FILETEXTARR.map((item: string, index: number) => {
    const className = index == filterType ? style.filterItemActive : style.filterItem
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