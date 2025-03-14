import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GamesPage from '../pages/GamesPage'
import GamePage from '../pages/GamePage'
import HomePage from '../pages/HomePage'

const AppRouter:React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/games/:id" element={<GamePage />} /> 
    </Routes>
  )
}

export default AppRouter