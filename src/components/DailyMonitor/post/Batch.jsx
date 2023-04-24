import React, { useState } from "react";
import axios from "axios";

const PostBatch = () => {
	const [status, setStatus] = useState("false");
	const [message, setMessage] = useState("Incorrect url");

	const handleSubmit = async (target) => {
		const backendUrl = "http://localhost:8000/dailymonitor/batch";
		const status = target[0].value;
		const message = target[1].value;

		try {
			const serverRes = await axios.post(backendUrl, { status, message });
			const { data } = serverRes;
			console.log(data);
		} catch (error) {
			console.log(error);
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
				<button type="submit">POST /dailymonitor/batch</button>
			</form>
			<br />
		</div>
	);
};

export default PostBatch;
