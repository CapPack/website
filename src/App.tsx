import Layout from "./layouts/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Downloads from "./pages/Downloads";
import VersionCompatibility from "./pages/VersionCompatibility";
import Credits from "./pages/Credits";

function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="downloads" element={<Downloads />} />
            <Route
              path="version-compatibility"
              element={<VersionCompatibility />}
            />
            <Route path="credits" element={<Credits />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
