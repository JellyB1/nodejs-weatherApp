const getGeo = require('./utilis/geocode')
const forecast = require('./utilis/forecast')

getGeo('Boston', (error, data) => {
	if (error) {
		console.log(error)
	} else if (data) {
		console.log(data)
	}
})

forecast(-75.7088, 44.1545, (error, data) => {
	if (error) {
		console.log(error)
	} else if (data) {
		console.log(data)
	}
})
