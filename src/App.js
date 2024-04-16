import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import PropertyDetailPage from "./pages/PropertyDetail/PropertyDetailPage";
import Listing from "./pages/Listing/Listing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Listing />}></Route> {/* AppLayout route*/}
        <Route index element={<PropertyDetailPage />}></Route>{" "}
        {/* Homepage route*/}
        <Route path="/properties">
          <Route index element={<Listing />}></Route>
          <Route path=":id" element={<PropertyDetailPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
