import React, { useState } from "react";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import AddnewColor from "./components/AddnewColor";
import ColorComponent from "./components/ColorComponent";

function App() {
  const [colors, setColors] = useState([
    { value: "red", name: "red" },
    { value: "green", name: "green" },
    { value: "blue", name: "blue" },
    { value: "purple", name: "purple" },
  ]);

  const navigate = useNavigate();

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <header>
                <h1>Welcome To Color Factory</h1>
                <button onClick={() => navigate("/new")}>Add New Color </button>
              </header>
              <h2>Please select a color</h2>
              <ul>
                {colors.map((color) => {
                  return (
                    <li>
                    
                      <NavLink to={`/colors/${color.name}`} state={color}>
                        {color.name}{" "}
                      </NavLink>{" "}
                    </li>
                  );
                })}
              </ul>
            </main>
          }
        />
        <Route path="/new" element={<AddnewColor setColors={setColors} colors={colors} />} />
        <Route path="/colors/:colorname" element={<ColorComponent />} />
      </Routes>
    </div>
  );
}

export default App;
