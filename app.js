const getGeo = require('./utilis/geocode')
const forecast = require('./utilis/forecast')

const city = process.argv[2]

if (!city) {
	console.log("Please provide a city")
} else {
	getGeo(city, (error, data) => {
		if (error) {
			return console.log(error)
		} 

		forecast(data.lat, data.lon, (error, forecastData) => {
			if (error) {
				return console.log(error)
			} 

			console.log(data.location)
			console.log(forecastData)
		})
	})
}



