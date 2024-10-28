import React, { useState } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState("Kiran");

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const themeStyles = {
    Select: {
      backgroundColor: "#FFL700",
      text: "Select One",
    },
    Kiran: {
      backgroundColor: "#FFD700",
      text: "Kiran Theme",
    },
    Abhishek: {
      backgroundColor: "#87CEEB",
      text: "Abhishek Theme.",
    },
  };

  return (
    <div className="App">
      <h1>Theme Change</h1>

      <div className="branchbox">
        <label className="namebox1" htmlFor="theme">Theme:</label>
        <select className="namebox" id="branch" onChange={handleThemeChange}>
          <option value="Kiran" className="b1">Kiran</option>
          <option value="Abhishek" className="b1">Abhishek</option>
        </select>
      </div>

      <div
        style={{
          padding: "20px",
          color: "#333",
          backgroundColor: themeStyles[theme]?.backgroundColor || "#FFF",
          borderRadius: "10px",
        }}
      >
        <p style={{ fontSize: "18px" }}>{themeStyles[theme]?.text || "Select a theme"}</p>
      </div>
    </div>
  );
}

export default App;
