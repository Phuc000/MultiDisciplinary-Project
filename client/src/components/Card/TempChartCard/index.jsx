import React from "react";
import { useState, useEffect } from "react";
import getRecentTempData from "../../../service/adafruit/getRecentTempData";
// import { Line } from 'react-chartjs-2';
// import 'chart.js/auto';
import { CChart } from "@coreui/react-chartjs";
import "./TempChartCard.css";

// Utility function to reduce the number of labels
const reduceLabels = (labels, maxLabels) => {
    const interval = Math.ceil(labels.length / maxLabels);
    return labels.map((label, index) => (index % interval === 0 ? label : ''));
  };

const TempChartCard = () => {
    // const [tempData, setTempData] = useState([]);
    const [chartData, setChartData] = useState({ datasets: [] });

    useEffect(() => {
        const fetchData = async () => {
            const data = await getRecentTempData();
            console.log("RecentTempData", data);
            const values = data.map(datapoint => parseFloat(datapoint.value)).reverse();
            const timestamps = data.map(datapoint => new Date(datapoint.created_at).toLocaleTimeString("en-GB", { hour: '2-digit', minute: '2-digit' })).reverse();
            const reducedTimestamps = reduceLabels(timestamps, 10); // Show a maximum of 5 labels

            setChartData({
              labels: reducedTimestamps,
              datasets: [
                {
                  label: 'Temperature (°C)',
                  data: values,
                  borderColor: 'rgba(75,192,192,1)',
                  backgroundColor: 'rgba(75,192,192,0.2)',
                  fill: true,
                },
              ],
            });
        }
        fetchData();
    }, []);

    return (
        <div className="TempChart">
            <h3>Temperature Chart</h3>
            <div className="Chart-Content">
                {/* <Line data={chartData} /> */}
                <CChart
                    type="line"
                    data = {chartData}
                ></CChart>
            </div>
        </div>
    );
};

export default TempChartCard;