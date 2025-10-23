import "./reset.css";
import "./App.css";
import Home from "./pages/Home";
import ScrollUp from "./component/ScrollUp";

function App() {
  return (
    <div className=" bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      <Home />
      <ScrollUp />
    </div>
  );
}

export default App;
