// import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from "mongodb";
import Head from 'next/head';
import { Fragment } from 'react';
import { MONGO_DB_URL } from '../credential';

// const MEETUPS = [
//   {
//     id: 'm1',
//     title: 'first meetup',
//     image: 'https://i0.wp.com/img.hojenjen.com/uploads/2017/10/1506964794-4efdd2f969559e8b1c92e99f32ded48e.jpg?resize=1801%2C1200',
//     address: 'address 1',
//     description: 'first meetup!',
//   },
//   {
//     id: 'm2',
//     title: 'second meetup',
//     image: 'https://cdn1-digiphoto.techbang.com/system/images/124901/original/7d4012268131717149af4e7369d07187.jpg?1548392388',
//     address: 'address 2',
//     description: 'second meetup!',
//   },
//   {
//     id: 'm3',
//     title: 'third meetup',
//     image: 'https://www.fotobeginner.com/wp-content/uploads/2009/04/4.jpg',
//     address: 'address 3',
//     description: 'third meetup!',
//   },
// ];

function HomePage(props) {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {
  //   setLoadedMeetups(MEETUPS);
  // }, []);

  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='some content here'
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: MEETUPS
//     }
//   };
// }

export async function getStaticProps() {
  const client = await MongoClient.connect(MONGO_DB_URL);

  const db = client.db();

  const meetupsCollection = db.collection('udemycourse');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      }))
    },
    revalidate: 10
  };
};

export default HomePage;