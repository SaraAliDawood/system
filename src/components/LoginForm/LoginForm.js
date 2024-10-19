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





import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await axios.post('/api/login', { username, password });
      const data = response.data;

      if (data.success) {
        // Redirect to the desired page after successful login
        window.location.href = '/dashboard';
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Username or password is incorrect, please try again');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full items-center justify-center h-screen ">
      <div className="bg-white w-1/2  p-8 rounded-lg shadow-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">Welcome Back</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Username</label>
            <input
              type="text"
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
              {isLoading ? 'Loading...' : 'Sign In'}
            </button>
          </div>
          <p className="text-red-500 text-center">{errorMessage}</p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;