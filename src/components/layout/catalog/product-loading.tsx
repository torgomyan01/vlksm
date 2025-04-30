import { Skeleton } from "@heroui/react";
import React from "react";

function ProductLoading() {
  return (
    <div className="w-full relative transition group hover:bg-[#F6F6F6] hover:border-[#F6F6F6] border-[6px] border-transparent rounded-[6px]">
      <Skeleton className="flex rounded-[3px] w-full h-[194px]" />
      <div className="w-full flex-jsb-s flex-col h-[80px] mt-2">
        <div className="w-full">
          <Skeleton className="flex rounded-full w-full h-4 mb-2" />
          <Skeleton className="flex rounded-full w-[90%] h-3" />
        </div>

        <div className="flex justify-between items-center mt-1 w-full">
          <Skeleton className="flex rounded-[6px] w-[40%] h-4" />
          <Skeleton className="flex rounded-[6px] w-[40%] h-4" />
        </div>
      </div>
    </div>
  );
}

export default ProductLoading;
