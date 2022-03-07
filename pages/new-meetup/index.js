import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetup = () => {
  const addNewMeetup = (meetupData) => {
    console.log('meetupData', meetupData);
  };
  return <NewMeetupForm onAddMeetup={addNewMeetup} />;
};

export default NewMeetup;
