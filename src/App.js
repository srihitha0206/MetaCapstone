import Header from './Header.js';
import Footer from './Footer.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Main from './Main.js';
import React from 'react';
import './App.css';
import BookingForm from './BookingForm.js';
import ConfirmedBooking from './ConfirmedBooking.js';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/reservations" element={<BookingForm />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
        <Footer className="footer" />
      </Router>
    </React.Fragment>
  );
}

export default App;
