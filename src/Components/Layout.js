import React from 'react'


const Layout = ({ weatherData }) => {
    const {
        name,
        temp,
        feels_like,
        temp_max,
        temp_min,
        humidity,
        pressure,
        description,
        id,
        deg,
        degIcon,
        speed
    } = weatherData;

    return (
        <div>
            <div className='flex-container'>
                <h3>{`${name}`}</h3>
                <i className={`wi ${id}`}></i>
                <h1>{description}</h1>
                <h1>{`${temp}`}&deg;C</h1>
            </div>
            <div className='flex-container'>
                <h6>{`min. ${temp_min} | max. ${temp_max}`}</h6>
                <h6>{`feels like ${feels_like}`}&deg;C</h6>
            </div>
            <div className='flex-container'>
                <h6>{`humidity: ${humidity}`}%</h6>
                <h6>{`pressure: ${pressure}`} hPa</h6>
            </div>
            <div className='flex-container'>
                <h6>{`wind speed: ${speed}`} meter/sec</h6>
                <h6>{`wind direction: ${deg}`}&deg;</h6>
                <span>
                    <i className={`wi wi-wind ${degIcon}`}></i>
                </span>
            </div>
        </div>
    )
}

export default Layout