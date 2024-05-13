import React from 'react'
import { Route, Routes } from 'react-router-dom'

import TodoList from '../components/TodoList'
import HomePage from '../Pages/HomePage'


export default function AllRoutes() {
  return (
   <Routes>
        <Route path="/" element={<HomePage/>} />
    <Route path='/todo' element={<TodoList/>}/>
   </Routes>
  )
}