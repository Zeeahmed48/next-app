import { useRouter } from 'next/router';
import classes from './MeetupItem.module.css';

const MeetupItem = ({ meetup }) => {
  const router = useRouter();

  const showMeetupDetails = (id) => {
    if (!id) return;
    router.push(`/${id}`);
  };

  return (
    <div className={classes.meetupItem}>
      <img src={meetup?.image} />
      <div className={classes.contentContainer}>
        <h3>{meetup?.title}</h3>
        <p>{meetup?.description}</p>
        <address>{meetup?.address}</address>
        <button onClick={() => showMeetupDetails(meetup?.id)}>
          Show Details
        </button>
      </div>
    </div>
  );
};

export default MeetupItem;
