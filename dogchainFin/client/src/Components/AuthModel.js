import React, { useState } from 'react';

const AuthModal = ({ closeModal, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState('');
  const [form, setForm] = useState({ name: '', phone: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Simulate login
        onLogin();  // Update login state
      }
    }  ;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-[#1e1e1e] p-8 rounded-lg w-full max-w-md">
        <h2 className="text-white text-xl font-bold mb-4 text-center">
          {isLogin ? 'Login' : 'Signup'}
        </h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input name="name" onChange={handleChange} placeholder="Name" className="mb-3 w-full p-2 rounded bg-[#2a2a2a] text-white" />
              <input name="phone" onChange={handleChange} placeholder="Phone" className="mb-3 w-full p-2 rounded bg-[#2a2a2a] text-white" />
            </>
          )}
          <input name="email" type="email" onChange={handleChange} placeholder="Email" className="mb-3 w-full p-2 rounded bg-[#2a2a2a] text-white" />
          <input name="password" type="password" onChange={handleChange} placeholder="Password" className="mb-3 w-full p-2 rounded bg-[#2a2a2a] text-white" />
          <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded mt-2">
            {isLogin ? 'Login' : 'Signup'}
          </button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-4">
          {isLogin ? 'No account?' : 'Already have an account?'}{' '}
          <span onClick={() => setIsLogin(!isLogin)} className="text-teal-400 hover:underline cursor-pointer">
            {isLogin ? 'Signup' : 'Login'}
          </span>
        </p>

        <button onClick={closeModal} className="mt-4 text-sm text-gray-300 hover:text-white text-center w-full">Close</button>
      </div>
    </div>
  );
};

export default AuthModal;
