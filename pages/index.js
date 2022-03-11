import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList.js';

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Next Meetups</title>
        <meta
          name='description'
          content='Browse a huge List of active Next meetups!'
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  )
};

export const getStaticProps = async () => {
  const uri = process.env.REACT_APP_MONGO_URI;

  const client = new MongoClient(uri);

  await client.connect();

  const db = client.db('meetups');
  const meetupsCollections = db.collection('meetups');
  const meetups = await meetupsCollections.find({}).toArray();

  await client.close();

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
