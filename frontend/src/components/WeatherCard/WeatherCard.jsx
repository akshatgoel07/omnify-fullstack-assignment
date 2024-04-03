import "./weatherCard.css";

import LocationSVG from "../../assets/location_white.svg";
import Wind from "../../assets/wind.svg";
import Humidity from "../../assets/humidity.svg";

import PropTypes from "prop-types";

WeatherCard.propTypes = {
	weatherData: PropTypes.shape({
		temperature: PropTypes.number,
		location: PropTypes.string,
		wind: PropTypes.number,
		humidity: PropTypes.number,
	}),
};

function WeatherCard({ weatherData }) {
	return (
		<div className="weather-card">
			<div className="weather-card_data">
				{weatherData && (
					<div>
						<p className="temperature">
							{Math.floor(weatherData.temperature)}{" "}
							<span>&#176;</span>
						</p>
						<div className="details">
							<div className="location">
								<img src={LocationSVG} alt="" />
								{weatherData.location}
							</div>
							<div className="wind">
								<div className="wind_inner">
									<img src={Wind} alt="" />
									<p>{weatherData.wind} km/hr</p>
									<p>Wind</p>
								</div>
							</div>
							<div className="humidity">
								<div className="humidity_inner">
									<img src={Humidity} alt="" />
									<p>{weatherData.humidity} %</p>
								</div>
								<p className="humidity_text">Humidity</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default WeatherCard;
