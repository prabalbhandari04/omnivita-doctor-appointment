import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { lineChart } from '../data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
    responsive: true,
    interaction: {
        mode: 'index' as const,
        intersect: false,
    },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Yearly Status',
    },
  },
  scales: {
    x: {
        display: true,
        grid: {
            drawOnChartArea: false,
        }
    },
    y: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
      grid: {
          drawOnChartArea: false,
      }
    },
    y1: {
      type: 'linear' as const,
      display: false,
      position: 'right' as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};




export default function Chart() {
  return(
    <div style={{width: "100%", borderRadius: "8px"}}>
        <div style={{margin: "1.5rem"}}>
            <Line options={options} data={lineChart} />
        </div>
    </div>   
  ) 
  
}
