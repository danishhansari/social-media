import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useMemo } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
const Login = lazy(() => import("./pages/Login"));
const Profile = lazy(() => import("./pages/Profile"));
import Loader from "./components/Loader";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSetting } from "./theme.js";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSetting(mode)), [mode]);

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Navbar />}>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile/:userId" element={<Profile />} />
              </Route>
            </Routes>
          </Suspense>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
