import './App.scss';
import React from 'react';
import HomePage from './pages/00. HomePage/HomePage'
import ExperiencePage from './pages/01. ExperiencePage/ExperiencePage'



import { Routes, Route } from 'react-router-dom'






function App() {

  return(

    <div className='App'>

      <Routes>
        <Route path='' element={<HomePage />}></Route>
        <Route path='experience' element= {<ExperiencePage/>}></Route> 
        {/* <Route path='education' element={<Education/>}></Route> */}
      </Routes>


    </div>



  )
}







// function App() {
//   return (
//     <div className="App">
//       <Header info = {info}/>
//       <Menu info = {info}/>
//       <Routes>
//         <Route path='education' element={<Education/>}></Route>
//         <Route path='experience' element= {<Experience/>}></Route>
//       </Routes>
//       <Skills 
//           skills = {skills}
//           languages = {languages}
//           />
//       <Services services = {services}/>
//       <Testimonials testimonials = {testimonials}/>
//       <Contact />
//     </div>
//   );
// }

export default App;
