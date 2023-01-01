import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePageMenu from "./pages/HomePageMenu";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserVoucherPage from "./pages/UserVoucherPage";

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <div className="App">
      {isLogin && <Header sections={[]} title={"foodpanda"} />}
      <Routes>
        <Route path="/login" element={<Login isLogin={isLogin} />} />
        <Route path="/register" element={<Register isLogin={isLogin} />} />
        <Route path="/" element={<HomePageMenu isLogin={isLogin} />} />
        <Route
          path="/voucher/user"
          element={<UserVoucherPage isLogin={isLogin} />}
        />
      </Routes>
    </div>
  );
}

export default App;
