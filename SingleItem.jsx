import React from "react";

export default function singleItem({ item, removeItem }) {
  return (
    <div className="single-item">
      <input type="checkbox" name="" id="" />
      <p className="item-name">{item.name}</p>
      <button type="button" className="btn remove-btn">
        Delete
      </button>
    </div>
  );
}
