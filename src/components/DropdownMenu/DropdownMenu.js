import React, { useState } from "react";
import DropdownMenuCSS from "./DropdownMenu.module.css";

import { Link } from "react-router-dom";

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={DropdownMenuCSS.dropdownContainer}
      onMouseEnter={handleToggle}
      onMouseLeave={handleToggle}
    >
      <button className={DropdownMenuCSS.dropdownButton}>
        {props.label}
        {props.name}
      </button>
      {isOpen && (
        <div className={DropdownMenuCSS.dropdown}>
          <ul>
            {props.dropDownData.map((option) => (
              <li key={option.value}>
                <Link to={option.url}>{option.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
