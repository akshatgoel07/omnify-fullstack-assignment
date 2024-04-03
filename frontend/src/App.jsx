import { useEffect, useState } from "react";

import Search from "./components/Search/Search";
import WeatherCard from "./components/WeatherCard/WeatherCard";

import "./App.css";

import WeatherIcons from "./assets/weather_icon.png";
import Omnify from "./assets/omnify_logo.png";

//TODO: Replace with prod url and use env
const API_URL = "http://localhost:3000";

function App() {
	const [location, setLocation] = useState("New York");
	const [weatherData, setWeatherData] = useState(null);

	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setError(false);
			try {
				const res = await fetch(
					`${API_URL}/weather?location=${location}`
				);
				const resJson = await res.json();
				if (!resJson.success) {
					setError(true);
					return;
				}
				setWeatherData(resJson.data);
			} catch (error) {
				console.error("Error fetching weather data:", error);
			}
		};
		fetchData();
	}, [location]);

	const changeLocation = (newLocation) => {
		setLocation(newLocation);
	};

	return (
		<div>
			<div className="main">
				<div className="main_left">
					<div className="omnify_logo">
						<img src={Omnify} alt="" />
					</div>

					<div className="info__searchbar">
						<p className="heading">
							Weather <img src={WeatherIcons} alt="" />
							<br /> Application
						</p>
						<p className="subheading">
							Your reliable companion for every day&apos;s
							forecast
						</p>
						<div className="search_component">
							<Search
								location={location}
								changeLocation={changeLocation}
								error={error}
							/>
						</div>
					</div>
				</div>

				<div className="main_right">
					<div className="weather_card">
						<WeatherCard weatherData={weatherData} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
