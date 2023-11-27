import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

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
      {/* {  <Navbar title="TextN-X" About="About"/>} */}
      {/* <Navbar/> */}
      {/* <Router> */}
        {<Navbar title="TextN-X" mode={mode} toggleMode={toggleMode} />}
        <Alert alert={alert} />
        {/* <div className="container my-3">
          <Switch>
            <Route exact path="/About"> */}
              {/* <About />
            </Route>
            <Route exact path="/"> */}
              <TextForm
                showAlert={showAlert}
                h1="Re-New-Text Here> Write text File in the box for Changes"
                mode={mode}
              />
            {/* </Route>
           </Switch> */}
         {/* </div> */}
     {/* </Router> */}
    </>
  )
};

export default App;
