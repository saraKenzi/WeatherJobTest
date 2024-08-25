import React, { useState } from 'react';
import './CSS/searchWeatherPlace.css';
import TodayWeather from './TodayWeather';
import { getWeatherByLocation } from './weatherApi.js';


const SearchWeatherPlace = () => {
    let [inputValue, setInputValue] = useState('');
    let [weatherDetails, setWeatherDetails] = useState('');
    let [errMssage, setErrMessage] = useState('');
    let [latitude, setLatitude] = useState('');
    let [longitude, setLongitude] = useState('');
    let [lastDate,setLastDate]=useState('');
    let [lastTime,setLastTime]=useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }
    const getWeather = async () => {
        try {
            let response = await getWeatherByLocation(inputValue);
            setErrMessage('');
            setWeatherDetails(response.data);
            setLatitude(response.data.lat);
            setLongitude(response.data.lon);
            setLastDate(response.data.lastDateUpdate);
            setLastTime(response.data.lastTimeUpdate);
            console.log(response.data);

        }
        catch (err) {
            setWeatherDetails('');
            setLatitude('');
            setLongitude('');
            setLastDate('');
            setLastTime('');
            setErrMessage(err.response.data.message);

        }
    }

    return (<div className='div-container'>
        <div className='left-side'>
            <img className='img-style' src="../../logo.svg" alt="fintek_logo" />
            <div className='search-div'>
                <p className='paragraph-text'>
                    Use our weather app <br />
                    to see the weather <br />
                    around the world
                </p>

                <div className='input-button-lable-div'>
                    <label className='lable-style'>City name</label>
                    <div className='div-input-button-style'>
                        <input type="text"
                            className='input-style'
                            onChange={handleChange}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter')
                                    getWeather();
                            }}></input>
                        {errMssage && <span className='err-message'>{errMssage}</span>}

                        <button
                            className='button-style'
                            onClick={getWeather}
                        >
                            Check
                        </button>
                    </div>
                </div>
            </div>
            {weatherDetails && <div className='down-text'>
                <div className='lat-long-style'>
                    <p>latitude {latitude}  </p>
                    <p>longitude {longitude}</p>
                </div>
                <p className='date-style'>accurate to {lastDate} at {lastTime}</p>
            </div>}
        </div>
        {weatherDetails && <div className='today-weather-div'>
            <TodayWeather details={weatherDetails} />
        </div>
        }
    </div>
    );
}

export default SearchWeatherPlace;