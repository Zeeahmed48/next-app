import { useState } from "react";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = ({ onAddMeetup }) => {
  const [meetupData, setMeetupData] = useState({
    title: "",
    description: "",
    image: "",
    address: "",
  });

  const handleMeetupChange = (type, event) => {
    const { value } = event.target;
    setMeetupData((prevData) => ({
      ...prevData,
      [type]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onAddMeetup === "function") onAddMeetup(meetupData);
  };

  const { title, description, image, address } = meetupData;

  return (
    <form onSubmit={handleSubmit} className={classes.formContainer}>
      <div className={classes.inputWrapper}>
        <label>Meetup Title</label>
        <input
          onChange={(e) => handleMeetupChange("title", e)}
          value={title}
          type="text"
        />
      </div>

      <div className={classes.inputWrapper}>
        <label>Meetup Image</label>
        <input
          onChange={(e) => handleMeetupChange("image", e)}
          value={image}
          type="text"
        />
      </div>

      <div className={classes.inputWrapper}>
        <label>Address</label>
        <input
          onChange={(e) => handleMeetupChange("address", e)}
          value={address}
          type="text"
        />
      </div>
      <div className={classes.inputWrapper}>
        <label>Description</label>
        <input
          onChange={(e) => handleMeetupChange("description", e)}
          value={description}
          type="text"
        />
      </div>
      <div className={classes.buttonWrapper}>
        <button type="submit">Add Meetup</button>
      </div>
    </form>
  );
};

export default NewMeetupForm;
