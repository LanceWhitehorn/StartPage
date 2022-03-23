import { useState, useEffect } from 'react'

const Quote = () => {
	const [quote, setQuote] = useState('')
	useEffect(() => {
		const url = 'https://api.quotable.io/random'
		fetch(url)
			.then(res => res.json())
			.then(out => {
				setQuote(out['content'])
				console.log(out['content'])
			})
	}, [])
	return (quote)
}

export default Quote