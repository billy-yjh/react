import React from 'react';
import ReactDOM from 'react-dom';
// import StudentList from './component/studentList'
import Ball from './component/ball'
import BallList from './component/ballList'
import Pages from './components/Pages'
const roots = document.getElementById('root')
// const appKey = "demo13_1545210570249"
// const url = 'http://api.duyiedu.com/api/student/findAll?appkey='

// async function fetchAllStudent(){
//   const list = await fetch(url + appKey).then(res => res.json()).then(res => res.data)
//   return list
// }
// async function show(){
//   ReactDOM.render(<span>正在加载中.....</span>, roots);
//   const stuList = await fetchAllStudent(0)
//   ReactDOM.render(<StudentList stuList={stuList}/>, roots);

// }
// show()
// ReactDOM.render(<BallList/>, roots);
ReactDOM.render(<Pages/>, roots);

