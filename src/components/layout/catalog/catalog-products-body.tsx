import ProductItem from "@/components/common/product-item/product-item";
import { Pagination, Select, SelectItem } from "@heroui/react";
import React, { useEffect, useState } from "react";
import { GetProducts } from "@/utils/api";
import ProductLoading from "@/components/layout/catalog/product-loading";

function CatalogProductsBody() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    GetProducts(10, 1).then(({ data }) => {
      setProducts(data.results);
    });

    // setTimeout(() => {
    //   setProducts(productItem);
    // }, 2000);
  }, []);

  return (
    <>
      <div className="mt-6">
        <div className="grid grid-cols-2 min-[1000px]:grid-cols-3 min-[1500px]:grid-cols-5 min-[1900px]:grid-cols-7 gap-x-5 gap-y-10 items-stretch">
          {products.length ? (
            products.map((item, i) => (
              <ProductItem key={`product_${i}`} item={item} index={i} />
            ))
          ) : (
            <>
              {Array.from({ length: 12 }).map((_, i) => (
                <ProductLoading key={`product_loading_${i}`} />
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
    </>
  );
}

export default CatalogProductsBody;
