export default function Form() {
  return (
    <>
      <h1>Add new Activity</h1>
      <form>
        <label>Name</label>
        <input type="text"></input>
        <label>Good-weather Activity</label>
        <input type="checkbox"></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
