"use client";

import React, { useEffect, useRef } from "react";
import {
  Chart,
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LinearScale,
  BarController,
} from "chart.js";

Chart.register(
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LinearScale,
  BarController
);

export const BaganaDiagram = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null); // Ref to store the chart instance

  useEffect(() => {
    // Check if the canvas is available
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");

      // Destroy previous chart instance if it exists
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      // Create a new chart instance and store it in the ref
      chartRef.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          datasets: [
            {
              label: "Income",
              data: [65, 59, 79, 75, 56, 55, 40],
              backgroundColor: "rgba(75, 192, 192, 0.2)", // Green color for Income
              borderColor: "rgba(75, 192, 192, 1)", // Green border
              borderWidth: 1,
            },
            {
              label: "Expenses",
              data: [35, 29, 20, 41, 26, 25, 10],
              backgroundColor: "rgba(255, 99, 132, 0.2)", // Red color for Expenses
              borderColor: "rgba(255, 99, 132, 1)", // Red border
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            tooltip: {
              callbacks: {
                label: (tooltipItem) => {
                  return `${tooltipItem.label}: ${tooltipItem.raw}`; // Show label and value in tooltip
                },
              },
            },
          },
        },
      });
    }

    // Cleanup the chart on unmount or when the canvas changes
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy(); // Properly destroy the chart instance
      }
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="h-[350px] pl-5 pr-4">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};
