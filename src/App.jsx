import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
