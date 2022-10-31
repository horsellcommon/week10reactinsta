import "./App.css";
import React from "react";
import Box from "./components/box";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("Cristo Redentor");
  const [age, setAge] = useState(90);
  return (
    <div className="App">
      <h1>Look at this great header</h1>
      <Box name="Big Ben" age="163" />
      <Box name="Machu Picchu" age="572" />
      <Box name="Burj Khalifa" age="13" />
      <Box name={user} age={age} />
    </div>
  );
}

export default App;
