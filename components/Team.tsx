import React from 'react';

const Team = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'Nahom Keneni',
      role: 'CEO',
      avatarUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'natnael ',
      role: 'CTO',
      avatarUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Khalid',
      role: 'Project Manager',
      avatarUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Anania',
      role: 'Ai Developer',
      avatarUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Danawit',
      role: 'Designer',
      avatarUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Biruk Getachew',
      role: 'Full stack web Developer',
      avatarUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {teamMembers.map((member, index) => (
        <div
  key={index}
  className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm text-center backdrop-blur-sm bg-white/10"
>
  <img
    src={member.avatarUrl}
    alt={member.name}
    className="w-24 h-24 rounded-full object-cover mb-4"
  />
  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
  <p className="text-sm text-gray-600">{member.role}</p>
</div>
        ))}
      </div>
    </div>
  );
};

export default Team;