
import './App.css'
import Banner from './components/Banner/Banner'
import Contact from './components/Contact/Contact'
import Delivery from './components/Delivery/Delivery'
import FindUs from './components/FindUs/FindUs'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Ratings from './components/Ratings/Ratings'
import Services from './components/Services/Services'
import SubscribeSection from './components/SubscribeSection/SubscribeSection'
import Testimonial from './components/Testimonial/Testimonial'

function App() {
  

  return (
    <>
      <Navbar/>
      <Banner/>
      <Services/>
      <Ratings/>
      <Delivery/>
      <Testimonial/>
      <Contact/>
      <FindUs/>
      <SubscribeSection/>
      <Footer/>
    </>
  )
}

export default App
