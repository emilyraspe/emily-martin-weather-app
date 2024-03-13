import { useState } from "react";

export default function Form({ onAddActivity }) {
  const [formData, setFormData] = useState({
    name: "",
    isForGoodWeather: false,
  });

  /*  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    const val = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  } */

  function handleSubmit(event) {
    event.preventDefault();
    /* const formData = new FormData(event.target);
    const data = Object.fromEntries(formData); */
    const data = {
      name: event.target.elements.name.value,
      checkbox: event.target.elements.isForGoodWeather.checked,
    };
    console.log(data);

    console.log("event target ", event.target.elements.name);
    console.log("event target ", event.target.elements.isForGoodWeather);

    onAddActivity(data);

    event.target.reset();
    event.target.elements.name.focus();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Add new Activity</h1>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name"></input>
        <label htmlFor="isForGoodWeather">Good-weather Activity</label>
        <input
          type="checkbox"
          id="isForGoodWeather"
          name="isForGoodWeather"
        ></input>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
