// import { useRef } from "react";
import landingphoto from "../assets/images/landingImage.png";
import landingphotomobile from "../assets/images/mobilelandin.png";


import { FaRegCircle } from "react-icons/fa";
import { PiTriangleBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";


const LandingPage = ({ formRef, scheduleRef }) => { // Receive formRef as prop

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

  };

  const scheduleToList = () => {
    scheduleRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

  };



  const landingDetail = [
    {
      photo: landingphoto,
      photo2: landingphotomobile,
      title: "3-Day Photography Masterclass with Sijan Tamang",
      description:
        "A 3-day immersive photography masterclass with Sijan Tamang — refine your eye, master creative techniques, and learn how to tell compelling stories through your lens.",

      btnPRM: "Register Now",
      btnSCY: "View Schedule",


      // small cards
      smallCards: [
        {
          scard: "1",
          photoIcon: <PiTriangleBold size={"30px"} />,
          cardTitle: "Lighting, focus, framing, strengths and weaknesses.",
        },
        {
          scard: "2",
          photoIcon: <RxCross2 size={"30px"} />,
          cardTitle: "Tools, expert methods, and participant engagement.",
        },
        {
          scard: "3",
          photoIcon: <FaRegCircle size={"30px"} />,
          cardTitle: "Individual assessment, a test, and personal consultation.",
        },
      ],


    },
  ];





  return (
    <div className="landing mb-30  ">
      <div className="landing_wrapper  ">


        {landingDetail.map((landing, index) => (

          <div className="flex items-center gap-[89px] max-xl:gap-10 h-screen max-sm:h-fit max-md:h-fit max-lg:h-fit max-sm:flex-col max-md:flex-col max-lg:flex-col max-sm:gap-[40px]" key={index}>




            <img className="rounded-[120px] w-[553px] h-[780px] object-cover max-sm:hidden sm:block" src={landing.photo} alt={landing.title} />


            <img className="max-sm:object-cover max-sm:rounded-2xl max-sm:w-full max-sm:h-[300px] max-sm:block sm:hidden " src={landing.photo2} alt={landing.title} />



            <div className="w-[546px] max-sm:w-[100%] max-md:w-[100%] max-lg:w-[100%]">



              <h1 className="max-sm:text-2xl max-md:text-3xl">{landing.title}</h1>
              <p className="leading-6 font-normal max-sm:text-xl/snug max-md:text-xl">{landing.description}</p>


              <div className="flex my-15 gap-8 max-sm:my-10 max-sm:justify-around max-[500px]:justify-between max-[500px]:my-0">


                <button onClick={scrollToForm} className="btn_main max-sm:text-sm max-sm:p-1 max-[500px]:p-0.5">{landing.btnPRM}</button>

                <button onClick={scheduleToList} className="btn_secondary">{landing.btnSCY}</button>



              </div>


              {/* Small Cards */}
              <div className="flex gap-5 max-[500px]:flex-wrap">
                {landing.smallCards.map((card) => (
                  <div
                    key={card.scard}
                    className="flex flex-col border-1 border-[var(--color-secondary)] border-dashed rounded-xl p-4 max-sm:p-2"
                  >
                    <span className="text-[var(--color-primary)] mb-3">{card.photoIcon}</span>
                    <p className="font-normal max-sm:text-lg">{card.cardTitle}</p>
                  </div>
                ))}
              </div>





            </div>

          </div>
        ))}


      </div>
    </div>
  );
};

export default LandingPage;
