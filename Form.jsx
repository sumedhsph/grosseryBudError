import React, { useState } from "react";

export default function Form({ addItem }) {
  const [newItemName, setNewItemName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) return;
    addItem(newItemName);
    setNewItemName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grossery bud</h4>
      <div className="form-control">
        <input
          type="text"
          name=""
          id=""
          className="form-input"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button type="submit" className="btn">
          Add item
        </button>
      </div>
    </form>
  );
}
