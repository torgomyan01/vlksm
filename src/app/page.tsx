"use client";

import React, { useEffect, useState } from "react";
import MainTemplate from "@/components/common/main-template/main-template";
import Filter from "@/components/common/filter/filter";
import { Input } from "@heroui/input";
import { Pagination, Select, SelectItem, Skeleton } from "@heroui/react";
import ProductItem from "@/components/common/product-item/product-item";
import { productItem } from "@/utils/consts";
import QuickView from "@/components/common/quick-view/quick-view";

export default function Home() {
  const [products, setProducts] = useState<
    { name: string; code: string; price: string }[]
  >([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productItem);
    }, 2000);
  }, []);

  return (
    <MainTemplate>
      <div className="w-full flex-js-s pt-[5px] ga-[20px]">
        <Filter />
        <div className="w-[calc(100%-300px)] pt-5 pr-5 h-[calc(100dvh-68px)] overflow-y-auto mt-[-5px]">
          <div className="mb-6">
            <Input
              aria-label="Input search"
              placeholder="Поиск по ID, артикулу, названию"
              type="text"
              className="w-[596px] h-[41]"
            />
          </div>
          <div className="flex-jsb-c">
            <h1 className="text-[21px] font-bold">Все товары и услуги</h1>
            <Select
              className="max-w-xs"
              value="cheap"
              aria-label="select Sort"
              defaultSelectedKeys={["Сначала дешевле"]}
              variant="bordered"
            >
              <SelectItem key="Сначала дешевле">Сначала дешевле</SelectItem>
              <SelectItem key="Сначала дешевле 1">Сначала дешевле 1</SelectItem>
              <SelectItem key="Сначала дешевле 2">Сначала дешевле 2</SelectItem>
              <SelectItem key="Сначала дешевле 3">Сначала дешевле 3</SelectItem>
            </Select>
          </div>

          <div className="mt-6">
            <div className="grid grid-cols-2 min-[1000px]:grid-cols-3 min-[1500px]:grid-cols-5 min-[1900px]:grid-cols-7 gap-x-5 gap-y-10 items-stretch">
              {products.length ? (
                products.map((item, i) => (
                  <ProductItem key={`product_${i}`} item={item} index={i} />
                ))
              ) : (
                <>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={`product_loading_${i}`}
                      className="w-full relative transition group hover:bg-[#F6F6F6] hover:border-[#F6F6F6] border-[6px] border-transparent rounded-[6px]"
                    >
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
                  ))}
                </>
              )}
            </div>
          </div>

          <div className="mt-10 mb-20 flex-js-c">
            <Pagination
              total={10}
              initialPage={1}
              size="sm"
              aria-label="pagination"
              variant="light"
              showControls
              classNames={{
                item: "bg-[#F0F7F7] text-black",
                cursor: "bg-[#1AB1BA] text-white",
              }}
            />
            <Select
              className="max-w-xs"
              value="cheap"
              aria-label="Select pagination"
              defaultSelectedKeys={["Выводить по 20"]}
              variant="bordered"
            >
              <SelectItem key="Выводить по 20">Выводить по 20</SelectItem>
              <SelectItem key="Выводить по 50">Выводить по 50</SelectItem>
              <SelectItem key="Выводить по 100">Выводить по 100</SelectItem>
            </Select>
          </div>
        </div>
      </div>
      <QuickView />
    </MainTemplate>
  );
}
