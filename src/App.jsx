import "./App.css";
import Form from "./Form/Form.jsx";

function App() {
  const [activities, setActivities] = useState([]);

  const handleAddActivity = (newActivity) => {
    setActivities([...activities, newActivity]);
  };

  return (
    <>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}
