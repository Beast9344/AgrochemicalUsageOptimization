
document.getElementById('logoutBtn').addEventListener('click', function() {
  // Here you can implement the logic to logout the user
  // For example, you might want to clear any stored authentication tokens, redirect to the login page, etc.
  alert('Logged out successfully!');
  // For demonstration purposes, let's redirect to the login page
  window.location.href = 'index.html';
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('cropsForm').addEventListener('submit', function(event) {
      event.preventDefault(); 
      
      const cropID = document.getElementById('cropID').value;
      const cropName = document.getElementById('cropName').value;
      // Prevent the form from submitting

      // Perform any form validation here if needed

      // Redirect back to the homeDashboard
      window.location.href = "homeDashboard.html";
  });
});

  // Button click event listeners for other functionality
  document.getElementById('optimizationBtn').addEventListener('click', () => {
    window.location.href = "OptimizationStrategies.html";
  });

  document.getElementById('historicalDataBtn').addEventListener('click', () => {
    window.location.href = "HistoricalData.html";
  });

  document.getElementById('soilDataBtn').addEventListener('click', () => {
    window.location.href = "SoilData.html";
  });

  document.getElementById('weatherDataBtn').addEventListener('click', () => {
    window.location.href = "WeatherData.html";
  });
   document.getElementById('locationsBtn').addEventListener('click', () => {
    window.location.href = "Locations.html";
  });

  document.getElementById('environmentalImpactsBtn').addEventListener('click', () => {
    window.location.href = "EnvironmentalImpacts.html";
  });

  document.getElementById('agrochemicalsBtn').addEventListener('click', () => {
    window.location.href = "Agrochemicals.html";
  });


  document.getElementById('usersBtn').addEventListener('click', () => {
    window.location.href = "users.html";
  });



document.getElementById('cropsBtn').addEventListener('click', function() {
  // Redirect to the Crops form page
  window.location.href = "crops.html";
});


