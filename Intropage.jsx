
import Popularpick from './src/components/SecondPage/Popularpick'
import Newly from './src/components/Thirdpage/Newly'
import Review from './src/components/Review/Review'
import Footer from './src/components/Footer/Footer'
import Homepage from './src/components/HomePage/Homepage'
import HeroScroll from './src/components/animate/HeroScroll'
const Intropage = () => {
  return (
    <div className='w-full min-h-screen bg-[#ffffff] flex flex-col'>
      <Homepage />
      <Popularpick />
      <Newly />
      <HeroScroll/>
      <Review/>
      <Footer/>
    </div>
  )
}

export default Intropage
