import axios from "axios";
const getWeatherByLocation = async (req, res) => {
    let { location } = req.query;

    if (!location) //If location is empty or missing
        return res.status(400).json({ "type": "Bad Request", "message": "parameter 'City name' is missing or empty!" });

    try { //Try to get weather from api
        let responseFromWeatherApi = await axios.get(`${process.env.API_WEATHER_BASE_URL}/forecast.json?key=${process.env.API_WEATHER_KEY}&q=${location}&days=2`);

        //Taking data from the Jason
        let resLocation = responseFromWeatherApi.data.location;
        let city = resLocation.name;
        let { country, lat, lon } = resLocation;
        let [date, time] = resLocation.localtime.split(' ');

        //Change date for 'dd/mm/yy' format
        date = changeFormatDate(date);

        let resCurrent = responseFromWeatherApi.data.current;
        let { temp_c, wind_kph, precip_mm, humidity, last_updated } = resCurrent;

        let [lastDateUpdate, lastTimeUpdate] = last_updated.split(' ');

        //Change date for 'dd/mm/yy' format
        lastDateUpdate = changeFormatDate(lastDateUpdate)

        let condition = resCurrent.condition["text"];
        let todayWeatherByHoursArr = responseFromWeatherApi.data.forecast.forecastday[0].hour;

        let currentHourTime = parseInt(time.split(':')[0]);//current hour
        //Create an array that have 5 hours after the current hour
        let arrHourToResponse = todayWeatherByHoursArr
            .filter((element, index) => index >= currentHourTime && index <= currentHourTime + 4)
            .map((element) => {
                return { "time": (element.time).split(' ')[1], "temp_c": parseInt(element.temp_c) }
            })

        //If we need more hours because there are not enough hours left in the current day,
        // we will take them from the next day        
        let length = 5 - arrHourToResponse.length;
        if (length != 0) {
            let nextDayWeatherByHoursArr = responseFromWeatherApi.data.forecast.forecastday[1].hour;
            for (let i = 0; i < length; i++) {
                arrHourToResponse.push({ time: (nextDayWeatherByHoursArr[i].time).split(' ')[1], "temp_c": parseInt(nextDayWeatherByHoursArr[i].temp_c) })

            }
        }


        //Create an object to response to the client
        let responseForClient = { city, country, lat, lon, date, time: time, "temp_c": parseInt(temp_c), condition, precip_mm, humidity, wind_kph, lastDateUpdate, lastTimeUpdate, "hour": arrHourToResponse }

        return res.status(200).json(responseForClient);


    }
    catch (err) {
        return res.status(err.response.status).json({ "type": "error", "message": err.response.data.error.message });
    }

}

//A function that Change date for 'dd/mm/yy' format

const changeFormatDate = (date) => {
    let [year, month, day] = date.split('-')
    return `${day}/${month}/${year}`
}


export { getWeatherByLocation };