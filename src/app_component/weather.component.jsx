import React from 'react';

const Weather = (props) => {
    return (
        <div className="container" style={{ width: '18rem' }}>
            <div className="text-white my-2 shadow-lg">
                <h1>{props.city}</h1>
                <h5 className="py-4"><i className={`wi ${props.weather_icon} display-1`}></i></h5>
                {props.temp_celsius ? (<h1 h1 className="py-0">{props.temp_celsius}&deg;</h1>) : null}
                {/* {show min and max temp} */}
                {minmaxTemp(props.temp_min, props.temp_max)}
                <h4 className="py-3">{props.description}</h4>
            </div>
        </div>
    );
}

function minmaxTemp(min, max) {
    if (min && max) {
        return (
            <h3>
                <span className="px-4">{min}&deg;</span>
                <span className="px-4">{max}&deg;</span>
            </h3>
        );
    }
}

export default Weather;