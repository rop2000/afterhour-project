import "./App.css";
import { Routes, Route } from "react-router-dom";
import HiringManager from "./pages/HiringManager";
import OfferPage from "./pages/OfferPage";
import Analytics from "./pages/Analytics";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<HiringManager />} />
          <Route path="/offers/:offerId" element={<OfferPage />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </GlobalProvider>
    </div>
  );
}
export default App;
