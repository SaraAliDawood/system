import SideBar from "./components/SideBar";
import LoginForm from "./components/LoginForm/LoginForm";
import MainDashboard from "./components/UsersDashboard/MainDashboard";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="px-1 font-Poppins flex">
      <Router>
      <Routes>
        
      <Route path="/" element={
        <>
        
         <LoginForm />
        </>
       
        } />
        <Route path="/dashboard" element={<MainDashboard />} />
        {/* Other routes */}
      </Routes>
    </Router>
    
      
      
    </div>
  );
}

export default App;
