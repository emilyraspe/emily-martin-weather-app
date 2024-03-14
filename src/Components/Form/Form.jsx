import "./Form.css";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    /* const formData = new FormData(event.target);
    const data = Object.fromEntries(formData); */
    const data = {
      name: event.target.elements.name.value,
      isForGoodWeather: event.target.elements.isForGoodWeather.checked,
    };
    console.log(data);

    onAddActivity(data);

    event.target.reset();
    event.target.elements.name.focus();
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <h2>Add new Activity</h2>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required></input>
        <div className="checkbox-div">
          <label htmlFor="isForGoodWeather">Good-weather Activity</label>
          <input
            type="checkbox"
            id="isForGoodWeather"
            name="isForGoodWeather"
            className="checkbox"
          ></input>
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </>
  );
}
