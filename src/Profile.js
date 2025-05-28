import React from 'react';
import './Profile.css';

const user = {
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1234567890'
};

function Profile() {
  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
    </div>
  );
}

export default Profile;
