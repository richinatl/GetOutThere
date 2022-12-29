import { useNavigate } from "react-router-dom";

import NewEventForm from "../components/meetups/NewEventForm";

import classes from "./NewEvent.module.css";

function NewEventPage() {
  const history = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-get-out-there-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1 className={classes.h1__event}>Add an Event!</h1>
      <NewEventForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewEventPage;
