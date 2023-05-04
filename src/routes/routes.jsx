import { Link } from "react-router-dom";
import "../App.css";

export default function Root() {
	return (
		<>
			<nav id="navBar">
				<ul>
					<li>
						<Link to="/fileupload">File Upload</Link>
					</li>
					<li>
						<Link to="/dailymonitor">Daily Monitor</Link>
					</li>
					<li>
						<Link to="/hardcoded">Hardcoded</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
