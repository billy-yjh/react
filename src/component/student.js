import React from 'react'

export default function student(props) {
  return (
    <li>
      [地址: ]{props.address}
      [姓名: ]{props.name}
    </li>
  )
}
