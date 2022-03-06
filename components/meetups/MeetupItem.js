import { useRouter } from 'next/router';
import classes from './MeetupItem.module.css';

const MeetupItem = ({ meetup }) => {
  const router = useRouter();

  const showMeetupDetails = (id) => {
    if (!id) return;
    router.push(`/${id}`);
  };

  return (
    <div key={`meetup-${meetup?.id}`} className={classes.meetupItem}>
      <img src={meetup?.image} />
      <h3>{meetup?.title}</h3>
      <p>{meetup?.description}</p>
      <address>{meetup?.address}</address>
      <button onClick={() => showMeetupDetails(meetup?.id)}>
        Show Details
      </button>
    </div>
  );
};

export default MeetupItem;
