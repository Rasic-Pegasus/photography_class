import React from 'react';
import hallroom from '../assets/images/hall.png';

const locationData = [
  {
    locationPhoto: hallroom,
    eventLocation:
      "Event Banquet, PatanDhoka, Lalitpur.",
    book: "Find on Map",
  },
];

const Location = ({ Locationhead }) => {


  return (
    <div className="location mt-[100px]">

      {/* Heading */}
      <h2 className="mb-8">
        {Locationhead}
      </h2>



      {/* Location Cards */}
      {locationData.map((location, index) => (
        <div
          className="px-8 sm:px-16 pt-8 sm:pt-16 pb-8 sm:pb-10 rounded-4xl border border-[var(--color-primary)] mb-25"
          key={index}
        >
          <img
            src={location.locationPhoto}
            alt="Location"
            className="w-full object-cover rounded-4xl mb-8"
          />

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center ">
            <p className="italic font-bold">
              {location.eventLocation}
            </p>

            <a
              href="https://www.google.com/maps/@27.7247547,85.3208659,3992m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
              className="font-bold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {location.book}
            </a>



          </div>


        </div>
      ))}
    </div>
  );
};

export default Location;
