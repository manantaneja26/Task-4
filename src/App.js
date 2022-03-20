import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Header from "./Header.js";
import {Content} from "./Content";
import {CatalogMain} from './CatalogMain';
import  "./Catalog.js";
import "./Header.js";
import "./Content.js";
import Footer from "./Footer"
function App() {

  return (
    <>
  <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Content/>} />
        <Route path="/CatalogMain/:id/:name" element={<CatalogMain/>} />
      </Routes>
    <Footer/>
  </Router>
  </>
  );
}
export default App