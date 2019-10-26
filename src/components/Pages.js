import React, { Component } from 'react'
import Pager from './Pager'
import StudentList from '../component/studentList'
export default class Pages extends Component {
  state = {
    current : 1,
    total : 0,
    limit : 10,
    panelNumber : 5,
    students: []
  }
  constructor(props){
    super(props)
    this.fatchStudent()
  }
  async fatchStudent() {
    const resp = await fetch(`http://api.duyiedu.com/api/student/findByPage?appkey=demo13_1545210570249&page=${this.state.current}&size=${this.state.limit}`).then(res => res.json()).then(res => res.data)
    this.setState({
      total: resp.cont,
      students: resp.findByPage
    })
  }
  handlePageChange = (newPage) => {
    this.setState({
      current : newPage
    })
    this.fatchStudent()
  }
  render() {
    return (
      <div className="container">
        <StudentList stuList={this.state.students}/>
        <div className="pager">
          <Pager {...this.state} onPageChange={this.handlePageChange}/>
        </div>
      </div>
      
    )
  }
}
