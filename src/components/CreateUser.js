import React, { useState } from 'react';
import People from '../components/People.js'

const CreateUser = ({ handleCreateUser }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    sign: '',
    bio: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file, 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: People.length + 1, // Generate a unique ID for the new user
      ...formData,
    };

    // Call the function passed from the parent component to update the People array
    handleCreateUser(newUser);
    
    // Reset form data
    setFormData({
      name: '',
      age: '',
      sign: '',
      bio: '',
      image: null,
    });

    // Log the new user data to the console
    console.log("New user:", newUser);
  };

  // Horoscope signs array
  const horoscopeSigns = [
    'Aquarius',
    'Pisces',
    'Aries',
    'Taurus',
    'Gemini',
    'Cancer',
    'Leo',
    'Virgo',
    'Libra',
    'Scorpio',
    'Sagittarius',
    'Capricorn'
  ];

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Sign:</label>
          <select
            className="form-control"
            name="sign"
            value={formData.sign}
            onChange={handleChange}
            required
          >
            <option value="">Select Sign</option>
            {horoscopeSigns.map((sign, index) => (
              <option key={index} value={sign}>
                {sign}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Bio:</label>
          <textarea
            className="form-control"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            required
          />
        </div>
        {/* File input for image */}
        <div className="form-group">
          <label>Image:</label>
          <input
            type="file"
            className="form-control-file"
            name="image"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={() => console.log("Submit button clicked")}>
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
