import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
function App() {
  return (
    <Router>
    <div className="App">
     <Routes>
      <Route path="/Checkout"element={<><Header/><h1>Checkout</h1></>}/>
      <Route path="/Login"element={<><Header/><h1>Login</h1></>}/>
      <Route path="/"element={<><Header/><Home/></>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
