import React, { useState } from 'react';

function EditForm({ user, onSave, onCancel }) {
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedUser);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form-container">
    <label>
      Username:
      <input type="text" name="username" value={editedUser.username} onChange={handleChange} />
    </label>
    <label>
      Email:
      <input type="email" name="email" value={editedUser.email} onChange={handleChange} />
    </label>
    <label>
      Phone:
      <input type="text" name="phone" value={editedUser.phone} onChange={handleChange} />
    </label>
    <label>
      Company URL:
      <input type="text" name="companyUrl" value={editedUser.companyUrl} onChange={handleChange} />
    </label>
    <button type="submit">Save</button>
    <button type="button" onClick={onCancel}>Cancel</button>
  </form>
  );
}

export default EditForm;
