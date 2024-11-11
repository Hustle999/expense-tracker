"use client";

import React, { useEffect, useRef } from "react";
import {
  Chart,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  DoughnutController,
} from "chart.js";

Chart.register(ArcElement, Title, Tooltip, Legend, DoughnutController);

export const DuguiDiagram = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null); // Ref to store the chart instance

  useEffect(() => {
    // Ensure the canvas is available
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");

      // Destroy previous chart instance if exists
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      // Create a new chart instance and store it in the ref
      chartRef.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          datasets: [
            {
              data: [65, 59, 79, 75, 56, 55, 40],
              backgroundColor: [
                "rgba(75, 192, 192, 0.8)", // Green for Jan
                "rgba(153, 102, 255, 0.8)", // Purple for Feb
                "rgba(255, 159, 64, 0.8)", // Orange for Mar
                "rgba(54, 162, 235, 0.8)", // Blue for Apr
                "rgba(255, 99, 132, 0.8)", // Red for May
                "rgba(255, 205, 86, 0.8)", // Yellow for Jun
                "rgba(201, 203, 207, 0.8)", // Grey for Jul
              ],
              borderColor: [
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(255, 205, 86, 1)",
                "rgba(201, 203, 207, 1)",
              ],
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false, // Hide the legend completely
            },
            tooltip: {
              callbacks: {
                label: (tooltipItem) => {
                  return `${tooltipItem.label}: ${tooltipItem.raw}`; // Show label and value in tooltip
                },
              },
            },
          },
          cutout: "70%", // Adjust the hole size in the center (70% means large hole)
        },
      });
    }

    // Cleanup the chart on unmount or when the canvas changes
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy(); // Destroy the chart instance to avoid the "Canvas already in use" error
      }
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="h-[350px] p-5">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};
