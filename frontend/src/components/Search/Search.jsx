import "./search.css";

import Arrow from "../../assets/arrow_icon.svg";
import Location from "../../assets/location_icon.svg";

import PropTypes from "prop-types";
import { useState } from "react";

Search.propTypes = {
	location: PropTypes.string.isRequired,
	changeLocation: PropTypes.func.isRequired,
	error: PropTypes.bool.isRequired,
};

function Search({ location, changeLocation, error }) {
	const [localLocation, setLocalLocation] = useState(location);

	const handleGetNewWeatherData = (e) => {
		e.preventDefault();
		changeLocation(localLocation);
	};

	return (
		<div className="search_component">
			<form onSubmit={handleGetNewWeatherData} className="input_search">
				<input
					type="text"
					value={localLocation}
					onChange={(e) => setLocalLocation(e.target.value)}
					placeholder="Search 'Delhi' "
				/>
				<button className="search__btn" type="submit">
					<img src={Arrow} alt="" />
				</button>
			</form>

			<div className="bottom_text">
				<img src={Location} alt="location icon" />
				<p className={error ? "error_message" : "enter_location"}>
					{error
						? "Oops! You misspelled the city"
						: "Enter your location"}
				</p>
			</div>
		</div>
	);
}

export default Search;
