import React from "react";
import axios from "axios";

const GetApis = () => {
	const url = "http://localhost:8000/dailymonitor/apis";

	const getApis = async (event) => {
		const { data } = await axios.get(url);
		console.log(data);
	};

	return (
		<div>
			<hr />
			<form
				onSubmit={(event) => {
					event.preventDefault();
					getApis(event);
				}}
				action={url}
				method="get"
			>
				<button type="submit">GET /dailymonitor/apis</button>
			</form>
			<br />
		</div>
	);
};

export default GetApis;
