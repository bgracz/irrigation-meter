import React from "react";
import './Chart.css';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

Chart.defaults.color = '#fff';

const labels = Object.keys(localStorage).slice(Object.keys(localStorage).length - 7);

const data = {
  labels: labels,
  datasets: [
    {
      label: "Daily water consumption",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: Object.values(localStorage).slice(Object.values(localStorage).length - 7)
    },
  ],
};

function LineChart() {
    return (
        <div className="chart">
            <Line className="chart" data={data} />
        </div>
    )
}

export default LineChart;