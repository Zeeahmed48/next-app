import MeetupDetail from "../../components/meetups/MeetupDetails";

const SingleMeetup = (props) => {
  return <MeetupDetail image="" />;
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "meetup1",
        },
      },
      {
        params: {
          meetupId: "meetup2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTXvo15izkAl8A9f1KfV9LRbxX102OMLM-2A&usqp=CAU",
        id: "m1",
        title: "First Meetup ",
      },
    },
  };
};

export default SingleMeetup;
