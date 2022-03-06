import NewMeetUpForm from '../../components/meetups/NewMeetUpForm';

const NewMeetup = () => {
  const addNewMeetup = (meetupData) => {
    console.log('meetupData', meetupData);
  };
  return <NewMeetUpForm onAddMeetup={addNewMeetup} />;
};

export default NewMeetup;
