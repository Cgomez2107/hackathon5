import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import CreateFarm from "./pages/CreateFarm";
import FarmView from "./pages/FarmView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/createFarm" element={<CreateFarm />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/farmView" element={<FarmView />} />
    </Routes>
  );
}

export default App;
