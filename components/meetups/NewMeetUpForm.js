import { useState } from 'react';

const NewMeetUpForm = ({ onAddMeetup }) => {
  const [meetupData, setMeetupData] = useState({
    title: '',
    description: '',
    image: '',
    address: '',
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
    if (typeof onAddMeetup === 'function') onAddMeetup(meetupData);
  };

  const { title, description, image, address } = meetupData;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          onChange={(e) => handleMeetupChange('title', e)}
          value={title}
          type='text'
          placeholder='Meetup Title'
        />
      </div>
      <div>
        <input
          onChange={(e) => handleMeetupChange('description', e)}
          value={description}
          type='text'
          placeholder='Meetup Description'
        />
      </div>
      <div>
        <input
          onChange={(e) => handleMeetupChange('image', e)}
          value={image}
          type='text'
          placeholder='Meetup Image'
        />
      </div>
      <div>
        <input
          onChange={(e) => handleMeetupChange('address', e)}
          value={address}
          type='text'
          placeholder='Meetup Address'
        />
      </div>
      <div>
        <button type='submit'>Add Meetup</button>
      </div>
    </form>
  );
};

export default NewMeetUpForm;
