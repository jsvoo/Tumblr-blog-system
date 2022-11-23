import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import Admin from "./components/Admin";
import TumblrContext from "./context/TumblrContext";
import PostTypes from "./components/PostTypes";
import CreatePost from "./components/CreatePost";
export default function App() {
  return (
    <div className="App">
      <TumblrContext>
        <BrowserRouter>
          {/* <PostTypes/> */}
          <Navigation />

          {/* <LandingPage /> */}
          <Routes>
            <Route element={<Navigation />} path="nav" />
            <Route element={<SignUp />} path="modal" />
            <Route element={<Admin />} path="admin" />
            <Route element={<LandingPage />} path="/" />
            <Route element={<CreatePost />} path="create" />
          </Routes>
        </BrowserRouter>
      </TumblrContext>
    </div>
  );
}
