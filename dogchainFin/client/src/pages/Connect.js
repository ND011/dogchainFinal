import React from 'react';
import { useNavigate } from 'react-router-dom'
import JobCard from '../Components/Jobcard'

const Connect= () => {
  const navigate = useNavigate()
  const jobs = [
    {
      id: 1,
      title: 'Build NFT Website',
      desc: 'Develop a full-stack NFT minting site using React and Solidity.',
      budget: '0.5 ETH',
    },
    {
      id: 2,
      title: 'Smart Contract Audit',
      desc: 'Audit a staking contract and recommend optimizations.',
      budget: '0.7 ETH',
    },
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Freelance Marketplace</h1>
      <button 
        style={{ 
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          margin: '20px'
        }}
        onClick={() => navigate('/Login')}
      >
        Login
      </button>

      <button 
        style={{ 
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          margin: '20px'
        }}
        onClick={() => navigate('/signup')}
      >
        Sign Up
      </button>
    </div>
  );
};

export default Connect;
