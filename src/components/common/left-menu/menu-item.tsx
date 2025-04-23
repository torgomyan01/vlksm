import React, { useState } from "react";

interface IItem {
  name: string;
  children: IItem[];
}

interface IThisProps {
  className?: string;
  name: string;
  items: IItem[];
  depth?: number;
}

function MenuItem({ name, items, className = "", depth = 0 }: IThisProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = items.length > 0;

  const toggleMenu = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`w-full`}>
      <button
        onClick={toggleMenu}
        className={`flex justify-between items-center w-full text-[14px] text-left cursor-pointer hover:bg-gray-100 py-2 px-3 rounded-[5px] transition-all ${className}`}
      >
        <span>{name}</span>
        {hasChildren && (
          <i
            className={`fa-solid fa-chevron-down text-[12px] opacity-40 transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        )}
      </button>

      {hasChildren && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out pl-4 ${
            isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {items.map((child, index) => (
            <MenuItem
              key={`${name}-${index}`}
              name={child.name}
              items={child.children}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MenuItem;
