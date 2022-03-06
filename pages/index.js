import MeetUps from '../components/meetups/MeetUpList.js';

const DUMMY_MEETUPS = [
  {
    id: 'meetup1',
    title: 'First Meetup.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTXvo15izkAl8A9f1KfV9LRbxX102OMLM-2A&usqp=CAU',
    address: 'Las Vegas',
    description: 'A meetup hold in las vegas.',
  },
  {
    id: 'meetup2',
    title: 'Second Meetup.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTXvo15izkAl8A9f1KfV9LRbxX102OMLM-2A&usqp=CAU',
    address: 'Las Vegas',
    description: 'A meetup hold in las vegas.',
  },
];

const HomePage = () => {
  return <MeetUps meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
