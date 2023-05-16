import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Post from './pages/Post'
import './App.css'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </>
  )
}

export default App
