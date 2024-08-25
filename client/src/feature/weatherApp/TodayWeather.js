import './CSS/todayWeather.css'
const TodayWeather = ({ details }) => {

    let { city, country, date, time, temp_c, condition, precip_mm, humidity, wind_kph, hour } = details;

    return (<div className='container'>
        <div className='bg-weather'>
            <p className='city'>{city}</p>
            <p className='country'>{country}</p>
            <p className='date-time'>{date} at {time}</p>
            <div className='temp-condition-div'>
                <p className='temp-c'>{temp_c}&#176;</p>
                <p className='condition'>{condition}</p>
            </div>

            <table className='data-table'>
                <thead>
                    <tr>
                        <th>precipitation</th>
                        <th>humidity</th>
                        <th>wind</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{precip_mm} mm</td>
                        <td>{humidity}%</td>
                        <td>{wind_kph} km/h</td>
                    </tr>
                </tbody>
            </table>

            <table className='temperature-by-hour-table'>
                <thead>
                    <tr>
                        <th>{hour[0].time}</th>
                        <th>{hour[1].time}</th>
                        <th>{hour[2].time}</th>
                        <th>{hour[3].time}</th>
                        <th>{hour[4].time}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{hour[0].temp_c}&#176;</td>
                        <td>{hour[1].temp_c}&#176;</td>
                        <td>{hour[2].temp_c}&#176;</td>
                        <td>{hour[3].temp_c}&#176;</td>
                        <td>{hour[4].temp_c}&#176;</td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>);
}

export default TodayWeather;