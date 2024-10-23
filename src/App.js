// import SideBar from "./components/SideBar";
// import LoginForm from "./components/LoginForm/LoginForm";
// import MainDashboard from "./components/UsersDashboard/MainDashboard";

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// function App() {
//   return (
//     <div className="px-1 font-Poppins flex">
//       <Router>
//       <Routes>
        
//       <Route path="/" element={
//         <>
//          <LoginForm />
//         </>
       
//         } />
//         <Route path="/dashboard" element={<MainDashboard />} />
//         {/* Other routes */}
//       </Routes>
//     </Router>
    
      
      
//     </div>
//   );
// }

// export default App;


// src/App.js

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminSignIn from './components/LoginForm/AdminSignIn'; // Your existing admin sign-in
import UserSignIn from './components/LoginForm/UserSignIn'; // The new user sign-in component
import MainDashboard from './components/UsersDashboard/MainDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminSignIn />} />
        <Route path="/user-login" element={<UserSignIn />} /> {/* New user login route */}
        <Route path='/admin-dashboard' element={<MainDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

