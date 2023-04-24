import React from "react";
import GetApis from "./get/Apis.jsx";
import PostIndividual from "./post/Individual.jsx";
import PostApplication from "./post/Application.jsx";
import PostBatch from "./post/Batch.jsx";
const DailyMonitor = () => {
	return (
		<div>
			<h2>Daily Monitor</h2>
			<GetApis />
			<PostIndividual />
			<PostApplication />
			<PostBatch />
		</div>
	);
};

export default DailyMonitor;
