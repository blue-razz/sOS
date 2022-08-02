import clickOutside from "hooks/clickOutside";
import type { NextPage } from "next";
import { useState, useRef } from "react";
import AppMenuDropdown from "./AppMenuDropdown";

interface IProps {
  name: string;
  children?: React.ReactNode | React.ReactNode[] | string;
}

const AppMenuItem: NextPage<IProps> = ({ name, children }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  clickOutside(dropdownRef, () => setDropdownOpen(false));

  const handleClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div id={`${name}__dropdown-wrapper`} ref={dropdownRef}>
      <button
        onClick={handleClick}
        id={`${name}__dropdown-button`}
        className={`cursor-default active:bg-slate-700/50 px-3 ${
          dropdownOpen ? "bg-slate-700/50" : ""
        } transition-all ease-out duration-150 rounded-md py-1`}
      >
        {children ? children : name}
      </button>

      {dropdownOpen && (
        <AppMenuDropdown menuItems={["Item 1", "Item 2", "Item 3"]} />
      )}
    </div>
  );
};

export default AppMenuItem;
