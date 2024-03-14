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
      <form onSubmit={handleSubmit}>
        <h1>Add new Activity</h1>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required></input>
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
