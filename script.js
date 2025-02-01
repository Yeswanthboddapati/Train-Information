const apiKey = '4e857d8a7dmshd472221c249f716p12c0c4jsn151bcad15966';

async function searchStation() {
    const stationInput = document.getElementById('station-input').value;
    const resultsDiv = document.getElementById('station-results');
    resultsDiv.innerHTML = "Searching for station...";
    try {
      const response = await fetch(`https://irctc1.p.rapidapi.com/api/v1/searchStation?query=${stationInput}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
        }
      });
      const data = await response.json();
      resultsDiv.innerHTML = JSON.stringify(data);
    } catch (error) {
      resultsDiv.innerHTML = "Error fetching data.";
      console.error("Error:", error);
    }


}

async function searchTrain() {
  const trainInput = document.getElementById('train-input').value;
  const resultsDiv = document.getElementById('train-results');
  resultsDiv.innerHTML = "Searching for train...";

  try {
    const response = await fetch(`https://irctc1.p.rapidapi.com/api/v1/searchTrain?query=${trainInput}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
      }
    });
    const data = await response.json();
    resultsDiv.innerHTML = JSON.stringify(data);
  } catch (error) {
    resultsDiv.innerHTML = "Error fetching data.";
    console.error("Error:", error);
  }
}



async function trainsBetweenStations() {
    const fromStation = document.getElementById('from-station').value;
    const toStation = document.getElementById('to-station').value;
    const Date = document.getElementById('date').value;
    const resultsDiv = document.getElementById('between-stations-results');
    resultsDiv.innerHTML = "Searching for trains...";

    try {
      const response = await fetch(`https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations?fromStationCode=${fromStation}&toStationCode=${toStation}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
        }
      });
      const data = await response.json();
      resultsDiv.innerHTML = JSON.stringify(data);
    } catch (error) {
      resultsDiv.innerHTML = "Error fetching data.";
      console.error("Error:", error);
    }
}

async function getTrainSchedule() {
    const trainNumber = document.getElementById('schedule-train-input').value;
    const resultsDiv = document.getElementById('schedule-results');
    resultsDiv.innerHTML = "Fetching schedule...";

    try {
      const response = await fetch(`https://irctc1.p.rapidapi.com/api/v1/getTrainSchedule?trainNo=${trainNumber}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
        }
      });
      const data = await response.json();
      resultsDiv.innerHTML = JSON.stringify(data);
    } catch (error) {
      resultsDiv.innerHTML = "Error fetching data.";
      console.error("Error:", error);
    }
}

async function getPnrStatus() {
    const pnrNumber = document.getElementById('pnr-input').value;
    const resultsDiv = document.getElementById('pnr-results');
    resultsDiv.innerHTML = "Checking PNR status...";
    try {
      const response = await fetch(`https://irctc.p.rapidapi.com/api/v1/getPnrStatus?pnrno=${pnrNumber}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
        }
      });
      const data = await response.json();
      resultsDiv.innerHTML = JSON.stringify(data);
    } catch (error) {
      resultsDiv.innerHTML = "Error fetching data.";
      console.error("Error:", error);
    }
}