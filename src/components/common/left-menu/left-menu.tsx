import React, { useEffect, useState } from "react";
import MenuItem from "@/components/common/left-menu/menu-item";
import { GetCategories } from "@/utils/api";
import { buildTree } from "@/utils/helpers";
import { Skeleton } from "@heroui/react";

function LeftMenu() {
  const [categories, setCategories] = useState<IItem[]>([]);

  useEffect(() => {
    GetCategories().then(({ data }) => {
      const res = buildTree(data.results);
      setCategories(res);
    });
  }, []);

  return (
    <div className="space-y-1">
      {categories.length ? (
        categories.map((menu, index) => (
          <MenuItem
            key={`menu-${index}`}
            name={menu.name}
            items={menu.children}
          />
        ))
      ) : (
        <div>
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton
              key={`skel-${i}`}
              className="w-full rounded-[2px] mb-1 h-[30px]"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default LeftMenu;
