import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Shorts from "./components/shorts/shorts";
import Library from "./components/library/library";
// import Subscriptions from "./components/subscription/subscription";
import Links from "./components/links/links";
import Resume from "./components/resume/template";
import Shobhit from "./components/resume/Shobhit";
import Notfound from "./components/Notfound/Notfound";
import TemplateMain from "./components/resume/main_resume";
import "./App.scss";
// import { useState } from "react";

function App() {

  return (
    <div className="App">
      <BrowserRouter >
        <div className="fullnav">

          <Navbar />
        </div>
        <div className="main">
          <div className="side">
            {/* {toggle ? <Sidebar /> : ""} */}
            <Sidebar />
          </div>
          <div className="hero">
            <div className="links">
              <Links />
            </div>
            <div className="main_section">
              <Routes>
                <Route path="/" element={<Shorts />}></Route>
                <Route path="/home" element={<Shorts />}></Route>
                <Route path="/resume/akansha" element={<Resume />}></Route>
                <Route path="/resume/Shobhit" element={<Shobhit />}></Route>
                <Route
                  path="/resume/:userid"
                  element={<TemplateMain />}
                ></Route>
                <Route path="/shorts" element={<Shorts />}></Route>
                <Route path="/subscription" element={<Notfound />}></Route>
                <Route path="/library" element={<Library />}></Route>
                <Route path="/*" element={<Notfound />}></Route>
                <Route path="/resume/*" element={<Notfound />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
