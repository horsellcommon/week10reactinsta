import React from "react";
import Box from "./components/box";
import { useState } from "react";


  const [user, setUser] = useState();
  const [age, setAge] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(username, email, password);
  };

<div className="App">
      <form onSubmit={submitHandler}>
        <label>
          Username: <input onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Email: <input onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password: <input onChange={(e) => setPassword(e.target.value)} />
        </label>
      </form>
      <input onChange={(e) => setUser(e.target.value)} />
      <input onChange={(e) => setAge(e.target.value)} />

      {{ username, email, password } ? (
        <div>
          <h1>Look at this great header</h1>
          <Box name="Big Ben" age="163" />
          <Box name="Machu Picchu" age="572" />
          <Box name="Burj Khalifa" age="13" />
          <Box name={username} mail={email} pass={password} />
        </div>
      ) : (
        <div>
          <h1>This is the else part of the statement</h1>
        </div>
      )}
    </div>