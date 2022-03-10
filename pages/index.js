import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList.js';

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

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async () => {
  const uri = process.env.REACT_APP_MONGO_URI;

  const client = new MongoClient(uri);

  await client.connect();

  const db = client.db('meetups');
  const meetupsCollections = db.collection('meetups');
  const meetups = await meetupsCollections.find({}).toArray();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        description: meetup.description,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
};

export default HomePage;
