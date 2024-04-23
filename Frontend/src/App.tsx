import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "sonner";
import { lazy, Suspense } from "react";

//Page Imports
import Home from "./pages/Home";
// import MarketPlace from "./pages/MarketPlace";
const MarketPlace = lazy(() => import("./pages/MarketPlace"));
const Profile = lazy(() => import("./pages/Profile"));
import { GameDetailsPage } from "./pages/Details";
// import Profile from "./pages/Profile";

//Context Providers
import { ButtonContextProvider } from "./contexts/ButtonContext";
import { SidebarContextProvider } from "./contexts/SidebarContext";
import { FormContextProvider } from "./contexts/FormContext";
import { WalletProvider } from "./contexts/WalletContext";

//Protected Logic
import { ProtectedRoutes } from "./components/ProtectedRoutes";

import "./App.css";
import { CartProvider } from "./contexts/CartContext";
import { SkeletonGrid } from "./components/Marketplace/SkeletonGrid";

function App() {
  return (
    <BrowserRouter>
      <WalletProvider>
        <CartProvider>
          <FormContextProvider>
            <SidebarContextProvider>
              <ButtonContextProvider>
                <Toaster expand={false} position="bottom-right" closeButton />
                <Routes>
                  <Route path="/" element={<Home />} />

                  <Route
                    path="/market"
                    element={
                      <Suspense fallback={<SkeletonGrid/>}>
                        {" "}
                        <MarketPlace />
                      </Suspense>
                    }
                  />

                  <Route path="/game/:id" element={<GameDetailsPage />} />

                  <Route
                    path="/profile"
                    element={
                      <ProtectedRoutes>
                        <Suspense fallback={<h1>loading</h1>}>
                          <Profile />
                        </Suspense>
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
