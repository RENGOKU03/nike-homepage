import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="h-screen">
        <Nav />
        <Home />
      </div>
    </>
  );
}

export default App;
