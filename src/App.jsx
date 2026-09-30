import Home from "./pages/Home";
import Movies from "./pages/Movies";
import "./App.css";

function App() {
  if (window.location.pathname === "/movies") {
    return <Movies />;
  }

  return <Home />;
}

export default App;