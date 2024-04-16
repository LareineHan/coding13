import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import PropertyDetailPage from "./pages/PropertyDetail/PropertyDetailPage";
import Listing from "./pages/Listing/Listing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Listing />} />
      <Route path="/properties/:id" element={<PropertyDetailPage />} />
    </Routes>
  );
}

export default App;
