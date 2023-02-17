import { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';
import classes from './EventsPage.module.css'

import EventsList from '../components/EventsList';

function EventsPage() {
  const events = useLoaderData();
  
  return (
    <>
      <h1 className={classes.headings}>Training Events</h1>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={events}>
        <EventsList events={events} />
        </Await>
      </Suspense>
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/events');
  const responseData = await response.json();
  return responseData.events;
}
