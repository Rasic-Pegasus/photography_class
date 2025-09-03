import './App.css'
import LandingPage from './components/landingpage'
import Portfolio from './components/portfolio'
import Schedule from './components/Schedule'
import Booking from './components/booking'
import Bookticket from './components/bookcard'

import Location from './components/location'

import Carousel from './components/carousel'

import Form from './components/form'

import Footer from './components/footer'





function App() {

  return (
    <div className='bg-[var(--allbodybg-color)]'>
      <div className='max-w-[1400px] mx-auto'>

        <LandingPage />
        <Portfolio />
        <Schedule />



        <div className='flex gap-20 items-center justify-between'>
          <div>
            <Booking />
          </div>

          <div>
            <Bookticket />
          </div>

        </div>



        {/* Location Section */}
        <Location
          Locationhead="Location"
        />


        <Carousel />


        <Form
          title="Register for Pre-Booking"

        />

        <Footer
          day="3-Day Photography Masterclass with 
          Sijan Tamang"
          date="Apr 23rd -  Apr 26th"
          location="Event Banquet, Lalitpur"
          organiser="Event Organized by Lotus Events"
          phone="8XXXXXXXX, 98XXXXXXXX"
          mail="inquiry@lotusEvents.com"




        />















      </div>
    </div>
  )
}

export default App
