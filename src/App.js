import React from 'react';
import './App.css';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Home from './components/Home';
import Explorecars from './components/Explorecars';
import Helpcenter from './components/Helpcenter';
import Pages from './components/Pages';
import Header from './components/Header';
import Frontpage from './components/Frontpage';

function App (){
  return(
    <div>
      <BrowserRouter>
      <Header/>
       <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/explorecars' element={<Explorecars/>}/>
        <Route path='/helpcenter' element={<Helpcenter/>}/>
        <Route path='/pages' element={<Pages/>}/>
        <Route path='/frontpage' element={<Frontpage/>}/>

      </Routes>
      </BrowserRouter>

    </div>
  )
}
export default App;
