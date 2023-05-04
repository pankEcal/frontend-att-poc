import "./App.css";
import { Route, Routes } from "react-router-dom";
import DailyMonitor from "./components/dailyMonitor/DailyMonitor.jsx";
import FileUpload from "./components/fileUpload/fileUpload.jsx";
import Root from "./routes/routes";
import Hardcoded from "./components/hardcoded/hardcoded";
import NotFound from "./notFound";

function App() {
	return (
		<>
			<Root />
			<Routes>
				<Route path="/" />
				<Route path="/fileupload" element={<FileUpload />} />
				<Route path="/dailymonitor" element={<DailyMonitor />} />
				<Route path="/hardcoded" element={<Hardcoded />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
