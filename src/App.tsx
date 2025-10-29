import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Game from "./pages/game";
import Upgrades from "./pages/upgrades";
import Tasks from "./pages/tasks";
import Wallet from "./pages/wallet";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/upgrades" element={<Upgrades />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/wallet" element={<Wallet />} />
          {/* 
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
