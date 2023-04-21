import React from "react";
import GetApis from "./GetApis.jsx";
import PostIndividual from "./PostIndividual.jsx";
import PostApplication from "./PostApplication.jsx";
const DailyMonitor = () => {
	return (
		<div>
			<GetApis />
			<PostIndividual />
			<PostApplication />
		</div>
	);
};

export default DailyMonitor;
