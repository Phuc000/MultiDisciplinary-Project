import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import CurrentWeatherCard from "../../components/Card/CurrentWeatherCard";
import getCurrentWeather from "../../service/weatherapi/getCurrentWeather";
import LightCard from "../../components/Card/LightCard";

const Dashboard = ({ users }) => {
    const [weather, setWeather] = useState({});
    const [light, setLight] = useState('Light 1');

    const getWeather = async () => {
        const response = await getCurrentWeather();
        console.log(response);
        setWeather(response);
    }

    useEffect(() => {
        getWeather();
    }, []);

    return (
        <div className="dashboard">
            <div className="content-section">
                <h3>Dashboard</h3>
                <div className="header-cards">
                    <CurrentWeatherCard weather={weather} />
                </div>
                <div className="main-ada-content">
                    <div className="cards">
                        <LightCard light={light} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;