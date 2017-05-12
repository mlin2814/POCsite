var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=5f58db0e4ad04143b4e102603285e194&units=imperial';

module.exports = {
	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function(res){
			debugger;
			if (res.data.cod && res.data.message) {
				throw new Error (res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, function(res){
			throw new Error('Something went wrong and we cannot find the info!');
		});
	}
}