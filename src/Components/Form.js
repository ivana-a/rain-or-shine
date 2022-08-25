import React, { useState } from 'react'

const Form = ({ findWeatherByCity, getAlertMessage }) => {
    const [city, setCity] = useState('')
    console.log(city)

    // Functions
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (city === '') {
            getAlertMessage('Please enter a city')
        } else {
            findWeatherByCity(city);
            setCity('');
        }
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter city..."
                    onChange={(e) => setCity(e.target.value)}
                />
                <button type='submit'>
                    Enter
                </button>
            </form>

        </div>
    )
}

export default Form