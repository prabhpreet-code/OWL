import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

//Page Imports
import Home from "./pages/Home";
import MarketPlace from "./pages/MarketPlace";
import { GameDetailsPage } from "./pages/Details";
import Profile from "./pages/Profile";

//Context Providers
import { ButtonContextProvider } from "./contexts/ButtonContext";
import { SidebarContextProvider } from "./contexts/SidebarContext";
import { FormContextProvider } from "./contexts/FormContext";
import { WalletProvider } from "./contexts/WalletContext";

//Protected Logic
import { ProtectedRoutes } from "./components/ProtectedRoutes";

import "./App.css";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <BrowserRouter>
      <WalletProvider>
        <CartProvider>
          <FormContextProvider>
            <SidebarContextProvider>
              <ButtonContextProvider>
                <Routes>
                  <Route path="/" element={<Home />} />

                  <Route path="/market" element={<MarketPlace />} />
                  <Route path="/game/:id" element={<GameDetailsPage />} />

                  <Route
                    path="/profile"
                    element={
                      <ProtectedRoutes>
                        <Profile />
                      </ProtectedRoutes>
                    }
                  />
                </Routes>
              </ButtonContextProvider>
            </SidebarContextProvider>
          </FormContextProvider>
        </CartProvider>

        <ReactQueryDevtools initialIsOpen={false} />
      </WalletProvider>
    </BrowserRouter>
  );
}

export default App;
