import "./App.css";
import "./index.css";
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

  console.log(isGoodWeather);

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

  useEffect(() => {
    async function startFetching() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );
        if (response.ok) {
          const weather = await response.json();
          setWeather(weather);
        } else {
          console.error("Weather data is not found");
        }
      } catch (error) {
        console.error(error);
      }
    }
    startFetching();

    const intervalId = setInterval(() => {
      startFetching();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <h1>
        {weather.condition}
        {weather.temperature}°C
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
