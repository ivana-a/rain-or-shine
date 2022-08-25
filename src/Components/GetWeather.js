import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Form from './Form'
import Layout from './Layout'
import 'weather-icons/css/weather-icons.css'
import 'weather-icons/css/weather-icons-wind.css'
import Alert from './Alert';

const GetWeather = () => {

    const [weatherData, setWeatherData] = useState({});
    const [message, setMessage] = useState('');

    useEffect(() => {
        const firstCityLoad = async () => {
            const city = 'Cape Town'
            const res = await axios.get(
                `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e9629992d0bde86eaddc6391f50171b7`
            );
            console.log(res.data);
            manipulatingData(res.data);
        }
        firstCityLoad()
        //eslint-disable-next-line
    }, [])

    const findWeatherByCity = async (city) => {
        try {
            const res = await axios.get(
                `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e9629992d0bde86eaddc6391f50171b7`
            );
            manipulatingData(res.data);
        } catch (error) {
            if (error) {
                getAlertMessage('City not on WorldWeather List');
            }
        }
    };

    const manipulatingData = (result) => {
        const { name } = result;
        const {
            temp,
            temp_min,
            temp_max,
            feels_like,
            humidity,
            pressure,
        } = result.main
        const { description, id } = result.weather[0]
        const { deg, speed } = result.wind

        setWeatherData({
            name: name,
            temp: temp.toFixed(0),
            temp_min: temp_min.toFixed(0),
            temp_max: temp_max.toFixed(0),
            feels_like: feels_like.toFixed(0),
            humidity,
            pressure,
            description,
            id: weatherIcon(id),
            deg: deg,
            degIcon: windDirection(deg),
            speed
        });
        console.log(deg)
        console.log(weatherData.deg)
        console.log(weatherData.degIcon)
    }

    const weatherIcon = (rangeId) => {

        switch (true) {

            case rangeId >= 200 && rangeId <= 232:
                return 'wi-thunderstorm';

            case rangeId >= 300 && rangeId <= 321:
                return 'wi-sleet';

            case rangeId >= 500 && rangeId <= 531:
                return 'wi-storm-showers';

            case rangeId >= 600 && rangeId <= 622:
                return 'wi-snow';

            case rangeId >= 701 && rangeId <= 781:
                return 'wi-fog';

            case rangeId === 800:
                return 'wi-day-sunny';

            case rangeId >= 801 && rangeId <= 804:
                return 'wi-day-fog';

            default:
                return 'wi-day-fog';

        }

    };

    // const windDirection = (rangeDeg) => {

    //     switch (true) {
    //         case rangeDeg >= 0 && rangeDeg <= 360:
    //             return 'from-158-deg';

    //         default:
    //             return 'from-45-deg';
    //     }
    // }

    const windDirection = (rangeDeg) => {

        switch (true) {

            case rangeDeg === 0:
                return 'from-0-deg';

            case rangeDeg >= 1 && rangeDeg <= 44:
                return 'from-23-deg';

            case rangeDeg >= 45 && rangeDeg <= 67:
                return 'from-45-deg';

            case rangeDeg >= 68 && rangeDeg <= 89:
                return 'from-68-deg';

            case rangeDeg >= 90 && rangeDeg <= 112:
                return 'from-90-deg';

            case rangeDeg >= 113 && rangeDeg <= 134:
                return 'from-113-deg';

            case rangeDeg >= 135 && rangeDeg <= 157:
                return 'from-135-deg';

            case rangeDeg >= 158 && rangeDeg <= 179:
                return 'from-158-deg';

            case rangeDeg >= 180 && rangeDeg <= 202:
                return 'from-180-deg';

            case rangeDeg >= 203 && rangeDeg <= 224:
                return 'from-203-deg';

            case rangeDeg >= 225 && rangeDeg <= 247:
                return 'from-225-deg';

            case rangeDeg >= 248 && rangeDeg <= 269:
                return 'from-248-deg';

            case rangeDeg >= 270 && rangeDeg <= 292:
                return 'from-270-deg';

            case rangeDeg >= 293 && rangeDeg <= 312:
                return 'from-293-deg';

            case rangeDeg >= 313 && rangeDeg <= 335:
                return 'from-313-deg';

            case rangeDeg >= 336 && rangeDeg <= 360:
                return 'from-336-deg';

            default:
                return 'from-0-deg';

        }
    };

    const getAlertMessage = (msg) => {
        setMessage(msg)
        setTimeout(() => setMessage(null), 2000)
    }

    return (
        <div>
            <Form
                findWeatherByCity={findWeatherByCity} getAlertMessage={getAlertMessage}
            />
            <Alert message={message} />
            <Layout weatherData={weatherData} msgFunc />

        </div>
    )
}

export default GetWeather
