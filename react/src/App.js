import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {  useParams } from 'react-router-dom'



export default function App() {
  function Test() {
  let { id } = useParams()
  console.log(id)
    return (
      <div>Test{id}</div>
    )
  }
  function Test1() {
      return (
        <div>Test1</div>
      )
    }
  function Test2() {
      return (
        <div>Test2</div>
      )
    }
    function Test3() {
      let { id } = useParams()
        return (
          <div>Test3{id}</div>
        )
      }
  function HomePage() {
    return (
      <div>HomePage</div>
    )
  }
  return (
    <>
      <Router>
        <Routes>
        {/* 這邊build在express跑會錯誤 */}
          <Route exact path="/test/:id" element={<Test />} />
          <Route exact path="/test1/123" element={<Test1 />} />
          {/* 以下都正常 */}
          <Route exact path="/test2" element={<Test2 />} />
          <Route exact path="/:id" element={<Test3 />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  )
}
