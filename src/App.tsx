import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePageMenu from "./pages/HomePageMenu";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserVoucherPage from "./pages/UserVoucherPage";
import { getAuthCookie,getUsernameFromCookie } from "./ultis/helperCookie";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const cookie = getAuthCookie();

    if(cookie) {
      const username = getUsernameFromCookie();
      setUsername(username);
      console.log(`cookie username: (${username})`);
      setIsAuthenticated(true);
    }else {
      setIsAuthenticated(false);
    }
  }, [username]);

  return (
    <div className="App">
      {isAuthenticated && (
        <Header
          sections={[]}
          title={"foodpanda"}
          setIsAuthenticated={setIsAuthenticated}
          username={username}
        />
      )}
      <Routes>
        <Route
          path="/login"
          element={<Login isAuthenticated={isAuthenticated} setAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/register" element={<Register isLogin={isAuthenticated} />} />
        <Route path="/" element={<HomePageMenu isLogin={isAuthenticated} />} />
        <Route
          path="/voucher/:user"
          element={<UserVoucherPage isLogin={isAuthenticated} />}
        />
      </Routes>
    </div>
  );
}

export default App;
