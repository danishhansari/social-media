import { lazy, Suspense } from "react";
import "./custom.css";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
const AuthPage = lazy(() => import("./pages/AuthPage"));

function App() {
  return (
    <>
      <RecoilRoot>
        <Router>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/login" element={<AuthPage />} />
              <Route path="/" element={<div>Logging succesfully</div>} />
            </Routes>
          </Suspense>
          <Footer />;
        </Router>
      </RecoilRoot>
    </>
  );
}
export default App;
