import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
const AuthPage = lazy(() => import("./pages/AuthPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
import ProfilePage from "./pages/ProfilePage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <RecoilRoot>
        <Router>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/login"
                element={<PrivateRoute component={<AuthPage />} />}
              />
              <Route
                path="/"
                element={<PrivateRoute component={<HomePage />} />}
              />
              <Route
                path="/:profile"
                element={<PrivateRoute component={<ProfilePage />} />}
              />
            </Routes>
          </Suspense>
        </Router>
      </RecoilRoot>
    </>
  );
}
export default App;
