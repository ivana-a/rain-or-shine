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

    const speedkm = speed * (18 / 5)
    console.log(speedkm)


    return (
        <>
            <div className='flex-container2'>
                <div className='weather-box'>
                    <h3 name>{`${name}`}</h3>
                    <i id="weather-icon" className={`weather-icon wi ${id}`}></i>
                    {/* <h1>{description}</h1> */}
                    <h1>{`${temp}`}&deg;C</h1>
                </div>
                <div className='temperature-box'>
                    <h6 className='minmax'>{`min. ${temp_min} | max. ${temp_max}`}</h6>
                    <h6 className='feels'>{`feels like ${feels_like}`}&deg;C</h6>
                </div>
                <div className='humidity-pressure'>
                    <h6 className='humidity'>{`${humidity}`}% humidity</h6>
                    <h6 className='pressure'>{`${pressure}`} hPa</h6>
                </div>
                <div className='wind'>
                    <h6 className='windspeed'>{`${speedkm}`} km/h</h6>
                    <h6 className='winddirection'>{`${deg}`}</h6>
                    <i id='wind-icon' className={`wi wi-wind ${degIcon}`}></i>
                </div>
            </div >
        </>
    )
}

export default Layout