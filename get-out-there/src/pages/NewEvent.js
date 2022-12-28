import { useHistory } from "react-router-dom";

import NewEventForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();

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
      <h1>New Meetup Page</h1>
      <NewEventForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
