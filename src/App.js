import { useState } from "react";
import InfoPanel from "./components/InfoPanel/InfoPanel"
import Schedule from "./components/Schedule/Schedule";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {

  const [yt_id, setYt_Id] = useState("KdEZ1lij8Fg");

  function passId(id) {
    setYt_Id(id);
  }

  return (
    <div className="App">
      <div className="master-grid">
        <InfoPanel
          yt_id={yt_id}
        />
        <Schedule
          passId={passId}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
