import landingphoto from "../assets/images/landingImage.png";

import { FaRegCircle } from "react-icons/fa";
import { PiTriangleBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";


const LandingPage = () => {
  const landingDetail = [
    {
      photo: landingphoto,
      title: "3-Day Photography Masterclass with Sijan Tamang",
      description:
        "A 3-day immersive photography masterclass with Sijan Tamang — refine your eye, master creative techniques, and learn how to tell compelling stories through your lens.",

      btnPRM: "Register Now",
      btnSCY: "View Schedule",


      // small cards
      smallCards: [
        {
          scard: "1",
          photoIcon: <PiTriangleBold size={"30px"}/>,
          cardTitle: "Lighting, focus, framing, strengths and weaknesses.",
        },
        {
          scard: "2",
          photoIcon: <RxCross2   size={"30px"}/>,
          cardTitle: "Tools, expert methods, and participant engagement.",
        },
        {
          scard: "3",
          photoIcon: <FaRegCircle size={"30px"}/>,
          cardTitle: "Individual assessment, a test, and personal consultation.",
        },
      ],


    },
  ];

  return (
    <div className="landing mb-30">
      <div className="landing_wrapper pt-6">


        {landingDetail.map((landing, index) => (

          <div className="flex items-center gap-[89px]" key={index}>

            <img className="rounded-[120px] w-[553px] h-[780px] object-cover " src={landing.photo} alt={landing.title} />

            <div className="w-[546px]">




              <h1>{landing.title}</h1>
              <p className="leading-6 font-normal">{landing.description}</p>


              <div className="flex mt-15 mb-15 gap-8">
                <button className="btn_main">{landing.btnPRM}</button>
                <button className="btn_secondary">{landing.btnSCY}</button>
              </div>


              {/* Small Cards */}
              <div className="flex gap-5">
                {landing.smallCards.map((card) => (
                  <div
                    key={card.scard}
                    className="flex flex-col border-1 border-[var(--color-secondary)] border-dashed rounded-xl p-4"
                  >
                    <span className="text-[var(--color-primary)]  mb-3">{card.photoIcon}</span>
                    <p className="font-normal">{card.cardTitle}</p>
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
