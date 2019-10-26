import React, { Component } from 'react'
import Student from './student'
export default class studentList extends Component {
  render() {
    // 
    const students = this.props.stuList.map(item => <Student key={item.id} {...item}/>)
    return (
      <ul>
        {students}
      </ul>
    )
  }
}
