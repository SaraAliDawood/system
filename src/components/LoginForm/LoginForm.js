// import React, { useState } from 'react';
// import axios from 'axios';

// function LoginForm() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setIsLoading(true);

//     try {
//       const response = await axios.post('/api/login', { username, password });
//       const data = response.data;

//       if (data.success) {
//         // Redirect to the desired page after successful login
//         window.location.href = '/dashboard';
//       } else {
//         setErrorMessage(data.message);
//         setIsLoading(false);
//       }
//     } catch (error) {
//       console.error(error);
//       setErrorMessage('UserName or password is incorrect , please try again');
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-1/2">
//         <h1 className="text-3xl font-bold text-center mb-4">Welcome Back</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2">Username</label>
//             <input
//               type="text"
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
//           <p className="text-red-500 text-center">{errorMessage}</p>
//         </form>
//         {/* ... (rest of the form elements) */}
//       </div>
//     </div>
//   );
// }

// export default LoginForm;







// import React, { useState } from 'react';
// import axios from 'axios';

// function LoginForm() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setIsLoading(true);

//     try {
//       const response = await axios.post('/api/login', { username, password });
//       const data = response.data;

//       if (data.success) {
//         // Redirect to the desired page after successful login
//         window.location.href = '/dashboard';
//       } else {
//         setErrorMessage(data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       setErrorMessage('Username or password is incorrect, please try again');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
//         <h1 className="text-3xl font-bold text-center mb-4">Welcome Back</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2">Username</label>
//             <input
//               type="text"
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
//           <p className="text-red-500 text-center">{errorMessage}</p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;





// import React, { useState } from 'react';


// function LoginForm() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setIsLoading(true);

//     try {
//       const response = await axios.post('/api/login', { username, password });
//       const data = response.data;

//       if (data.success) {
//         // Redirect to the desired page after successful login
//         window.location.href = '/dashboard';
//       } else {
//         setErrorMessage(data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       setErrorMessage('Username or password is incorrect, please try again');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex w-full items-center justify-center h-screen ">
//       <div className="bg-white w-1/2  p-8 rounded-lg shadow-md mx-auto">
//         <h1 className="text-3xl font-bold text-center mb-4">Welcome Back</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2">Username</label>
//             <input
//               type="text"
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
//           <p className="text-red-500 text-center">{errorMessage}</p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;











import React, { useState, useEffect } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isExist = usersList.some((user) => user.email === username);
    if (isExist) {
      setErrorMessage('Email already exists');
    } else {
      const newUser = { name, email: username, password };
      const updatedUsers = [...usersList, newUser];
      localStorage.setItem('storedUsers', JSON.stringify(updatedUsers));
      setUsersList(updatedUsers);
      setErrorMessage('Sign up successful! Please log in.');
      setIsSignUpMode(false);
    }
  };

  // Handle login by checking localStorage
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const user = usersList.find(
      (user) => user.email === username && user.password === password
    );

    if (user) {
      const token = generateToken();
      localStorage.setItem('token', token);
      window.location.href = '/dashboard';
    } else {
      setErrorMessage('Invalid username or password');
    }
    setIsLoading(false);
  };

  return (
    <div className="flex w-full items-center justify-center h-screen">
      <div className="bg-white w-1/2 p-8 rounded-lg shadow-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">
          {isSignUpMode ? 'Sign Up' : 'Welcome Back'}
        </h1>

        <form onSubmit={isSignUpMode ? handleSignUp : handleLogin}>
          {isSignUpMode && (
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
      </div>
    </div>
  );
}

export default LoginForm;
