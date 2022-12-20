import React, { useState } from "react";
import "./App.css";
import Register from "./src/components/Register";

function App() {
  const [userId, setUserId] = useState(false);

  return (
    <div className="App">
      <Register />
    </div>
  );
}

export default App;
