import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetup = () => {
  const router = useRouter();

  const addNewMeetup = async (meetupData) => {
    fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    router.push('/');
  };

  return <NewMeetupForm onAddMeetup={addNewMeetup} />;
};

export default NewMeetup;
