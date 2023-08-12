import logo from "./logo.svg";
import "./App.css";
import Table from "./pages/Table";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import UserContext from "./context/UserContext";
import { useState } from "react";
import Table2 from "./pages/Table2";
import Appointment from "./components/Appointment";
import RecipientApplication from "./pages/RecipientApplication";
import DonorList from "./pages/DonorList";
import DonorLists from "./pages/DonorLists";
import DonorProf from "./pages/DonorProf";

function App() {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={[user, setUser]}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/list" element={<Table />} />
          <Route path="/lists" element={<Table2 />} />
          <Route path="/register" element={<Register />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/application" element={<RecipientApplication />} />
          <Route path="/donor" element={<DonorList />} />
          <Route path="/donors" element={<DonorLists />} />
          <Route path="/donorProf" element={<DonorProf />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
