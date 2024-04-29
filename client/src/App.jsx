import { lazy, Suspense } from "react";
import "./custom.css";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const AuthPage = lazy(() => import("./pages/AuthPage"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/login" element={<AuthPage />} />
          </Routes>
        </Suspense>
        <Footer />;
      </Router>
    </>
  );
}
export default App;
