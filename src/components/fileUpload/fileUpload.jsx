import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
	const [csvfile, setCsvFile] = useState(null);
	const [repeatation, setRepeatation] = useState(5);
	const [gap, setGap] = useState(5);
	const [uploadUrl, setUploadUrl] = useState(
		"http://localhost:8000/fileupload"
	);

	const handleSubmit = async (e) => {
		const formData = new FormData();

		const backendUrl = "http://localhost:8000/fileupload";
		const csvfile = e.target[0].files[0];
		const formUploadUrl = e.target[1].value;
		const repeatation = e.target[2].value;
		const gap = e.target[3].value;

		formData.append("csvfile", csvfile);
		formData.append("repeatation", repeatation);
		formData.append("gap", gap);
		formData.append("uploadUrl", formUploadUrl);

		try {
			const { data } = await axios.post(backendUrl, formData);
			console.log(data);
		} catch (error) {
			console.log(error.response.data.message);
		}
	};

	return (
		<div>
			<h2>File Upload </h2>
			<div>
				<hr />
				<form
					onSubmit={(e) => {
						e.preventDefault();
						handleSubmit(e);
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
