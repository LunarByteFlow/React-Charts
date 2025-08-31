import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';

// Register chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const theme = useTheme(); // For dynamic theme-based colors

  // Sample data
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Votes Distribution',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 2,
        hoverOffset: 20, // Adds pop-out effect on hover
        weight: 1,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          color: theme.palette.text.primary,
          font: {
            size: 14,
            weight: '500',
          },
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const value = context.raw;
            const percentage = ((value / total) * 100).toFixed(2) + '%';
            return `${context.label}: ${value} (${percentage})`;
          },
        },
        backgroundColor: theme.palette.background.paper,
        titleColor: theme.palette.text.primary,
        bodyColor: theme.palette.text.secondary,
        borderColor: theme.palette.divider,
        borderWidth: 1,
        padding: 10,
        displayColors: true,
      },
    },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4,
        padding: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: 600,
          width: '100%',
          padding: 3,
          boxShadow: 5,
          borderRadius: 3,
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            align="center"
            sx={{ marginBottom: 3, fontWeight: 600 }}
          >
            Interactive Pie Chart
          </Typography>
          <Pie data={data} options={options} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default PieChart;
