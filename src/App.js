import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReviewsComponent from './components/ReviewsComponent';
import Login from './components/Login';
import Signup from './components/Signup';
import ReviewForm from "./components/ReviewForm"
import UpdateForm from './components/UpdateForm';
import BarChart from './components/charts/BarChart';


function App() {

  

  return (
    <div className="App">
      
      <Router>
        <Routes>
            <Route exact path="/" element={<ReviewsComponent/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products" element={<ReviewsComponent />} />
            <Route path="/review/:id" element={<ReviewForm />} />
            <Route path="/update/:id" element={<UpdateForm />} />
        </Routes>            
      </Router>
    </div>
  );
}

export default App;

