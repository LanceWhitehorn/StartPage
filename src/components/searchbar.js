import { useState, useEffect } from 'react'
import Shortcuts from './shortcuts'

const SearchBar = () => {
  const [search, setSearch] = useState('')

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSearchPress = (e) => {
    if (e.charCode === 13) {
      Shortcuts(search)
      setSearch('')
    }
  }

  // Search box will always remain in focus even when pressing outside
  // Escape key clears the search box
  // Pressing tab is 'disabled' (does nothing)
  // Disable context (right-click) menu
  useEffect(() => {
    document.addEventListener('click', () => document.querySelector('#searchBox').focus())
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 27) {
        setSearch('')
      } else if (e.keyCode === 9) {
        e.preventDefault()
      }
    })
    document.addEventListener('contextmenu', (e) => e.preventDefault());
  }, [])

  return (
    <div>
      <input id="searchBox" value={search} onChange={handleSearchChange} onKeyPress={handleSearchPress} autoComplete="off" autoFocus />
    </div>
  )
}

export default SearchBar