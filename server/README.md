# Weather API Project

This project is a Node.js application that provides weather information based on a location. The application uses Express.js and interacts with an external weather API.

## Table of Contents

- [Overview](#overview)
- [Endpoints](#endpoints)
- [Environment Variables](#environment-variables)

## Overview

This application have a single endpoint to fetch weather information. The data is retrieved from an external weather API and processed to provide current weather conditions and forecast data.

## Endpoints

| CRUD   | Response              | Explain                                                  | Method | Send in Body | URL                  | Query Params    |
|--------|------------------------|----------------------------------------------------------|--------|--------------|----------------------|-----------------|
| Read   | JSON object            | Retrieves weather information for a specified location | GET    | No           | `/api/weather`       | `location` (string) |

### Example Request

**GET** `/api/weather?location=London`

### Example Response

```json
{
    "city": "London",
    "country": "UK",
    "lat": 51.51,
    "lon": -0.13,
    "date": "24/08/2024",
    "time": "14:00",
    "temp_c": 18,
    "condition": "Clear",
    "precip_mm": 0,
    "humidity": 55,
    "wind_kph": 10,
    "lastDateUpdate": "23/08/2024",
    "lastTimeUpdate": "23:00",
    "hour": [
        {"time": "14:00", "temp_c": 18},
        {"time": "15:00", "temp_c": 19},
        {"time": "16:00", "temp_c": 20},
        {"time": "17:00", "temp_c": 21},
        {"time": "18:00", "temp_c": 22}
    ]
}
```

## Environment Variables
- PORT: The port on which the server will run. Default is 5000.
- API_WEATHER_KEY: Your API key for accessing the weather API.
- API_WEATHER_BASE_URL: The base URL for the weather API (e.g., http://api.weatherapi.com/v1).

## How to Run
Clone the repository.

Install dependencies: npm install.

Create a .env file in the root directory with the following content:
```bash
PORT=5000
API_WEATHER_KEY=f7f31bd608304af29b692326242208
API_WEATHER_BASE_URL=http://api.weatherapi.com/v1
```

Start the server: npm start.

Access the API at http://localhost:5000/api/weather?location=your_city.

