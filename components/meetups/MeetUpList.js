import MeetupItem from './MeetupItem';

const MeetUpList = ({ meetups }) => {
  return (
    <div>
      {meetups?.map((meetup) => (
        <MeetupItem meetup={meetup} />
      ))}
    </div>
  );
};

export default MeetUpList;
