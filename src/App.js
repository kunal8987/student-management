import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Student Registration</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500 sm:w-3/4 md:w-2/3 lg:w-1/2" type="text" />
        </div>
        {/* <!-- Add more input fields here --> */}
        <button className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600">Register</button>
      </form>
    </div>
  </div>
  
  );
}

export default App;
