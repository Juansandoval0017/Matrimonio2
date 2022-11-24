'use client'
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: '#000',
      }
      
    },
    title: {
      display: true,
      text: '',
      
    },
  },

  scales: {
    x: {
      ticks: {
        // For a category axis, the val is the index so the lookup via getLabelForValue is needed
        
        color: 'black',
      }
    },
    y: {
      ticks: {
        // For a category axis, the val is the index so the lookup via getLabelForValue is needed
        
        color: 'black',
      }
    }
  }

};

const labels = ['Puntajes'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Milena',
      data: labels.map(() => Math.round(Math.random() * 100)),
      backgroundColor: 'rgba(219, 39, 119, 0.8)',
      
    },
    {
      label: 'David',
      data: labels.map(() =>  Math.round(Math.random() * 100)),
      backgroundColor: 'rgba(37, 99, 235, 0.8)',
      
    },
  ],
};

export default function Grafica() {
  return <Bar options={options} data={data} />;
}