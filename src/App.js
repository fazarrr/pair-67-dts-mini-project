import "./App.css";
import { DetailMovie } from "./containers/DetailMovie";
import { Homepage } from "./containers/HomePage";
import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@mui/material";
import ProtectedRoute from "./components/ProtectedRoute";

import Navbar from "./components/Navbar/Index";
import theme from "./themes/Theme";
import Footer from "./components/Footer";
import Login from "./containers/Login";
import Register from "./containers/Register";
import { DetailTv } from "./containers/DetailTv";
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Homepage />
                <Footer />
              </>
            }
          />
          <Route
            path="/movies"
            element={
              <>
                <Navbar />
                <Homepage />
                <Footer />
              </>
            }
          />
          <Route
            path="/series"
            element={
              <>
                <Navbar />
                <Homepage />
                <Footer />
              </>
            }
          />
          <Route
            path="/newandpopular"
            element={
              <>
                <Navbar />
                <Homepage />
                <Footer />
              </>
            }
          />
          <Route
            path="/mylist"
            element={
              <>
                <Navbar />
                <Homepage />
                <Footer />
              </>
            }
          />
          <Route
            path="login"
            element={
              <ProtectedRoute loginOnly={false}>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="register"
            element={
              <ProtectedRoute loginOnly={false}>
                <Register />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <ProtectedRoute>
                <Navbar />
                <DetailMovie />
                <Footer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tv/:id"
            element={
              <ProtectedRoute>
                <Navbar />
                <DetailTv />
                <Footer />
              </ProtectedRoute>
            }
          />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
