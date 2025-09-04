import React, { useState } from "react";
import sphoto from "../assets/images/dann.png";

// This below code is called Tabs.

const ScheduleArray = [
  {
    title: "Program Details",

    firstCircle: {
      date: "07/12/21",
      sessions: [
        {
          time: "09:00",
          location: "Hall",
          name: "andrey podshivalov",
          post: "Composition and grid in Graphic Design",
          photo: sphoto,
        },
        {
          time: "09:00",
          location: "Room No 7",
          name: "alexander korolkova",
          post: "12 principles of animation from walt disney studio",
          photo: sphoto,
        },
        {
          time: "09:00",
          location: "Restaurant",
          name: "coffee break",
          post: "Communication, exchange of experience",
          photo: sphoto,
        },
        {
          time: "09:00",
          location: "Roon No 5",
          name: "mikhail osadchuk",
          post: "Web interface prototyping tools",
          photo: sphoto,
        },
        {
          time: "09:00",
          location: "Room No 7",
          name: "grigory anisinkov",
          post: "The design profession in the digital age",
          photo: sphoto,
        },
        {
          time: "09:00",
          location: "Roon No 5",
          name: "denis bashaev",
          post: "UX design.patterns and Psychology. Best solutions",
          photo: sphoto,
        },
        {
          time: "09:00",
          location: "Roon No 11",
          name: "nnikita obukhov",
          post: "how to increase the check of a freelancer",
          photo: sphoto,
        },
      ],
    },

    secondCircle: {
      date: "08/12/21",
      sessions: [
        {
          time: "09:00",
          location: "Room No 7",
          name: "grigory anisinkov",
          post: "The design profession in the digital age",
          photo: sphoto,
        },
        {
          time: "09:00",
          location: "Roon No 11",
          name: "nnikita obukhov",
          post: "How to increase the check of a freelancer",
          photo: sphoto,
        },
        {
          time: "09:00",
          location: "Roon No 5",
          name: "denis bashaev",
          post: "UX design.patterns and Psychology. Best solutions",
          photo: sphoto,
        },
        {
          time: "09:00",
          location: "Roon No 11",
          name: "nnikita obukhov",
          post: "how to increase the check of a freelancer",
          photo: sphoto,
        },
        {
          time: "09:00",
          location: "Restaurant",
          name: "coffee break",
          post: "Communication, exchange of experience",
          photo: sphoto,
        },
      ],
    },

    thirdCircle: {
      date: "09/12/21",
      sessions: [
        {
          time: "09:00",
          location: "Room NO 7",
          name: "alexander korolkova",
          post: "12 principles of animation from walt disney studio",
          photo: sphoto,
        },
        {
          time: "09:00",
          location: "Hall",
          name: "andrey podshivalov",
          post: "Composition and grid in Graphic Design",
          photo: sphoto,
        },
        {
          time: "09:00",
          location: "Roon No 11",
          name: "nnikita obukhov",
          post: "how to increase the check of a freelancer",
          photo: sphoto,
        },
      ],
    },
  },
];

const Schedule = ({scheduleRef}) => {  //Receive formRef as prop from app.jsx
  const [activeCircle, setActiveCircle] = useState("firstCircle"); // default active circle is firstCircle.

  // console.log(activeCircle);

  return (
    <div ref={scheduleRef} className="mb-30">
      {ScheduleArray.map((item, index) => (
        <div key={index}>
          <h2 className="mb-16">{item.title}</h2>


          <div className="flex gap-20 w-[1200px] mx-auto">

            {/*Left Circle */}
            <div className="flex flex-col gap-12">
              {["firstCircle", "secondCircle", "thirdCircle"].map((circleKey) => {
                const circle = item[circleKey];
                return (
                  <button
                    key={circleKey}
                    onClick={() => setActiveCircle(circleKey)}
                    className={`w-[100px] h-[100px] rounded-full flex items-center justify-center font-bold transition
                      ${activeCircle === circleKey
                        ? "bg-[var(--color-primary)]  text-[var(--text-white)]"

                        : "bg-[var(--color-white)] text-[var(--text-primary)]  border border-[var(--color-primary)]"
                      }`}
                  >
                    {circle.date}
                  </button>


                );
              })}
            </div>

            {/* Right Content */}
            <div className="flex flex-col flex-1  w-full">
              {item[activeCircle].sessions.map((session, i) => (
                <div key={i}
                  className="flex items-center justify-between py-4 border-b-2 border-b-[#989595]"
                >
                  <div className="w-[15%]">
                    <p className="text-[var(--text-seondary)] text-xl font-semibold" >{session.time}</p>
                    <p className="font-semibold" >{session.location}</p>
                  </div>


                  <p className="uppercase text-2xl font-bold w-[25%]">{session.name}</p>
                  <p className="text-xl w-[35%]">{session.post}</p>


                  <img
                    src={session.photo}
                    alt={session.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />

                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
