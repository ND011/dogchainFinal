import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#1a1a1a] px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold text-teal-40 text-white" >DogChain</h1>
      <ul className="flex gap-6 text-sm">
        <li><a href="/" className="hover:text-teal-400 text-white">Home</a></li>
        <li><a href="/client" className="hover:text-teal-400 text-white">Client</a></li>
        <li><a href="/freelancer" className="hover:text-teal-400 text-white">Freelancer</a></li>
        <li><a href="/profile" className="hover:text-teal-400 text-white">Profile</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
