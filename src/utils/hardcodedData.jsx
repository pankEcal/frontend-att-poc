const apiData = [
	{
		application: "Bikeintell",
		baseUrl: "https://evaai.enginecal.com/",
		tests: [
			{
				testName: "user Login Check",
				apiLink: "core/v1/bike-intell/checklogin",
				requestMethod: "POST",
				requestParams: {
					u: "saurabh.singh@enginecal.com",
					p: "123456",
				},
				validationParams: {
					userTypeId: "636f0a3a286eee60431ac912",
				},
			},
		],
	},
];

export default function getApiData() {
	return apiData;
}
