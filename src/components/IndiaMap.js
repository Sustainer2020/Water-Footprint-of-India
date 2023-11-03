// IndiaMap.js

import React, { useState, useEffect } from "react";
import { BrowserRouter as Link, useNavigate } from "react-router-dom";
import India from "@svg-maps/india";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";

function IndiaMap({ onStateClick }) {
    const [stateCode, setStateCode] = useState("");
    const [stateName, setStateName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (stateName) {
            navigate(`/${stateName}`);
            onStateClick(stateName);
        }
    }, [stateName, navigate, onStateClick]);

    function onLocationClick(event) {
        setStateCode(event.target.id);
        setStateName(event.target.getAttribute("name"));

        navigate(`/${stateName}`);

        console.log("Id", event.target.id);
        console.log("Name", event.target.getAttribute("name"));

        // Call the callback function from App.js and pass stateName as an argument
        onStateClick(stateName);
    }

    return (
        <div>
            <SVGMap map={India} onLocationClick={onLocationClick} />
        </div>
    );
}

export default IndiaMap;
