import React, { useState } from "react";
import axios from "axios";

const PostApplication = () => {
	const requestApplication = "EOL Application Prod";
	const [reqApplication, setReqApplication] = useState(requestApplication);

	const handleSubmit = async (target) => {
		const backendUrl = "http://localhost:8000/dailymonitor/application";
		const application = target[0].value;

		try {
			const { data } = await axios.post(backendUrl, { application });
			console.log(data);
		} catch (error) {
			const {
				response: { data },
			} = error;
			console.log(data);
		}
	};

	return (
		<div>
			<br />
			<hr />
			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit(e.target);
				}}
			>
				<label htmlFor="url">application name: &nbsp; </label>
				<input
					type="text"
					value={reqApplication}
					name="application"
					onChange={(e) => {
						setReqApplication(e.target.value);
					}}
				/>
				<br />
				<button type="submit">POST /dailymonitor/application</button>
			</form>
			<br />
		</div>
	);
};

export default PostApplication;
