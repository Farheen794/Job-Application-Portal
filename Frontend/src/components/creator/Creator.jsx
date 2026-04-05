import React from 'react'
import Navbar from '../components_lite/Navbar'
import job from './job.jpg'; // Import the local image


const Creator = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full">
          {/* Image Section */}
          <div className="flex justify-center">
            <img src={job} alt="Job Image" className="h-80 object-cover rounded-lg shadow-md" />
          </div>
          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About The Portal</h2>
            <p className="text-gray-600 mb-2">
              A Job Portal is a full-stack web application that connects job seekers and recruiters/employers on a single platform. It allows candidates to search and apply for jobs, while companies can post job openings and manage applicants efficiently.</p>
            <p className="text-gray-600 mb-2"><strong>Objectives</strong></p>
            <p className="text-gray-600 mb-2">
              Simplify the job search process<br />
              Provide recruiters with a streamlined hiring platform<br />
              Enable real-time interaction between candidates and companies<br />
              Maintain structured data for job listings and applications</p>
            <p className="text-gray-600 mb-2">Users of the system are Job Seekers (Students) and Recruiters.</p>
            
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Creator