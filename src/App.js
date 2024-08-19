import './App.css';
import Navigator from './Navigator';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './Home';
import Commands from './Commands';
import Terms from './Terms';
import Footer from './Footer';
import Privacy from './Privacy';

function App() {
  

  return (
    <>
    <Router>
    <div className="container">
      
      <Navigator />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/commands" element={<Commands />} />
                <Route path="/terms" element={<Terms />}/>
                <Route path='/privacy' element={<Privacy />}/>
            </Routes>
      
    </div>
    <Footer />
    </Router>
    </>
    
  );
}

export default App;
