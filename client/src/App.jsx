import { lazy, Suspense } from "react";
import Loader from "./components/loading/Loader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import PrivateRoute from "./components/PrivateRoute";
const AuthPage = lazy(() => import("./pages/AuthPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const BookmarkPage = lazy(() => import("./pages/BookmarkPage"));
import ProfilePage from "./pages/ProfilePage";

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
                path="/i/bookmark"
                element={<PrivateRoute component={<BookmarkPage />} />}
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
