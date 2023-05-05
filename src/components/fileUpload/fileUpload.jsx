import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
	const [csvfile, setCsvFile] = useState("");
	const [repeatation, setRepeatation] = useState(10);
	const [gap, setGap] = useState(1000);
	const [uploadUrl, setUploadUrl] = useState(
		"http://evaaidev.enginecal.com/event/v1/cai/fileupload"
	);
	const map1 = new Map();
	map1.set("passed", 0);
	map1.set("failed", 0);

	const makeHttpReq = async (backendUrl, formData, currentCount) => {
		try {
			const { data } = await axios.post(backendUrl, formData);
			console.log(currentCount + 1, data);
			map1.set("passed", map1.get("passed") + 1);
		} catch (error) {
			const {
				response: { data },
			} = error;

			map1.set("failed", map1.get("failed") + 1);
			console.log(data);
		}
	};

	const handleSubmit = async () => {
		const formData = new FormData();
		const backendUrl = "http://localhost:8000/fileupload";
		let currentCount = 0;

		formData.append("csvfile", csvfile);
		formData.append("repeatation", repeatation);
		formData.append("gap", gap);
		formData.append("uploadUrl", uploadUrl);

		const executeBatchRequests = setInterval(() => {
			if (currentCount >= repeatation) {
				clearInterval(executeBatchRequests);
				console.log(map1);
				console.log("batch file upload completed!");
			} else {
				makeHttpReq(backendUrl, formData, currentCount);
				currentCount++;
			}
		}, gap);
	};

	return (
		<div>
			<h2>File Upload </h2>
			<div>
				<hr />
				<form
					onSubmit={(e) => {
						e.preventDefault();
						handleSubmit();
					}}
				>
					<input
						type="file"
						name="csvfile"
						onChange={(e) => {
							setCsvFile(e.target.files[0]);
						}}
					/>

					<label htmlFor="uploadUrl">upload url</label>
					<input
						type="text"
						name="uploadUrl"
						value={uploadUrl}
						onChange={(e) => {
							e.preventDefault();
							setUploadUrl(e.target.value);
						}}
					/>
					<span>&nbsp; &nbsp; &nbsp; </span>

					<label htmlFor="repeatation">repeatation &nbsp; </label>
					<input
						type="number"
						value={repeatation}
						onChange={(e) => {
							e.preventDefault();
							setRepeatation(e.target.value);
						}}
						name="repeatation"
					/>

					<span>&nbsp; &nbsp; &nbsp; </span>

					<label htmlFor="gap">gap &nbsp;</label>
					<input
						type="number"
						value={gap}
						onChange={(e) => {
							e.preventDefault();
							setGap(e.target.value);
						}}
						name="gap"
					/>

					<br />
					<button type="submit">POST /fileupload</button>
				</form>
			</div>
		</div>
	);
};

export default FileUpload;
