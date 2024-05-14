import React from "react";
import { useState, useEffect } from "react";
import getTempData from "../../../service/adafruit/getTempData";
import getHumidData from "../../../service/adafruit/getHumidData";
import getLightData from "../../../service/adafruit/getLightData";
import { CCard, CCardBody } from "@coreui/react";
import "./SensorsCard.css";

const SensorsCard = () => {
    const [temp, setTemp] = useState(0);
    const [humid, setHumid] = useState(0);
    const [light, setLight] = useState(0);
    
    useEffect(() => {
        const fetchData = async () => {
        const data = await getTempData();
        console.log(data);
        const tempValue = data.last_value;
        setTemp(tempValue);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
        const data = await getHumidData();
        console.log(data);
        const humidValue = data.last_value;
        setHumid(humidValue);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
        const data = await getLightData();
        console.log(data);
        const lightValue = data.last_value;
        setLight(lightValue);
        };
        fetchData();
    }, []);
    
    return (
        <CCard className="sensors-card">
        <CCardBody>
            <h3>Sensors</h3>
            <div className="sensors">
            <div>
                <h4>Temperature</h4>
                <p>{temp} °C</p>
            </div>
            <div>
                <h4>Humidity</h4>
                <p>{humid} %</p>
            </div>
            <div>
                <h4>Light</h4>
                <p>{light} lux</p>
            </div>
            </div>
        </CCardBody>
        </CCard>
    );
};
export default SensorsCard;