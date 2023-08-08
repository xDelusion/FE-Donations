import "./App.css";
import UserContext from "./context/UserContext";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import { checkToken } from "./api/auth";
import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState(false);

  // useEffect(() => {
  //   setUser(checkToken());
  // }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        {user ? (
          <div>
            <Navbar />
            <Routes>
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
        ) : (
          <div>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/*" element={<>Page Not Found</>} />
            </Routes>
          </div>
        )}
      </div>
    </UserContext.Provider>
  );
}

export default App;
