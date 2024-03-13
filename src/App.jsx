import { useState } from "react";
import "./App.css";
import Form from "./Form/Form.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Form />
    </>
  );
}

export default App;
