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

import { WalletProvider } from "./contexts/WalletContext";

//Protected Logic
import { ProtectedRoutes } from "./components/ProtectedRoutes";

import "./App.css";

import { SkeletonGrid } from "./components/Marketplace/SkeletonGrid";

function App() {
  return (
    <BrowserRouter>
      <WalletProvider>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/market"
            element={
              <Suspense fallback={<SkeletonGrid />}>
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

        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster
          expand={true}
          position="bottom-right"
          theme="dark"
          richColors={true}
          visibleToasts={2}
          toastOptions={{
            classNames: {
              toast: "bg-gray-700/55",
              title: "text-white",
              description: "text-red-400",
            },
          }}
        />
      </WalletProvider>
    </BrowserRouter>
  );
}

export default App;
