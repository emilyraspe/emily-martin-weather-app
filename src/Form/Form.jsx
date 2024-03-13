import { useState } from "react";

export default function Form({ onAddActivity }) {
  const [activity, setActivities] = useState({
    name: "",
    isForGoodWeather: true,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setActivity({
      ...activity,
      [name]: newValue,
    });
  };

  const onAddActivity = (e) => {
    e.preventDefault();

    onAddActivity(activity);
    console.log("Activity:", activity);
  };

  return (
    <>
      <form onSubmit={onAddActivity}>
        <h1>Add new Activity</h1>
        <label>Name</label>
        <input type="text"></input>
        <label>Good-weather Activity</label>
        <input type="checkbox" checked={activity.isForGoodWeather}></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
