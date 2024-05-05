import "./History.css";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const History = () => {
    return (
        <div className="history">
            <div className="leftBackground">

            </div>

            <div className="rightHistory">
                <div className="logo">
                    <img src="./Images/logo.png" alt="Logo" />
                </div>
                <div className="welcomeHistory">
                    <img src="./Images/historyImage.png" alt="hImage"></img>
                    <p className="specialWelcome">Chào mừng</p>
                    <p className="description">Yolohome history</p>
                </div>

                <div className="historyContent">
                    <div className="historyTable">
                        <h3>History</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default History;