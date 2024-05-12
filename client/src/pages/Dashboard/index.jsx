import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import CurrentWeatherCard from "../../components/Card/CurrentWeatherCard";
import getCurrentWeather from "../../service/weatherapi/getCurrentWeather";
import LightCard from "../../components/Card/LightCard";
import FanCard from "../../components/Card/FanCard";

const Dashboard = ({ users }) => {
    const [weather, setWeather] = useState({});
    const [light, setLight] = useState('Light 1');
    const [greeting, setGreeting] = useState("");

    const getWeather = async () => {
        const response = await getCurrentWeather();
        console.log(response);
        setWeather(response);
    }

    useEffect(() => {
        getWeather();
    }, []);

    useEffect(() => {
        const now = new Date();
        const currentHour = now.getHours();
    
        let greetingMessage = "";
    
        if (currentHour < 12) {
          greetingMessage = "Good morning!";
        } else if (currentHour < 18) {
          greetingMessage = "Good afternoon!";
        } else {
          greetingMessage = "Good evening!";
        }
    
        setGreeting(greetingMessage);
      }, []);

    return (
        <div className="dashboard">
            <div className="content-section">
                <h3>Dashboard</h3>
                <div className="header-cards">
                    <CurrentWeatherCard weather={weather} />
                    <div className="welcome-user">
                        <h2>{greeting}</h2>
                    </div>
                    <div className="viewImg">
                        <img src="src/assets/background.jpg" alt="background_image" />
                    </div>
                </div>
                <div className="main-ada-content">
                    <div className="cards">
                        <LightCard light={light} />
                    </div>
                    <div className="cards">
                        <FanCard />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;