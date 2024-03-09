import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarketPlace from "./pages/MarketPlace";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import { ButtonContextProvider } from "./contexts/ButtonContext";
import { GameDetailsPage } from "./pages/GameDetails";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ButtonContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/market" element={<MarketPlace />} />
            <Route path="/game/:id" element={<GameDetailsPage />} />
          </Routes>
        </ButtonContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
