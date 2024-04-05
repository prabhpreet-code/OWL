import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarketPlace from "./pages/MarketPlace";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import { ButtonContextProvider } from "./contexts/ButtonContext";
import { GameDetailsPage } from "./pages/Details";
import Profile from "./pages/Profile";
import { SidebarContextProvider } from "./contexts/SidebarContext";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <SidebarContextProvider>
          <ButtonContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/market" element={<MarketPlace />} />
              <Route path="/game/:id" element={<GameDetailsPage />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </ButtonContextProvider>
        </SidebarContextProvider>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
