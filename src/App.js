import { useState, useEffect } from 'react'
import './styles/weather_icons.css'
import WeatherLabel from './components/weather_labels'

function App() {
  const [search, setSearch] = useState('')
  const [dailyWeather, setDailyWeather] = useState([])

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSearchPress = (e) => {
    if (e.charCode === 13) {
      const url = `https://www.google.com/search?q=${search}`
      window.open(url, '_blank')
      setSearch('')
    }
  }

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
    var city = "Sydney" // Change to your city
    var app_id = "" // Change to your app id
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${app_id}`
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
    <div className="container">
      <div className="content">
        <h1>Hello, <b>Lance.</b></h1>
        <p>What are you looking for today?</p>
        <input id="searchBox" value={search} onChange={handleSearchChange} onKeyPress={handleSearchPress} autoComplete="off" autoFocus />
        <div className="table">
          <ul>
            {
              dailyWeather.map(daily =>
                <WeatherLabel key={daily.id} info={daily} />
              )
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
