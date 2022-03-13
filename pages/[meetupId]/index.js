import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetails';

const SingleMeetup = ({
  meetupData: { image, title, description, address },
}) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <MeetupDetail
        image={image}
        title={title}
        description={description}
        address={address}
      />
    </Fragment>
  );
};

export const getStaticPaths = async () => {
  const uri = process.env.REACT_APP_MONGO_URI;

  const client = new MongoClient(uri);

  await client.connect();

  const db = client.db('meetups');
  const meetupsCollections = db.collection('meetups');
  const meetupIds = await meetupsCollections.find({}, { _id: 1 }).toArray();

  await client.close();

  return {
    fallback: 'blocking',
    paths: meetupIds.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  const uri = process.env.REACT_APP_MONGO_URI;

  const client = new MongoClient(uri);

  await client.connect();

  const db = client.db('meetups');
  const meetupsCollections = db.collection('meetups');
  const meetupData = await meetupsCollections.findOne({
    _id: ObjectId(meetupId),
  });

  await client.close();
  return {
    props: {
      meetupData: {
        image: meetupData.image,
        id: meetupData._id.toString(),
        title: meetupData.title,
        description: meetupData.description,
        address: meetupData.address,
      },
    },
  };
};

export default SingleMeetup;
