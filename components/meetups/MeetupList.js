import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

const MeetupList = ({ meetups }) => {
  return (
    <div className={classes.meetupList}>
      {meetups?.map((meetup) => (
        <MeetupItem key={`meetup-${meetup?.id}`} meetup={meetup} />
      ))}
    </div>
  );
};

export default MeetupList;
