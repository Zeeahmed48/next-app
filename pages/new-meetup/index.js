import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetup = () => {
  const addNewMeetup = async (meetupData) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetupData)
    });
    const data = await  response.json();
    console.log("data", data);
  };
  return <NewMeetupForm onAddMeetup={addNewMeetup} />;
};

export default NewMeetup;
