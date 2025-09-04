import { useRef } from 'react' //this is used for for focused and scroll behaviour in form section

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

  const formRef = useRef(null); // Create ref here to used for focused and scroll behaviour in form.jsx section

  const scheduleRef = useRef(null); // Create ref here to used for focused and scroll behaviour in Schedule.jsx section

  const ticketcardRef = useRef(null); // Create ref here to used for focused and scroll behaviour in form.jsx section


  return (
    <div className='bg-[var(--allbodybg-color)]'>
      <div className='max-w-[1400px] mx-auto'>



        <LandingPage formRef={formRef} scheduleRef={scheduleRef} /> {/* Pass ref to LandingPage */}

        {/* <LandingPage formRef={formRef} /> Pass ref to LandingPage */}


        <Portfolio />


        <Schedule scheduleRef={scheduleRef} /> {/* Pass ref to schedule.jsx */}



        <div ref={ticketcardRef} className='flex gap-20 items-center justify-between'>
          <div>
            <Booking />
          </div>

          <div>
            <Bookticket
              scheduleRef={scheduleRef} />
            {/* now this for by card */}
          </div>
        </div>



        {/* Location Section */}
        <Location
          Locationhead="Location"
        />


        <Carousel />


        <Form
          title="Register for Pre-Booking"
          formRef={formRef} // Pass ref to Form

          ticketcardRef={ticketcardRef} // Pass ref to Form

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
