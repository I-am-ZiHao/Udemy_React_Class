import MeetupDetail from "../components/meetups/MeetupDetail";
import { MongoClient, ObjectID } from "mongodb";
import Head from 'next/head';
import { Fragment } from 'react';
import { MONGO_DB_URL } from "../credential";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta
          name='description'
          content={props.meetupData.description}
        />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(MONGO_DB_URL);

  const db = client.db();

  const meetupsCollection = db.collection('udemycourse');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map(meetup => ({
      params: {
        meetupId: meetup._id.toString()
      }
    }))
  }
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(MONGO_DB_URL);

  const db = client.db();

  const meetupsCollection = db.collection('udemycourse');

  const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectID(meetupId) });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description
      }
    }
  }
}
export default MeetupDetails;