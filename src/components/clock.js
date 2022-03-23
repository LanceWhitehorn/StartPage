import { useState, useEffect } from 'react'

const Clock = () => {
  const [date, setDate] = useState(new Date())
  
  const refreshClock = () => {
    setDate(new Date())
  }

  useEffect(() => {
    const timerID = setInterval(refreshClock, 1000);
    return (() => clearInterval(timerID));
  }, []);

  return (
    <div>
      {date.toLocaleTimeString()}
    </div>
  )
}

export default Clock