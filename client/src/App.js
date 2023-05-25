import "./App.css";
import { AllRoutes } from "./AllRoutes";
import { Navbar } from "./components/navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes/>
      </Router>
    </div>
  );
}

export default App;
