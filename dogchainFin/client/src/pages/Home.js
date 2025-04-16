import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import JobCard from '../Components/Jobcard'
import AuthModel from "../Components/AuthModel";
import { useStateContext } from "../Contexts/ContextProvider";
import contract from '../getContract'

const Home = () => {
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [account, setAccount] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const {currentUser,setCurrentUser} = useStateContext();

  async function onLogin() {
    console.log("onLoginClick")
    await window.ethereum.request({
      method: "eth_requestAccounts",
    }).then((data) => {
      console.log('printing accoutns', data)
      console.log('printing contract', contract)
      contract.methods.loginUser(data[0])
        .call().then((loginSuccessful) => {
          if (loginSuccessful) {
            setSuccess("Successfully Logged In");
            // console.log(currentUser)
            navigate('/')
          } else {
            setError("User Does not Exist")
            console.log(data)
          }
        })
        .catch(e => {
          console.log(e)
        })
    }).catch(e => {
      console.log(e)
    })
  }

  const handleWalletConnect = () => {
    if (!currentUser) {
      setShowModal(true); // Show modal if not logged in
    } else {
      
    }
  };

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
    <div className="bg-[#0f0f0f] min-h-screen text-white font-sans">
      {showModal && (
        <AuthModel
          closeModal={() => setShowModal(false)}
          onLogin={onLogin}
        />
      )}
      <div className="px-6 py-10">
        <section className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Welcome to DogChain</h2>
          <p className="text-gray-400">The Decentralized Opportunity Generator</p>
          <button className="mt-6 px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded" onClick = {handleWalletConnect}>
            Connect Wallet
          </button>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">📋 Latest Job Listings</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
