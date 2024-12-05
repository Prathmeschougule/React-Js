import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card"; // Corrected import

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>This is My First Project</h1>
      <Card name="I phone One Plus Serise" prize="8756"/>
      <Card name="Readmi Note 8 pro " prize="2213" />
    </>
  );
}

export default App;
