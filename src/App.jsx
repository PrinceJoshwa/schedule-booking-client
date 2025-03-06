import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateEvent from "./pages/CreateEvent";
import BookingDetails from "./pages/BookingDetails";
import EditBooking from "./pages/EditBooking"
import BookingPage from "./pages/BookingPage";
import UserDetailsForm from './pages/UserDetailsForm';
import BookingConfirmed from './pages/BookingConfirmed';
import Scheduled from "./pages/Scheduled";

// const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '256166969031-807h780vuiqfp20c80pf8877i7dk6tri.apps.googleusercontent.com';

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '256166969031-807h780vuiqfp20c80pf8877i7dk6tri.apps.googleusercontent.com';
function App() {
  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scheduled" element={<Scheduled/>} />
          <Route path="/create-event/:eventType" element={<CreateEvent />} />
          <Route path="/booking-details/:bookingId" element={<BookingDetails />} />
          <Route path="/edit-booking/:bookingId" element={<EditBooking />} />
          <Route path="/:username/:eventTitle" element={<BookingPage />} />
          <Route path="/user-details" element={<UserDetailsForm />} />
          <Route path="/booking-confirmed" element={<BookingConfirmed />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;