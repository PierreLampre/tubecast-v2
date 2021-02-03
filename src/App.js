import { BrowserRouter, Route, Switch } from "react-router-dom";
import InfoPanel from "./components/InfoPanel/InfoPanel"
import Schedule from "./components/Schedule/Schedule";
import Footer from "./components/Footer/Footer";
import ProgramView from "./components/ProgramView/ProgramView";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="master-grid">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <InfoPanel />
              <Schedule />
              <Footer />
            </Route>
          </Switch>
          <Switch>
            <Route path="/pv">
              <ProgramView />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
