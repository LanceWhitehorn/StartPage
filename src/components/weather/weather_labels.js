import Icon from './weather_icons'

const WeatherLabel = ({ info }) => {
    // Info: { day, date, temp }
    return (
        <li>
            <Icon weather={info.weather} />
            <span className="weatherLabel">{info.day}, {info.temp}°</span>
        </li>
    )
}

export default WeatherLabel