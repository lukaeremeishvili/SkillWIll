import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ToDosPage from '../pages/ToDosPage'
import ToDoPage from '../pages/ToDoPage'
import HomePage from '../pages/HomePage'

const AppRouter:React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todos" element={<ToDosPage />} />
        <Route path="/todos/:id" element={<ToDoPage />} />
    </Routes>
  )
}

export default AppRouter