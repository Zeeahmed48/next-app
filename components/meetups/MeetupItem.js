import { useRouter } from 'next/router';

const MeetupItem = ({ meetup }) => {
  const router = useRouter();

  const showMeetupDetails = (id) => {
    if (!id) return;
    router.push(`/${id}`);
  };

  return (
    <div key={`meetup-${meetup?.id}`}>
      <img src={meetup?.image} />
      <h3>{meetup?.title}</h3>
      <h6>{meetup?.description}</h6>
      <p>{meetup?.address}</p>
      <button onClick={() => showMeetupDetails(meetup?.id)}>
        Show Details
      </button>
    </div>
  );
};

export default MeetupItem;
