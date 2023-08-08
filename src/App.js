import logo from "./logo.svg";
import "./App.css";
import Table from "./pages/Table";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import UserContext from "./context/UserContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={[user, setUser]}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/list" element={<Table />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
