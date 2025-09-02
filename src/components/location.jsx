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

const Location = ({ Locationhead}) => {
  

  return (
    <div className="location mt-[100px]">

      {/* Heading */}
      <h2 className="mb-8">
        {Locationhead}
      </h2>

    

      {/* Location Cards */}
      {locationData.map((location, index) => (
        <div
          className="bg-[#FCF3EC] px-8 sm:px-16 pt-8 sm:pt-16 pb-8 sm:pb-10 rounded-4xl border border-[var(--color-primary)] mb-25"
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
            <button
              className="font-medium"
              type="button"
            >
              {location.book}
            </button>
          </div>


        </div>
      ))}
    </div>
  );
};

export default Location;
