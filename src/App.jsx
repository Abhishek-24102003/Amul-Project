import React from 'react'
import Home from './components/HomePage/Home'
import Popularpick from './components/SecondPage/Popularpick'
import Newly from './components/Thirdpage/Newly'
import Footer from './components/Footer/Footer'
import Review from './components/Review/Review'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-[#ffffff] flex flex-col'>
      <Home />
      <Popularpick />
      <Newly />
      <Review/>
      <Footer/>
   </div>
  )
}

export default App
