import "./List.css";

export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  console.log("activity", activities);
  return (
    <>
      {isGoodWeather === true ? (
        <h2>Good weather 🌤</h2>
      ) : (
        <h2>Bad weather⚡️</h2>
      )}
      <ul>
        {activities.map((activity, id) => (
          <li key={id}>
            <h3>{activity.name}</h3>
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
