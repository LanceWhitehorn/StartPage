import { useState, useEffect } from 'react'
import Quote from './quote'

const Typewriter = ({ text, custom }) => {
	const [index, setIndex] = useState(0)
	const [subText, setSubText] = useState('')
	const [quote, setQuote] = useState('')
	const [foundQuote, setFoundQuote] = useState(false)
	let msg

	useEffect(() => {
		if (quote === '') {
			const url = 'https://api.quotable.io/random?maxLength=50'
			fetch(url)
				.then(res => res.json())
				.then(out => {
					setQuote(out['content'])
					setFoundQuote(true)
				})
		} else {
			custom ? msg = text : msg = quote
			setTimeout(() => {
				if (index < msg.length) {
					setSubText(subText + msg[index])
					setIndex(index + 1)
				}
			}, 50)
		}
	}, [foundQuote, index])

	return (
		<p>{subText}<span className="cursor"></span></p>
	)
}

export default Typewriter