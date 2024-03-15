import "./App.css";
import "./index.css";
import Form from "./Components/Form/Form.jsx";
import List from "./Components/List/List.jsx";
import { uid } from "uid";
import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [
      { id: "1234", name: "Jogging 🏃🏼‍♀️", isForGoodWeather: true },
      { id: "1233", name: "Beach Volleyball 🏐", isForGoodWeather: true },

      { id: "1232", name: "Billiards 🎱", isForGoodWeather: false },
      { id: "1231", name: "Pub crawling 🍺", isForGoodWeather: false },
    ],
  });

  const [weather, setWeather] = useState([]);
  const [selectedLocation, setSelectedLocation] = useLocalStorageState(
    "location",
    { defaultValue: ["europe"] }
  );

  function handleLocationChange(event) {
    setSelectedLocation(event.target.value);
  }

  const isGoodWeather = weather.isGoodWeather;

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
  }
  function handleDeleteActivity(deleteActivity) {
    setActivities(activities.filter((activity) => activity !== deleteActivity));
    const inputField = document.querySelector(".input-name");
    inputField.focus();
  }

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  // Function Weather

  useEffect(() => {
    async function startFetching() {
      try {
        const response = await fetch(
          `https://example-apis.vercel.app/api/weather/${selectedLocation}`
        );
        if (response.ok) {
          const weather = await response.json();
          setWeather(weather);
          if (weather.isGoodWeather === true) {
            document.body.style.background =
              "linear-gradient(45deg,rgba(255, 232, 130, 1) 0%,rgba(139, 216, 255, 1) 100%)";
          } else {
            document.body.style.background =
              "linear-gradient(43deg,rgba(216, 225, 228, 1) 0%,rgba(110, 150, 171, 1) 100%)";
          }
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
  }, [selectedLocation]);

  return (
    <>
      <div className="header">
        <h1 className="icon">{weather.condition}</h1>
        <h1>
          {weather.temperature}
          <span className="small">°C</span>
        </h1>
        <label htmlFor="location">Choose a location:</label>
        <select
          value={selectedLocation}
          name="location"
          id="location"
          onChange={handleLocationChange}
        >
          <option value="europe">Europe</option>
          <option value="sahara">Sahara</option>
          <option value="arctic">Arctic</option>
          <option value="rainforest">Rainforest</option>
        </select>
      </div>

      <List
        activities={filteredActivities}
        isGoodWeather={isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />

      <Form onAddActivity={handleAddActivity} />
    </>
  );
}
