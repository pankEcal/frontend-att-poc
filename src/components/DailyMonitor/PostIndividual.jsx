import React, { useState } from "react";
import axios from "axios";

const PostIndividual = () => {
	const requestUrl = "http://tvseoldev.enginecal.com/event";
	const [reqUrl, setReqUrl] = useState(requestUrl);
	const [status, setStatus] = useState("false");
	const [message, setMessage] = useState("Incorrect url");

	const handleSubmit = async (target) => {
		const backendUrl = "http://localhost:8000/dailymonitor";
		const url = target[0].value;
		const status = target[1].value;
		const message = target[2].value;

		try {
			const serverRes = await axios.post(backendUrl, { url, status, message });
			const { data } = serverRes;

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
				<label htmlFor="url">test url: &nbsp; </label>
				<input
					type="text"
					value={reqUrl}
					name="url"
					onChange={(e) => {
						setReqUrl(e.target.value);
					}}
				/>
				<span>&nbsp;&nbsp;&nbsp;</span>
				<label htmlFor="status">status: &nbsp; </label>
				<input
					type="text"
					name="status"
					value={status}
					onChange={(e) => {
						setStatus(e.target.value);
					}}
				/>
				<span>&nbsp;&nbsp;&nbsp;</span>
				<label htmlFor="message">message: &nbsp; </label>
				<input
					type="text"
					name="message"
					value={message}
					onChange={(e) => {
						setMessage(e.target.value);
					}}
				/>

				<br />
				<button type="submit">POST /dailymonitor</button>
			</form>
			<br />
		</div>
	);
};

export default PostIndividual;
