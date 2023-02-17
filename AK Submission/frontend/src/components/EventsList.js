import { Row, Col, Card } from "react-bootstrap";
import classes from './EventsList.module.css';

function EventsList({ events }) {

  return (
    <>
    <div>
      <Row xs={1} sm={2} md={3} lg={3} xl={4}>
        {events.map((event) => (
          <Col key={event.id}>
            <Card className={classes.eventsCard}>
              <Card.Img variant="top" src={event.image} className={classes.eventsImage} />
              <Card.Body>
                <Card.Subtitle className={classes.eventsSubTitle}>
                  {event.mode}
                </Card.Subtitle>
                <Card.Title className={classes.eventsTitle}>{event.title}</Card.Title>
                <Card.Text className={classes.eventsDescription}>
                  {event.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </div>
    </>
  );
}

export default EventsList;
