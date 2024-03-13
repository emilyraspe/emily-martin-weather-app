export default function List({ activities }) {
  console.log("activity", activities);
  return (
    <>
      <ul>
        {activities.map((activity, id) => (
          <li key={id}>
            <h3>{activity.name}</h3>
          </li>
        ))}
      </ul>
    </>
  );
}
