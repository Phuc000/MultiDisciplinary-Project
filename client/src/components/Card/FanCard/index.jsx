import React from "react";
import { useState } from "react";
import { CFormRange } from '@coreui/react';
import { CCollapse, CButton, CCard, CCardBody } from '@coreui/react';
import './FanCard.css';

const FanCard = () => {
    const [isOn, setIsOn] = useState(false);
    const [speed, setSpeed] = useState(30);
    const [visible, setVisible] = useState(false);

    const toggleFan = () => {
      setIsOn(!isOn);
      setVisible(false);
    };

    const handleSpeedChange = (event) => {
        setSpeed(parseInt(event.target.value)); // Parse speed value as integer
      };

    return (
        <div className="fan-card-content">
        <div className="fan-card">
            <h3>Fan</h3>
            <div className="fan">
                <div>
                    <div className="fan-condition">
                        <p>{isOn ? "On" : "Off"}</p>
                    </div>
                    <div className="inline">
                    <div className={`toggle-container ${isOn ? "" : "off"}`} onClick={toggleFan}>
                        <div className="toggle-switch" style={{ left: isOn ? "50%" : "0" }}></div>
                    </div>
                    {/* <button className="dropdown-icon" >▼</button> */}
                    {isOn ? <CButton className="collapse-btn" color="primary" onClick={() => setVisible(!visible)}>▼</CButton> : null}
                    {/* <CButton color="primary" onClick={() => setVisible(!visible)}>
                        ▼
                    </CButton> */}
                    {/* Dropdown content */}
                    </div>
                    
                </div>
            </div>
        </div>
        <CCollapse className="collapse-speed" visible={visible && isOn}>
            <CCard className="mt-2">
                <CCardBody>
                    <div className="speed-drag-bar">
                        <CFormRange
                          min="0"
                          max="100"
                          step="1"
                          value={speed}
                          onChange={handleSpeedChange}/>
                        <p>Speed: {speed}</p>
                    </div>
                </CCardBody>
            </CCard>
        </CCollapse>
        </div>
    );
}
export default FanCard;