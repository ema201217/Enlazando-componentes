import React from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import Footer from "./Footer";
import ContentRowCenter from "./ContentRowCenter";
import ContentRowMovies from "./ContentRowMovies";
import Chart from "./Chart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContentWrapper from './ContentWrapper';
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div id="wrapper">
          <SideBar />
          {/*<!-- Content Wrapper -->*/}
          <div id="content-wrapper" className="d-flex flex-column">
            {/*<!-- Main Content -->*/}
            <div id="content" className="justify-content-between">
              <TopBar />
              <Routes>
                <Route path="/" element={<ContentWrapper />} />
                <Route path="/pages" element={<ContentRowCenter />} />
                <Route path="/chart" element={<ContentRowMovies />} />
                <Route path="/table" element={<Chart />} />
                <Route path="*" element={ <h2 className="">404 Not Found </h2>} />
              </Routes>
              <Footer />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
