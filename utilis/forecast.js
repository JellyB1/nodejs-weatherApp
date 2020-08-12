const request = require('request')

const forecast = (lat, lon, callback) => {
	const url = `http://api.weatherstack.com/current?access_key=f1e484660472347458a1e0ea74a81695&query=${lat},${lon}`

	request({
		url,
		json: true,	
	}, (error, response) => {
		
		if (error) {	
			callback('Unable to connect to weather services', undefined)
		} else if (response.body.error) {
			callback('Could not find location. Please retry with a new search term.', undefined)
		} else {
		const res = response.body
		const temp = res.current.temperature
		const desc = res.current.weather_descriptions[0]
			callback(undefined, 
				`It is currently ${temp} degress outside and it is ${desc}.`
			)
		}
	})
}

module.exports = forecast