// Placeholder for dark mode toggle or mic actions
document.querySelectorAll('.toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      alert('Dark mode toggle coming soon!');
    });
  });
  
  document.querySelectorAll('.mic').forEach(mic => {
    mic.addEventListener('click', () => {
      alert('Voice input feature coming soon!');
    });
  });

  
  // Dummy weather data for 7 days
const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const weatherData = {
  temperature: [22, 24, 26, 27, 25, 23, 22],
  humidity: [50, 55, 65, 70, 68, 62, 58],
  precipitation: [10, 20, 30, 25, 15, 10, 5]
};

// Get DOM elements
const ctx = document.getElementById("weatherChart").getContext("2d");
const tabs = document.querySelectorAll(".tab-btn");

// Initial chart setup
let currentChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: labels,
    datasets: [{
      label: "humidity",
      data: weatherData.humidity,
      borderColor: "#3b82f6",
      backgroundColor: "transparent",
      pointBackgroundColor: "white",
      pointBorderColor: "#3b82f6",
      pointRadius: 5,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#64748b"
        }
      },
      x: {
        ticks: {
          color: "#64748b"
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: "#3b82f6"
        }
      }
    }
  }
});

// Handle tab button clicks
tabs.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active class from all
    tabs.forEach(tab => tab.classList.remove("active"));
    btn.classList.add("active");

    const type = btn.textContent.toLowerCase();

    // Update chart data and label
    currentChart.data.datasets[0].data = weatherData[type];
    currentChart.data.datasets[0].label = type;
    currentChart.update();
  });
});
