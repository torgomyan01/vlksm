import Image from "next/image";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { serModalKP, serModalQuickView } from "@/redux/modals";
import Link from "next/link";
import { SITE_URL } from "@/utils/consts";

interface IThisProps {
  item: {
    name: string;
    code: string;
    price: string;
  };
  index: number;
}

function ProductItem({ item, index }: IThisProps) {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);

  function openQuickView() {
    dispatch(serModalQuickView(true));
  }

  function openModalKP() {
    dispatch(serModalKP(true));
  }

  return (
    <div className="w-full relative transition group hover:bg-[#F6F6F6] hover:border-[#F6F6F6] border-[6px] border-transparent rounded-[6px]">
      <div className="w-full h-[194px] relative flex-jc-c bg-[#F0F7F7] p-5 rounded-[6px]">
        <div
          className="absolute top-[10px] right-[10px] transition"
          onClick={() => setLiked(!liked)}
        >
          {liked ? (
            <i className="fa-solid fa-heart text-[#F31260] cursor-pointer text-[20px]"></i>
          ) : (
            <i className="fa-regular fa-heart text-[#808080] cursor-pointer text-[20px]"></i>
          )}
        </div>
        <Image
          src={`/img/product-${index + 1}.png`}
          alt="produvt 1"
          width={188}
          height={154}
          className="w-full h-auto"
        />

        <div className="absolute bottom-[11px] left-0 flex-jc-c w-full transition opacity-0 group-hover:opacity-100">
          <Button
            color="primary"
            variant="faded"
            className="text-black"
            onPress={openQuickView}
          >
            Быстрый просмотр
          </Button>
        </div>
      </div>
      <div className="w-full flex-jsb-s flex-col h-[150px] mt-2">
        <div>
          <Link href={SITE_URL.PRODUCT}>
            <h3 className="text-[15px] font-bold mt-1">{item.name}</h3>
          </Link>
          <h5 className="text-[13px] mt-1 text-black/50">{item.code}</h5>
        </div>

        <div className="flex justify-between items-center mt-1 w-full">
          <span className="text-[18px]">{item.price}</span>

          <Dropdown>
            <DropdownTrigger>
              <Button
                color="primary"
                variant="flat"
                className="bg-[#1AB1BA1A] w-[67px] text-[#1AB1BA] font-bold h-[30px] rounded-[6px]"
              >
                <i className="fa-solid fa-plus text-[18px]"></i>в КП
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="12">
                <span className="w-[60px] text-black/50">№12</span>
                <span className="mx-2">Прогресс</span>
                <span className="text-black/50">11 211 ₽</span>
              </DropdownItem>
              <DropdownItem key="1321">
                <span className="w-[60px] text-black/50">№1321</span>
                <span className="mx-2">Автоматизация плюс</span>
                <span className="text-black/50">19 274 ₽</span>
              </DropdownItem>
              <DropdownItem key="14">
                <span className="w-[60px] text-black/50">№14</span>
                <span className="mx-2">ООО «СуперПром»</span>
                <span className="text-black/50">123 204 ₽</span>
              </DropdownItem>
              <DropdownItem key="15">
                <span className="w-[60px] text-black/50">№15</span>
                <span className="mx-2">ИП Сорокин М. Г.</span>
                <span className="text-black/50">39 244 ₽</span>
              </DropdownItem>
              <DropdownItem key="Выбрать" onPress={openModalKP}>
                Выбрать КП из реестра
              </DropdownItem>
              <DropdownItem key="Новое">Новое КП</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
