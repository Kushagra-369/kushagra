import React from 'react'
import Navbar from './components/Navbar'
import Info from './components/Info'
import Myteach from './components/Myteach'
import Skills from './components/Skills'
import Myproject from './components/Myproject'
import MyExperience from './components/MyExperience'
import Adboutme from './components/Adboutme'
export default function App() {
  return (
    <div>
      <Navbar/>
      <Info/>
      <Myteach/>
      
      <Skills/>
       <Myproject/>  
       <MyExperience/>   
       <Adboutme/>
    </div>
  )
}
