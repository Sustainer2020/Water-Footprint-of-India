// App.js

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import StatePage from "./components/StatePage";
import IndiaMap from "./components/IndiaMap";
import Calculator from "./components/WaterCalculator.js";
import StateComparison from "./components/stateComp.js";
import StateData from './data/StateData.json';
import AboutUsPage from "./components/aboutUs.js";
const Home = ({ setSelectedState }) => {
    function handleStateClick(stateName) {
        setSelectedState(stateName);
    }

    return (
        <div className="d-flex justify-content-between m-5">
            <div className="col-md-6 mt-4">
                <HeroSection />
            </div>
            <div className="right col-md-5">
                <IndiaMap onStateClick={handleStateClick} />
            </div>
        </div>
    );
};

const App = () => {
    const [selectedState, setSelectedState] = useState("Uttarakhand");
    const [navbarFixed, setNavbarFixed] = useState(false);
    const defaultState = 'Uttarakhand';

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setNavbarFixed(true);
            } else {
                setNavbarFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        
            <>
                <AppNavbar className={"fixed-navbar"} ></AppNavbar>
                
                <Router>
                    <Routes>
                        <Route
                            path="/"
                            element={<Home setSelectedState={setSelectedState} />}
                        />
                        <Route path="/calculator" element={<Calculator />} />
                        <Route
                            path="/"
                            element={<Navigate to={`/${defaultState}`} />}
                        />
                        <Route
                            path="/:selectedState"
                            element={<StatePage selectedState={selectedState} />}
                        />
                        <Route
                            path="/stateComparison"
                            element={<StateComparison stateData={StateData} />}
                        />
                        <Route
                            path="/AboutUs"
                            element={<AboutUsPage/>}
                        />
                    </Routes>
                    <br />
                </Router>
                {/* <Footer></Footer> */}
            </>
            
        );
        

};

export default App;
