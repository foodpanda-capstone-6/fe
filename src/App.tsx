import react, { useState } from "react";
import { HomeNav } from "./components/HomeNav";
import { SideNav } from "./components/SideNav";
import { HomePageMenu } from "./components/HomePageMenu";
import { SideSrollCard } from "./components/SideScrollCard";
import "./App.css";

function App() {
  const [showSideNav, setShowSideNav] = useState<boolean>(false);

  return (
    <div className="App">
      <HomeNav showSideNav={showSideNav} setShowSideNav={setShowSideNav} />
      <HomePageMenu />
      <SideSrollCard />
      <SideSrollCard />
      {showSideNav && (
        <SideNav showSideNav={showSideNav} setShowSideNav={setShowSideNav} />
      )}
    </div>
  );
}

export default App;
