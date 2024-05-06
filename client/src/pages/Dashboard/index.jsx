import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import getCurrentWeather from "../../service/weatherapi/getCurrentWeather";

const Dashboard = ({ users }) => {
    const [weather, setWeather] = useState({});

    const getWeather = async () => {
        const response = await getCurrentWeather();
        console.log(response);
        setWeather(response);
    }

    return (
        <div className="dashboard">
            <div className="content-section">
                <h3>Dashboard</h3>
                <div className="weather">
                    <button onClick={getWeather}>Get Weather</button>
                    <div>
                        <p>City: {weather.location?.name}</p>
                        <p>Temperature: {weather.current?.temp_c}°C</p>
                        <p>Condition: {weather.current?.condition?.text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;