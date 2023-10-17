import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>&copy; 2023</footer>
    </div>
  );
}

export default App;
