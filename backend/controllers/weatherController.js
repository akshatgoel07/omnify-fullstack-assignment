const getWeather = async (req, res) => {
	try {
		const { location } = req.query;

		const apiKey = process.env.API_KEY;
		const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

		const response = await fetch(apiUrl);

		if (!response.ok) {
			console.error("Error fetching weather data:", response.statusText);
			return res.status(response.status).json({
				success: false,
				error: "Failed to fetch weather data",
			});
		}

		const data = await response.json();

		const weatherData = {
			wind: data.wind.speed,
			humidity: data.main.humidity,
			temperature: data.main.temp,
			location: data.name,
		};

		res.json({
			success: true,
			data: weatherData,
			message: "Weather data fetched successfully",
		});
	} catch (error) {
		console.error("Error fetching weather data:", error);
		res.status(500).json({
			success: false,
			error: "Failed to fetch weather data",
		});
	}
};

module.exports = {
	getWeather,
};
