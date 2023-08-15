import logo from "./logo.svg";
import "./App.css";
import Table from "./pages/Table";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import UserContext from "./context/UserContext";
import { useState } from "react";
import DonorLists from "./components/DonorLists";
import SingleCard from "./pages/BloodRequest";
import DonateCard from "./components/DonateCard";
import RecipientInfo from "./pages/RecipientInfo";
import Appointment from "./components/Appointment";
import RecipientForm from "./pages/RecipientForm";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <UserContext.Provider value={[user, setUser]}>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login />} />
            <Route path="/list" element={<Table />} />
            <Route path="/recipient-form" element={<RecipientForm />} />
            <Route path="/app" element={<Appointment />} />
            <Route path="/recipientID/:_id" element={<RecipientInfo />} />
            <Route path="/donors" element={<DonorLists />} />
            <Route path="/bloodRequest" element={<SingleCard />} />
            <Route path="/bloodRequestCard" element={<DonateCard />} />
          </Routes>
        )}
      </UserContext.Provider>
    </div>
  );
}

export default App;
