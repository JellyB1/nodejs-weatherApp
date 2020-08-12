const request = require('request')

const getGeo = (address, callback) => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYW50aWFuZ2VsaXgiLCJhIjoiY2tjd2QwbXhzMDM1ODJ5bXl2MWQ1ZDVlMyJ9.c3JPzGL57tuWWAhwpr7xwg`

	request({
		url,
		json: true,	
	}, (error, response) => {

		if (error) {	
			callback('Unable to connect to location services', undefined)
		} else if (response.body.features.length === 0) {
			callback('Could not find location. Please retry with a new search term.', undefined)
		} else {
			const res = response.body.features[0]
			
			callback(undefined, {
				lon: res.center[0],
				lat: res.center[1],
				location: res.place_name
			})
			
		}
	})
}

module.exports = getGeo