import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="bg-[#1e1e1e] p-5 rounded-lg shadow hover:shadow-lg transition-all">
      <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
      <p className="text-sm text-gray-400">{job.desc}</p>
      <p className="text-teal-400 font-bold mt-2">💰 {job.budget}</p>
      <button className="mt-4 w-full bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
