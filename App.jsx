import React from 'react'
import Home from './Home/Home'


import { Route, Routes } from "react-router-dom"

import Page from './Pages/page'
import Signup from './components/Signup'


function App() {
  return (
    <>
      

      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path="/Courses" element={<Page/>}/>
        <Route path="/signup" element={<Signup/>}/>
        
        </Routes>
      </div>
      
    </>
  )
}

export default App