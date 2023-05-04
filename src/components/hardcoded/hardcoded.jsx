import { useState } from "react";

const Hardcoded = () => {
	const [baseUrl, setBaseUrl] = useState("https://evaai.enginecal.com/");
	const [apiLink, setApiLink] = useState("core/v1/bike-intell/checklogin");
	const [requestMethod, setRequestMethod] = useState("POST");

	const handleSubmit = async (event) => {
		console.log(event);
	};

	return (
		<div>
			<h2>Hardcoded</h2>
			<div>
				<hr />
				<form
					onSubmit={(e) => {
						e.preventDefault();
						handleSubmit(e);
					}}
				>
					<label htmlFor="baseUrl">baseUrl: </label>
					<input
						type="text"
						name="baseUrl"
						value={baseUrl}
						onChange={(e) => {
							setBaseUrl(e.target.value);
						}}
					/>

					<label htmlFor="apiLink">apiLink: </label>
					<input
						type="text"
						name="apiLink"
						value={apiLink}
						onChange={(e) => {
							setApiLink(e.target.value);
						}}
					/>

					<label htmlFor="requestMethod">requestMethod: </label>
					<select
						name="requestMethod"
						value={requestMethod}
						onChange={(e) => {
							setRequestMethod(e.target.value);
						}}
					>
						{["POST", "GET"].map((method, index) => {
							return (
								<option key={index} value={method}>
									{method}
								</option>
							);
						})}
					</select>
					<button type="submit">Run Test</button>
				</form>
			</div>
		</div>
	);
};

/* 
Inputs: baseUrl, apiLink, requestMethod, requestParams, validationParams

{
    "baseUrl": "https://evaai.enginecal.com/",
    "apiLink": "core/v1/bike-intell/checklogin",
    "requestMethod": "POST",
    "requestParams": {
        "u": "saurabh.singh@enginecal.com",
        "p": "12345"
    },
    "validationParams": {
        "errorCode": "1002"
    }
}



*/

export default Hardcoded;
