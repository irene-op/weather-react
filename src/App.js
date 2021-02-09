import "./App.css";
import Search from "./Search";
import City from "./City";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <City />
        <Forecast />
      </header>
    </div>
  );
}

export default App;
