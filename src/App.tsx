import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePageMenu from "./pages/HomePageMenu";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CartPage from "./pages/CartPage";
import UserVoucherPage from "./pages/UserVoucherPage";
import { getAuthCookie, getUsernameFromCookie } from "./ultis/helperCookie";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [username, setUsername] = useState<string | null>(null);
    const [cartNumber, setCartNumber] = useState<number>(0);

    useEffect(() => {
        const cookie = getAuthCookie();

        if (cookie) {
            const username = getUsernameFromCookie();
            setUsername(username);
            console.log(`cookie username: (${username})`);
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, [username, isAuthenticated]);

    return (
        <div className="App">
            {isAuthenticated && (
                <Header
                    sections={[]}
                    title={"foodpanda"}
                    setIsAuthenticated={setIsAuthenticated}
                    username={username}
                    cartNumber={cartNumber}
                />
            )}
            <Routes>
                <Route
                    path="/"
                    element={<HomePageMenu isLogin={isAuthenticated} />}
                />
                <Route
                    path="/login"
                    element={
                        <Login
                            isAuthenticated={isAuthenticated}
                            setAuthenticated={setIsAuthenticated}
                        />
                    }
                />
                <Route
                    path="/register"
                    element={<Register isLogin={isAuthenticated} />}
                />
                <Route
                    path="/voucher"
                    element={
                        <UserVoucherPage
                            username={username}
                            isLogin={isAuthenticated}
                            setCartNumber={setCartNumber}
                        />
                    }
                />
                <Route
                    path="/cart"
                    element={
                        <CartPage
                            username={username}
                            isLogin={isAuthenticated}
                            setCartNumber={setCartNumber}
                        />
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
