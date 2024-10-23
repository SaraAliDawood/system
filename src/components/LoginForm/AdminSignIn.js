




// import React, { useState } from 'react';
// import yourImage from '../../images/sign in.299e38c71fb86261b275.png'; // Replace with the actual path to your image
// import logo from "../../images/logo (1).png"
// import { Link } from "react-router-dom";
// import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
// import PersonIcon from "@mui/icons-material/Person";

// function AdminSignIn() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });

//       if (!response.ok) {
//         throw new Error('Login failed');
//       }

//       const data = await response.json();
//       const token = data.token; // Assuming the response contains a token

//       localStorage.setItem('token', token);
//       window.location.href = '/admin-dashboard';
//     } catch (error) {
//       setErrorMessage('Login failed. Please check your credentials.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex w-3/4 mx-auto items-center justify-center h-full relative">
//       <div className="flex items-center justify-center h-screen w-1/2 p-8 rounded-lg shadow-md mx-auto ">

//       <div className='w-full '>
//       <div className="absolute top-4 left-4">
//           <img src={logo} alt="Logo" className="h-6" />
//         </div>
//         <h1 className="text-3xl font-bold text-center mb-4">Sign in as admin</h1>

//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2">Email</label>
//             <input
//               type="email"
//               className="w-full px-3 py-2 border rounded-lg"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2">Password</label>
//             <input
//               type="password"
//               className="w-full px-3 py-2 border rounded-lg"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <div className="flex items-center justify-center">
//             <button
//               type="submit"
//               className={`w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
//               disabled={isLoading}
//             >
//               {isLoading ? 'Loading...' : 'Sign In'}
//             </button>
//           </div>

//           {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
//         </form>
//         <div className="flex justify-center items-center space-x-7 mt-3">
//           <Link to={"/"} className="text-blue-500 bg-gray-200 w-10 h-10 flex justify-center items-center rounded-full hover:text-blue-600">
//             <AdminPanelSettingsIcon style={{ fontSize: "35px" }} />
//           </Link>
//           <Link to={"/user-login"} className="text-blue-500 bg-gray-200 w-10 h-10 flex justify-center items-center rounded-full hover:text-blue-600">
//             <PersonIcon style={{ fontSize: "35px" }} />
//           </Link>
//         </div>
//       </div>
//       </div>
//       <div className="w-1/2  flex items-center justify-center">
//         <img src={yourImage} alt="Login Background" className="w-full h-full object-cover" />
//       </div>
//     </div>
//   );
// }

// export default AdminSignIn;




// import React, { useState } from 'react';
// import yourImage from '../../images/sign in.299e38c71fb86261b275.png'; // Replace with the actual path to your image
// import logo from "../../images/logo (1).png"
// import { Link } from "react-router-dom";
// import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
// import PersonIcon from "@mui/icons-material/Person";

// function AdminSignIn() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // Validate username and password (optional)
//     if (!username || !password) {
//       setErrorMessage('Please enter your username and password.');
//       return;
//     }

//     // Check for stored credentials in local storage
//     const storedCredentials = JSON.parse(localStorage.getItem('adminCredentials'));
//     if (storedCredentials && storedCredentials.username === username && storedCredentials.password === password) {
//       // Login successful, store token (simulated) in local storage
//       localStorage.setItem('token', 'your_simulated_token');
//       window.location.href = '/admin-dashboard';
//     } else {
//       setErrorMessage('Invalid username or password.');
//     }
//   };

//   return (
//     <div className="flex w-3/4 mx-auto items-center justify-center h-full relative">
//       <div className="flex items-center justify-center h-screen w-1/2 p-8 rounded-lg shadow-md mx-auto ">

//         <div className='w-full '>
//           <div className="absolute top-4 left-4">
//             <img src={logo} alt="Logo" className="h-6" />
//           </div>
//           <h1 className="text-3xl font-bold text-center mb-4">Sign in as admin</h1>

//           <form onSubmit={handleLogin}>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-bold mb-2">Email</label>
//               <input
//                 type="email"
//                 className="w-full px-3 py-2 border rounded-lg"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700 font-bold mb-2">Password</label>
//               <input
//                 type="password"
//                 className="w-full px-3 py-2 border rounded-lg"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="flex items-center justify-center">
//               <button
//                 type="submit"
//                 className={`w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 ${errorMessage ? 'opacity-50 cursor-not-allowed' : ''}`}
//                 disabled={errorMessage}
//               >
//                 Sign In
//               </button>
//             </div>

//             {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
//           </form>
//           <div className="flex justify-center items-center space-x-7 mt-3">
//             <Link to={"/"} className="text-blue-500 bg-gray-200 w-10 h-10 flex justify-center items-center rounded-full hover:text-blue-600">
//               <AdminPanelSettingsIcon style={{ fontSize: "35px" }} />
//             </Link>
//             <Link to={"/user-login"} className="text-blue-500 bg-gray-200 w-10 h-10 flex justify-center items-center rounded-full hover:text-blue-600">
//               <PersonIcon style={{ fontSize: "35px" }} />
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="w-1/2  flex items-center justify-center">
//         <img src={yourImage} alt="Login Background" className="w-full h-full object-cover" />
//       </div>
//     </div>
//   );
// }

// export default AdminSignIn;
import React, { useState } from 'react';
import yourImage from '../../images/sign in.299e38c71fb86261b275.png'; // Replace with the actual path to your image
import logo from "../../images/logo (1).png";
import { Link } from "react-router-dom";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PersonIcon from "@mui/icons-material/Person";

function AdminSignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  
  // Assuming admins are stored in localStorage
  const [adminsList, setAdminsList] = useState(() => {
    const storedAdmins = localStorage.getItem('adminCredentials');
    return storedAdmins ? JSON.parse(storedAdmins) : [];
  });

  const generateToken = () => {
    return Math.random().toString(36).substr(2);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const isExist = adminsList.some((admin) => admin.email === email);
    if (isExist) {
      setErrorMessage('Email already exists');
    } else {
      const newAdmin = { email, password };
      const updatedAdmins = [...adminsList, newAdmin];
      localStorage.setItem('adminCredentials', JSON.stringify(updatedAdmins));
      setAdminsList(updatedAdmins);
      setErrorMessage('Sign up successful! Please log in.');
      setIsSignUpMode(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const admin = adminsList.find(
      (admin) => admin.email === email && admin.password === password
    );

    if (admin) {
      const token = generateToken();
      localStorage.setItem('adminToken', token); // Use a separate token for admins
      window.location.href = '/admin-dashboard'; // Redirect to admin dashboard
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
            {isSignUpMode ? 'Sign Up' : 'Sign in as Admin'}
          </h1>

          <form onSubmit={isSignUpMode ? handleSignUp : handleLogin}>
            {isSignUpMode && (
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg"
                  value={email} // Using email as identifier for admin
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
                className={`w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
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
      <div className="w-1/2 h-screen flex items-center justify-center">
        <img src={yourImage} alt="Login Background" className="w-full shadow-lg rounded-2xl h-[98%] object-cover" />
      </div>
    </div>
  );
}

export default AdminSignIn;






