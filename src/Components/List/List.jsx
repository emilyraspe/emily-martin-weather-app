import "./List.css";

export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  console.log("activity", activities);
  return (
    <>
      {isGoodWeather === true ? (
        <>
          <h2>Good weather</h2>
          <p>Here are a few things you can do today</p>
        </>
      ) : (
        <>
          <h2>Bad weather</h2>
          <p>Here are a few things you can do today</p>
        </>
      )}
      <ul>
        {activities.map((activity, id) => (
          <li key={id}>
            {activity.name}
            <button
              type="button"
              className="delete-button"
              onClick={() => onDeleteActivity?.(activity)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
