import './App.css';
import LoginPage from "./log";
import Form from './FormValidator';
// import Navbar from './navbar';
import Home from './Home';
import {Routes, Route} from 'react-router-dom'
import Services from './services';
import Contact from './contact';
import UserProfile from './UserProfile';
import Navba from './navi';
import FeedbackForm from './feedback';
import Provider_Info from './Provider';
function App() {
  return (
    <div className="App">
      <Navba/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Form />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<UserProfile/>} />
        <Route path="/feed" element={<FeedbackForm/>} />
        <Route path="/p_info/:category" element={<Provider_Info/>} />

      </Routes>
    </div>

  );
}

export default App;
