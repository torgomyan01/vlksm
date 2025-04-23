import React from "react";
import { filterMenu } from "@/utils/consts";
import MenuItem from "@/components/common/left-menu/menu-item";

function LeftMenu() {
  return (
    <div className="space-y-1">
      {filterMenu.map((menu, index) => (
        <MenuItem
          key={`menu-${index}`}
          name={menu.name}
          items={menu.children}
        />
      ))}
    </div>
  );
}

export default LeftMenu;
