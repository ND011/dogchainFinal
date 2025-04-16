import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import contract from '../getContract';


function Signup() {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState('');
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');

    try {
      const { name, email, phone } = form;
      await contract.methods.setUser(account, name, email, phone).send({ from: account })
      .then(({ data }) => {
        console.log("promise successfull");
        console.log({ data })
      }).catch((e) => {
        console.log('promise failed')
        console.log(e)
      })
      ;
      setSuccess('User registered successfully!');
    } catch (err) {
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>Sign Up</h2>
      {account && <p><strong>Wallet Address:</strong> {account}</p>}
      {success && (
        <div style={{ 
          backgroundColor: '#d4edda', 
          color: '#155724', 
          padding: '10px', 
          borderRadius: '5px',
          marginBottom: '20px'
        }}>
          {success}
        </div>
      )}
      {error && (
        <div style={{ 
          backgroundColor: '#f8d7da', 
          color: '#721c24', 
          padding: '10px', 
          borderRadius: '5px',
          marginBottom: '20px'
        }}>
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '8px',
              fontSize: '16px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '8px',
              fontSize: '16px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Phone</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '8px',
              fontSize: '16px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Signup;
