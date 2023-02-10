import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePageMenu from "./pages/HomePageMenu";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserVoucherPage from "./pages/UserVoucherPage";
import { getAuthCookie } from "./ultis/helperCookie";

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const cookie = getAuthCookie();
    setUsername(cookie);
    console.log(`is this cookie username: (${username})`);

    if (username !== null) {
      return setIsLogin(true);
    }
  }, [username]);

  return (
    <div className="App">
      {isLogin && (
        <Header
          sections={[]}
          title={"foodpanda"}
          setIsLogin={setIsLogin}
          username={username}
        />
      )}
      <Routes>
        <Route
          path="/login"
          element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />}
        />
        <Route path="/register" element={<Register isLogin={isLogin} />} />
        <Route path="/" element={<HomePageMenu isLogin={isLogin} />} />
        <Route
          path="/voucher/:user"
          element={<UserVoucherPage isLogin={isLogin} />}
        />
      </Routes>
    </div>
  );
}

export default App;
