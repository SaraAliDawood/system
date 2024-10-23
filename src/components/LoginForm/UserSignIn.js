




import React, { useState } from 'react';
import yourImage from '../../images/useimg1.4991053414bd5d59cdfa.jpg'; // Replace with the actual path to your image
import logo from "../../images/logo (1).png"
import { Link } from "react-router-dom";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PersonIcon from "@mui/icons-material/Person";

function UserSignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  // Assuming users are stored in localStorage like in your admin logic
  const [usersList, setUsersList] = useState(() => {
    const storedUsers = localStorage.getItem('storedUsers');
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  const generateToken = () => {
    return Math.random().toString(36).substr(2);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const isExist = usersList.some((user) => user.email === email);
    if (isExist) {
      setErrorMessage('Email already exists');
    } else {
      const newUser = { name: '', email, password }; // Assuming no name for user
      const updatedUsers = [...usersList, newUser];
      localStorage.setItem('storedUsers', JSON.stringify(updatedUsers));
      setUsersList(updatedUsers);
      setErrorMessage('Sign up successful! Please log in.');
      setIsSignUpMode(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const user = usersList.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      const token = generateToken();
      localStorage.setItem('userToken', token); // Use a separate token for users
      window.location.href = '/admin-dashboard'; // Redirect to user dashboard
    } else {
      setErrorMessage('Invalid email or password');
    }
    setIsLoading(false);
  };

  return (
    <div className="flex w-3/4 mx-auto items-center justify-center h-full relative">
      <div className="flex items-center justify-center h-screen w-1/2 p-8 rounded-lg shadow-md mx-auto ">
 <div className='w-full'>
 <div className="absolute top-4 left-4">
          <img src={logo} alt="Logo" className="h-6" />
        </div>
        <h1 className="text-3xl font-bold text-center mb-4">
          {isSignUpMode ? 'Sign Up' : 'Sign in as User'}
        </h1>

        <form onSubmit={isSignUpMode ? handleSignUp : handleLogin}>
          {isSignUpMode && (
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg"
                value={email} // Assuming using email as username for user
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className={`w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : isSignUpMode ? 'Sign Up' : 'Sign In'}
            </button>
          </div>

          {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
        </form>

        <div className="mt-4 text-center">
          <p>
            {isSignUpMode ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              onClick={() => setIsSignUpMode(!isSignUpMode)}
              className="text-blue-500 underline"
            >
              {isSignUpMode ? 'Sign In' : 'Sign Up'}
            </button>
          </p>

        </div>
        <div className="flex justify-center items-center space-x-7 mt-3">
          <Link to={"/"} className="text-blue-500 bg-gray-200 w-10 h-10 flex justify-center items-center rounded-full hover:text-blue-600">
            <AdminPanelSettingsIcon style={{ fontSize: "35px" }} />
          </Link>
          <Link to={"/user-login"} className="text-blue-500 bg-gray-200 w-10 h-10 flex justify-center items-center rounded-full hover:text-blue-600">
            <PersonIcon style={{ fontSize: "35px" }} />
          </Link>
        </div>
      </div>
 </div>
      <div className="w-1/2 h-screen flex  items-center justify-center">
        <img src={yourImage} alt="Login Background" className="w-full shadow-lg rounded-2xl h-[98%] object-cover" />
      </div>
    </div>
  );
}

export default UserSignIn;