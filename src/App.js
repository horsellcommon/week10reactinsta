import "./App.css";
import React from "react";
import Box from "./components/box";
import { useState } from "react";

function App() {
  const [user, setUser] = useState();
  const [age, setAge] = useState();
  return (
    <div className="App">
      <input onChange={(e) => setUser(e.target.value)} />
      <input onChange={(e) => setAge(e.target.value)} />

      {user ? (
        <div>
          <h1>Look at this great header</h1>
          <Box name="Big Ben" age="163" />
          <Box name="Machu Picchu" age="572" />
          <Box name="Burj Khalifa" age="13" />
          <Box name={user} age={age} />
        </div>
      ) : (
        <div>
          <h1>This is the else part of the statement</h1>
        </div>
      )}
    </div>
  );
}

export default App;
