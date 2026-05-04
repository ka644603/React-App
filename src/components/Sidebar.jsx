import React, { useState } from "react";

const Sidebar = ({ initialMenuItems = [] }) => {
  // TODO 2: State for menu items
  const [menuItems, setMenuItems] = useState(initialMenuItems);

  // State for inputs
  const [newItem, setNewItem] = useState("");
  const [filterText, setFilterText] = useState("");

  // TODO 3: Add menu item callback
  const addMenuItem = () => {
    if (!newItem.trim()) return;

    setMenuItems((prev) => [...prev, newItem]);
    setNewItem("");
  };

  // TODO 4: Filter logic (case-insensitive regex)
  const filteredItems = menuItems.filter((item) => {
    if (!filterText) return true;

    try {
      const regex = new RegExp(filterText, "i");
      return regex.test(item);
    } catch (e) {
      return true; // if invalid regex, show all
    }
  });

  return (
    <div className="sidebar">
      {/* Filter Input */}
      <input
        type="text"
        placeholder="Filter items..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      {/* Add Item Input */}
      <input
        type="text"
        placeholder="Add menu item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addMenuItem}>Add</button>

      {/* TODO 1: Render menu items */}
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
