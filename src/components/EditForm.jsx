import React, { useState } from "react";

function EditForm({ user, onSave, onCancel }) {
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedUser);
  };

  return (
    <div className="overlay">
      <form onSubmit={handleSubmit} className="edit-form-container">
        <div className="modal-header">
          <h4>Basic Modal</h4>
          <span type="button" onClick={onCancel} className="close-btn">
            &#10005;
          </span>
        </div>
        <hr />
        <label>
          <span style={{ color: "red" }}>*</span> Name:
          <input
            type="text"
            name="username"
            value={editedUser.username}
            onChange={handleChange}
          />
        </label>
        <label>
          <span style={{ color: "red" }}>*</span> Email:
          <input
            type="email"
            name="email"
            value={editedUser.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <span style={{ color: "red" }}>*</span> Phone:
          <input
            type="text"
            name="phone"
            value={editedUser.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          <span style={{ color: "red" }}>*</span> Website:
          <input
            type="text"
            name="companyUrl"
            value={editedUser.companyUrl}
            onChange={handleChange}
          />
        </label>
        <hr />
        <div className="modal-footer">
          <button type="button" onClick={onCancel} className="cancel-btn">
            Cancel
          </button>
          <button type="submit" className="save-btn">
            Ok
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
