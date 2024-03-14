import "./App.css";
import Form from "./Components/Form/Form.jsx";
import List from "./Components/List/List.jsx";
import { uid } from "uid";
import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const [weather, setWeather] = useState([]);
  const isGoodWeather = weather.isGoodWeather;

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
  }
  function handleDeleteActivity(deleteActivity) {
    setActivities(activities.filter((activity) => activity !== deleteActivity));
  }

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );
  console.log(filteredActivities);

  // Function Weather

  /* useEffect(() => { */
  async function startFetching() {
    const response = await fetch("https://example-apis.vercel.app/api/weather");
    const weather = await response.json();
    setWeather(weather);
  }
  useEffect(() => {
    startFetching();
    const intervalId = setInterval(() => {
      startFetching();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  /*   }, []); */

  return (
    <>
      <h1>
        {weather.condition}
        {weather.temperature}
      </h1>
      <Form onAddActivity={handleAddActivity} />
      <List
        activities={filteredActivities}
        isGoodWeather={isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
    </>
  );
}
