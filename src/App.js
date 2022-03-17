import { useState, useEffect } from 'react'
import './styles/weather_icons.css'
import WeatherLabel from './components/weather_labels'

function App() {
  const [search, setSearch] = useState('')
  const [dailyWeather, setDailyWeather] = useState([])
  const [index, setIndex] = useState(0)
  const [subText, setSubText] = useState('')
  const name = 'Lance' // Change to your name
  const subTextString = 'What are you looking for today?' // Change this to your own subtext

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
    const city = 'Sydney' // Change to your city
    const app_id = '' // Change to your app id
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
  
  // Typewriter effect
  useEffect(() => {
    setTimeout(() => {
      if (index < subTextString.length) {
        setSubText(subText + subTextString[index])
        setIndex(index + 1)
      }
    }, 50)
  }, [index])
  
  // Search box will always remain in focus even when pressing outside
  // Escape key clears the search box
  // Pressing tab is 'disabled' (does nothing)
  useEffect(() => {
    document.addEventListener('click', () => document.getElementById('searchBox').focus())
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 27) {
        document.getElementById('searchBox').value = ''
      } else if (e.keyCode === 9) {
        e.preventDefault()
      }
    })
  }, [])

  return (
    <div className="container">
      <div className="content">
        <h1>Hello, <b>{name}.</b></h1>
        <p>{subText}<span className="cursor"></span></p>
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
