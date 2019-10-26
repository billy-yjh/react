import React from 'react'
import './pager.css'
export default function Pager(props) {
  const pageNum = getPageNumber(props)
  if(pageNum === 0){
    return null;
  }
  const minNum = getMinNumber(props)
  const maxNum = getMaxNumber(minNum,pageNum, props)
  const numbers = []
  for(let i = minNum; i <= maxNum; i++){
    numbers.push(<span key={i + 'a'} onClick={() => {toPage(i, props)}} className={i === props.current ? 'item active' : 'item'}>{i}</span>)
  }
  return (
    <>
      <div className="wrapper">
        <span onClick={() => {toPage(1, props)}} className={props.current === 1 ? "item disable" : "item"}>首页</span>
        <span onClick={() => {toPage(props.current - 1 < 1 ? 1 : props.current - 1, props)}} className={props.current === 1 ? "item disable" : "item"}>上一页</span>
        {numbers}
        <span onClick={() => {toPage(props.current + 1 > pageNum ? pageNum : props.current + 1, props)}} className={props.current === pageNum ? "item disable" : "item"}>下一页</span>
        <span onClick={() => {toPage(pageNum, props)}} className={props.current === 1 ? "item disable" : "item"} className={props.current === pageNum ? "item disable" : "item"}>尾页</span>
        <span  className="current">{props.current}</span>/
        <span>{pageNum}</span>

      </div>
    </>
  )
}

function getPageNumber(props){
  return Math.ceil(props.total / props.limit);
}

function toPage(target ,props){
  if(props.current === target){
    return 
  }
  props.onPageChange && props.onPageChange(target)
}

function getMinNumber(props){
  let min = props.current - Math.floor(props.panelNumber / 2)
  if(min < 1) min = 1
  return min
}

function getMaxNumber(min, pageNum, props){
  let max = min + props.panelNumber - 1
  if(max > pageNum) max = pageNum
  return max
}
