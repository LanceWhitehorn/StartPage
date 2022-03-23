# Start Page

## Background
When I came across [r/Startpages](https://www.reddit.com/r/startpages/), the part of me that loves to customise things (especially those that I use often) got excited! Currently, the only customisation I have for my startpage is a wallpaper but that's about it. Coding my own allowed me to make a minimalist startpage that is aesthetically pleasing to me.

I am learning how to code with the MERN stack at the moment so, while I could've done this as a one page html file with jQuery, I wanted to make this using React as overkill as that is.

![image](https://user-images.githubusercontent.com/53590758/158323133-a02d8caa-5a16-46be-ae38-06b9c7c66d2e.png)


## Features
* Greeting
* Search box (that opens a Google search in a new tab)
* 5-day weather (credit goes to [joshbader](https://codepen.io/joshbader/pen/EjXgqr) for the animated weather icons)
* Run background service on startup (see Startup section below)

## Use
In `App.js`, you can customise this to your own name, city, and quote (or use a randomised quote).
```js
//Name
const name = 'Lance' // Change to your name

// Weather
<Weather city='{your city}' /> // Change to your city

// Quote
<Typewriter custom={true} text="What are you looking for today?" /> // Use your own custom text
<Typewriter custom={false} /> // Use randomised quotes
```
You can also set up your own shortcuts in `shortcuts.js`. I've set mine up for YouTube, Spotify, Wordle, and Google searches.
```js
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
```

## Startup
Since the React app requires `npm start` to run, I wrote a short script to run this in the background (minimised) on startup.
* `startup/startpage.bat` has the `npm start` command.
* `startup/startpage.vbs` runs the above batch file in the background. This goes into `%AppData%\Microsoft\Windows\Start Menu\Programs\Startup`.

**Note:** `npm start` opens a browser by default so I added the below to a `.env` file to disable it:
```
BROWSER=none
```
