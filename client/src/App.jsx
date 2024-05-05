import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import ProfilePage from "./pages/ProfilePage";
const AuthPage = lazy(() => import("./pages/AuthPage"));
const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <>
      <RecoilRoot>
        <Router>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/login" element={<AuthPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/:profile" element={<ProfilePage />} />
            </Routes>
          </Suspense>
        </Router>
      </RecoilRoot>
    </>
  );
}
export default App;
