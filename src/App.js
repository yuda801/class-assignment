import './App.css';
import Home from './components/Home.js';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import ErrorPage from './components/Error.js';
// import AppBar from './components/AppBar.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <AppBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/medicines" element={<Medicines />} /> */}
          {/* <Route path="/createNewMedicine" element={<CreateNewMedicine />} /> */}
          {/* <Route
            path="*"
            element={<ErrorPage to="/" />}
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
