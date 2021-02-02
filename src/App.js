import InfoPanel from "./components/InfoPanel/InfoPanel"
import Schedule from "./components/Schedule/Schedule";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="master-grid">
        <InfoPanel />
        <Schedule />
        <Footer />
      </div>
    </div>
  );
}

export default App;
