import "./App.css";
import React from "react";
import { useState } from "react";
import Box from "./components/box";

function App() {
  const [user, setUser] = useState();
  const [age, setAge] = useState();

  const array = [
    { name: "Fake Name", age: "25" },
    { name: "Fake Guy 2", age: "20" },
    { name: "Another Faker!", age: "66" },
  ];

  // for (let i = 0; i < array.length; i++) {
  //   console.log(array[i]);
  // }
  // array.map((item, index) => {
  //   console.log(item);
  // });

  return (
    <div className="App">
      {array.map((item, index) => {
        return (
          <div>
            <Box name={item.name} age={item.age} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
