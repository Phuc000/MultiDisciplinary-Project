import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import CurrentWeatherCard from "../../components/Card/CurrentWeatherCard";
import getCurrentWeather from "../../service/weatherapi/getCurrentWeather";

const Dashboard = ({ users }) => {
    const [weather, setWeather] = useState({});

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
                <div className="cards">
                    <CurrentWeatherCard weather={weather} />
                </div>
            </div>
        </div>
    );
}
export default Dashboard;