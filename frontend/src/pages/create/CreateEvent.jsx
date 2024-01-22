import React from "react";
import { Navbar } from "../../components/navbar/navbar";

export const CreateEvent = () => {
  return (
    <div className="container">
      <nav>
        <Navbar />
      </nav>

      <div className="form-field">
        <h1>New Event</h1>
        <form action="#">
          <input type="text" placeholder="title" />
          <textarea placeholder="detials" />

          <input type="date" placeholder="startdate" />
          <input type="date" placeholder="Enddate" />

          <input type="number" placeholder="number of participants" />
          <input type="number" placeholder="event fee" />
        </form>

        <div className='creater'>
          {/* it will check whether wallet is connected or not if not it will redirect to a info page */}
          <button>Create</button>
        </div>
      </div>
    </div>
  );
};
