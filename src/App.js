import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
import React, { useState } from "react"; //imrs
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//div nahalne bhaye <></> use garna milchha
//App.css default import bhairako chha
//yesari kunai pani css import garna sakinchha
// let name = "<b>harry</b>";
function App() {
  const [mode, setMode] = useState("light"); //whether a darkmode is enabled or not
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
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#27196a";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "Textutils - Dark Mode"; //set title
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "Textutils - Light Mode";
    }
  };
  return (
    <>
    <Router>
      {/* <h1>Hello {name}</h1>  */}
      {/* Yesari variable use garna sakinchha, imae pani yesari garna sakinchha  and external html lai pani sanitize gardinchha tara tesko laagi dangerouslySetHtml bata garna milchha  */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar title="TextUtils" aboutText = "About textUtils"/> */}

      {/* props pass gareko yesma string matrai nabhayera string object j pani pass garna milchha  */}

      <Alert alert={alert} />

      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextFrom
              heading="Tryit TextUtils - Word counter, Character counter, Remove extra spaces"
              mode={mode}
              showAlert={showAlert}
            />
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
