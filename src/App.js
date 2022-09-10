import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Details from "./components/Details";
import ApiState from "./context/api/ApiState";

function App() {
  return (
   <>
   <ApiState>
   <Router>
   <Navbar></Navbar>
   <Routes>
   <Route path='/' element={<Home />} />
   <Route path='/details' element={<Details/>} />
   </Routes>
   </Router>
   </ApiState>
   </>
  );
}

export default App;
