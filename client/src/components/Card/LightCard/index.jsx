import React from "react";
import { useState } from "react";
import './LightCard.css';

const LightCard = ({ light }) => {
    const [isOn, setIsOn] = useState(false);

    const toggleLight = () => {
      setIsOn(!isOn);
    };

    return (
        <div className="light-card">
            <h3>{light}</h3>
            <div className="light">
                <div>
                    <div className="light-condition">
                        <p>{isOn ? "On" : "Off"}</p>
                    </div>
                    <div className={`toggle-container ${isOn ? "" : "off"}`} onClick={toggleLight}>
                        <div className="toggle-switch" style={{ left: isOn ? "50%" : "0" }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LightCard;