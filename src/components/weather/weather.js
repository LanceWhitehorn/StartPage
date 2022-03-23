import { useState, useEffect } from 'react'
import WeatherLabel from './weather_labels'
import '../../styles/weather_icons.css'

const Weather = ({ city }) => {
	const [dailyWeather, setDailyWeather] = useState([])

	const getDate = (data) => {
		const dateObj = new Date(data)
		const [dateNo, month] = [dateObj.getDate(), dateObj.getMonth()]
		// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		const shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		return ({
			date: `${dateNo}/${month}`,
			day: shortDays[dateObj.getDay()]
		})
	}

	useEffect(() => {
		const app_id = "22d4e741c978538ccba7d43999bb6441" // Change to your app id
		const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${app_id}`
		fetch(url)
			.then(res => res.json())
			.then(out => {
				const tempDaily = []
				for (let i=0; i<40; i+=8) {
					const dateTime = out['list'][i]['dt_txt']
					const weatherObj = {
						id: i/8,
						day: getDate(dateTime).day,
						date: getDate(dateTime).date,
						temp: Math.round(out['list'][i]['main']['feels_like']),
						weather: out['list'][i]['weather']['0']['main']
					}
					tempDaily.push(weatherObj)
				}
				setDailyWeather(tempDaily)
			})
			.catch(err => console.error(err))
	}, [])

	return (
		<div className="table">
			<ul>
				{dailyWeather.map(daily =>
					<WeatherLabel key={daily.id} info={daily} />
				)}
			</ul>
		</div>
	)
}

export default Weather