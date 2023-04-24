import "./App.css";
import DailyMonitor from "./components/dailyMonitor/DailyMonitor.jsx";
import FileUpload from "./components/fileUpload/fileUpload.jsx";

function App() {
	return (
		<>
			<div>
				<FileUpload />
				<DailyMonitor />
			</div>
		</>
	);
}

export default App;
