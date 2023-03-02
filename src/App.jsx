import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './assets/Error';
function App() {
	return (
		<Router>
			<Routes>
				<Routes path="/" element={<Error />} />
			</Routes>
		</Router>
	);
}

export default App;
