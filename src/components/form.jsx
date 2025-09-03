import React, { useState } from "react";
import emailjs from "emailjs-com";

import formimage from "../assets/images/fbi.png";

const Form = ({title}) => {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstname || !lastname || !email || !phone || !description) {
      alert("Please fill in all fields.");
      return;
    }

    // EmailJS send method
    emailjs
      .send(
        "service_ys2onepage", // replace with your EmailJS service ID
        "template_y610agb", // replace with your EmailJS template ID
        {
          firstname: firstname,
          lastname: lastname,
          email: email,
          phone: phone,
          description: description,
        },
        "yHjjm7pAq80l3eQcy" // replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Form submitted successfully!");
          setFirstname("");
          setLastname("");
          setEmail("");
          setPhone("");
          setDescription("");
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  const handleViewTickets = () => {
    alert("View Tickets Clicked");
  };

  return (
    <div className="mt-[100px] mb-[100px]">
      {/* <h2 className="mb-6">{title}</h2> */}

      <div className="flex items-center justify-between gap-20">
        <div className="w-[700px]">
          <form onSubmit={handleSubmit} className="">
             <h2 className="mb-6">{title}</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
                className="border p-3 rounded outline-none focus:border-[var(--color-primary)] bg-[var(--color-white)]"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
                className="border p-3 rounded outline-none focus:border-[var(--color-primary)] bg-[var(--color-white)]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border p-3 rounded outline-none focus:border-[var(--color-primary)] bg-[var(--color-white)]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="border p-3 rounded outline-none focus:border-[var(--color-primary)] bg-[var(--color-white)]"
              />
            </div>

            <textarea
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="border p-3 rounded w-full mt-4 outline-none focus:border-[var(--color-primary)] bg-[var(--color-white)]"
              rows="4"
            />

            <div className="flex gap-4 mt-6">
              <button type="submit" className="btn_main w-full capitalize">
                Register now
              </button>

              <button
                type="button"
                onClick={handleViewTickets}
                className="btn_secondary w-full capitalize"
              >
                View Tickets
              </button>
            </div>
          </form>
        </div>

        <div className="w-[600px]">
          <img className="object-cover rounded-xs" src={formimage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Form;
