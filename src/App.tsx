import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarketPlace from "./pages/MarketPlace";
import Home from "./pages/Home";
import { SidebarContextProvider } from "./contexts/SidebarContext";
import { FormContextProvider } from "./contexts/FormContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { QueryClient as QC, QueryClientProvider as QCP } from "react-query";
import { WagmiProvider } from "wagmi";
import { arbitrum, mainnet } from "wagmi/chains";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { ButtonContextProvider } from "./contexts/ButtonContext";
import { GameDetailsPage } from "./pages/Details";
import Profile from "./pages/Profile";

import "./App.css";
import { ProtectedRoutes } from "./components/ProtectedRoutes";

const queryClient = new QueryClient();
const qClient = new QC();

// 0. Setup queryClient

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "6082a50d2b5eb6813af950b294b44f7f";

// 2. Create wagmiConfig
const metadata = {
  name: "Owl.gg",
  description: "gaming through blockchain",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum] as const;
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  // Optional - Override createConfig parameters
});

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true,
  themeMode: "dark",
  themeVariables: {
    "--w3m-font-family": '"Urbanist", "sans-serif"',
    "--w3m-color-mix": "#1F1C18",
    "--w3m-color-mix-strength": 40,
    "--w3m-accent": "#1F1C18",
    "--w3m-font-size-master": "12px",
    "--w3m-border-radius-master": "2px",
  },
});

function App() {
  return (
    <BrowserRouter>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <QCP client={qClient}>
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
          </QCP>
        </QueryClientProvider>
      </WagmiProvider>

      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
    </BrowserRouter>
  );
}

export default App;
