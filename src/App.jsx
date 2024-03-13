import "./App.css";
import Form from "./Components/Form/Form.jsx";
import List from "./Components/List/List.jsx";
import { uid } from "uid";
import { useState } from "react";

export default function App() {
  const [activities, setActivities] = useState([]);
  const isGoodWeather = true;

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
  }

  return (
    <>
      <Form onAddActivity={handleAddActivity} />
      <List activities={activities} />
    </>
  );
}
