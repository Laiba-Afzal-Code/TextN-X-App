import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whenever enable dark mode or note
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "rgb(220, 223, 226)";
      document.body.style.color = "black";
      showAlert("Light mode has been Enable", "success");
    } 
    else {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(83, 82, 82)";
      document.body.style.color = "white";
      showAlert("Dark mode has been Enable", "success");
    }
  };

  return (
    <>
    <BrowserRouter>
        {<Navbar title="TextN-X" mode={mode} toggleMode={toggleMode} />}
        <Alert alert={alert} />

      <Routes>
        <Route exist path="/about" element={<About/>}></Route>
             <Route exist path="/textform" element={<TextForm
                showAlert={showAlert}
                h1="Try TextN-X Word Counter, Character Counter Remove Extra Spaces"
                mode={mode}
                />}></Route> 
      </Routes>
                </BrowserRouter>
    </>
  )
};

export default App;
