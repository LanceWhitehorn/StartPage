const shortcuts = (s) => {
    let url
    if (s.includes('y/')) {
        const search_query = s.replace('y/', '').trim()
        url = `https://www.youtube.com/results?search_query=${search_query}`
    } else if (s === 'spotify') {
        url = `spotify://open.spotify.com/`
    } else if (s === 'wordle') {
        url = `https://www.nytimes.com/games/wordle/index.html`
    } else {
        url = `https://www.google.com/search?q=${s}`
    }
    window.open(url, '_blank')
}

export default shortcuts