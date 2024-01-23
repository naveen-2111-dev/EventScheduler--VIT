import React, { useState } from "react";
import { Navbar } from "../../components/navbar/navbar";
import { ethers } from "ethers";
import { useStateContext } from "../../context/context";

export const CreateEvent = () => {
  const { createEvent } = useStateContext(); 
  console.log(createEvent);
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    startDate: "",
    price: "",
    tot: "",
    endDate: "",
    streamLink: "",
  });

  const handleQuery = async (name, e) => {
    setForm({ ...form, [name]: e.target.value }); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      await createEvent({
        ...form,
        price: ethers.utils.parseUnits(form.price, 18),
      });
      console.log(createEvent); 
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <nav>
        <Navbar />
      </nav>

      <div className="form-field">
        <h1>New Event</h1>
        <form action="#">
          <input
            type="text"
            placeholder="title"
            onChange={(e) => handleQuery("title", e)}
          />
          <textarea
            placeholder="detials"
            onChange={(e) => handleQuery("Discription", e)}
          />

          <input
            type="date"
            placeholder="startdate"
            onChange={(e) => handleQuery("startdate", e)}
          />
          <input
            type="date"
            placeholder="Enddate"
            onChange={(e) => handleQuery("enddate", e)}
          />

          <input
            type="number"
            placeholder="number of participants"
            onChange={(e) => handleQuery("numberofParticipants", e)}
          />
          <input
            type="number"
            placeholder="event fee"
            onChange={(e) => handleQuery("eventfee", e)}
          />
          <input
            type="text"
            placeholder="url"
            onChange={(e) => handleQuery("Link", e)}
          />
        </form>

        <div className="creater">
          {/* it will check whether wallet is connected or not if not it will redirect to a info page */}
          <button>Create</button>
        </div>
      </div>
    </div>
  );
};
