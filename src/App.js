import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
import InfoPanel from "./components/InfoPanel/InfoPanel"
import Schedule from "./components/Schedule/Schedule";
import Footer from "./components/Footer/Footer";
import ProgramView from "./components/ProgramView/ProgramView";
import './App.css';

function App() {

  const [yt_id, setYt_Id] = useState("dQw4w9WgXcQ");

  function passId(id) {
    setYt_Id(id);
    console.log("Hey, we have an id that came in: " + yt_id);
  }

  return (
    <div className="App">
      <div className="master-grid">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <InfoPanel />
              <Schedule
                passId={passId}
              />
              <Footer />
            </Route>
          </Switch>
          <Switch>
            <Route path="/pv">
              <ProgramView
                yt_id={yt_id}
              />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
