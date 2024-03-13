import "./App.css";
import Form from "./Components/Form/Form.jsx";
import List from "./Components/List/List.jsx";
import { uid } from "uid";
import { useState } from "react";

export default function App() {
  const [activities, setActivities] = useState([]);
  const isGoodWeather = true;
  console.log("act", activities);
  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
  }

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );
  console.log(filteredActivities);

  return (
    <>
      <Form onAddActivity={handleAddActivity} />
      <List activities={filteredActivities} />
    </>
  );
}
