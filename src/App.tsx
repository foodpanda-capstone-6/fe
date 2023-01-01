import react, { useState } from "react";
import "./App.css";
import { SideSrollCard } from "./components/SideScrollCard";
import Header from "./components/Header";
import HomePageMenu from "./components/HomePageMenu";
import Login from "./components/Login";
import Register from "./components/Register";
import UserVoucherPage from "./components/UserVoucherPage";

function App() {
  const [showSideNav, setShowSideNav] = useState<boolean>(false);

  return (
    <div className="App">
      <Header sections={[]} title={"foodpanda"} />
      <HomePageMenu />
      <SideSrollCard />
      <SideSrollCard />
      {/* <Login />
      <Register />
      <UserVoucherPage /> */}
    </div>
  );
}

export default App;
