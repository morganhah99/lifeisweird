import React from "react";
import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import SkillAllocator from "./pages/SkillAllocator";
import { UserProvider } from "./context/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Common from "./pages/Common";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/skillallocator" element={<SkillAllocator />} />
            <Route path="/common" element={<Common />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
