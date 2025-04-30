"use client";

import React, { useEffect, useState } from "react";
import MainTemplate from "@/components/common/main-template/main-template";
import Filter from "@/components/common/filter/filter";
import { Input } from "@heroui/input";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Select,
  SelectItem,
} from "@heroui/react";
import { productItem } from "@/utils/consts";
import QuickView from "@/components/common/quick-view/quick-view";
import ModalLogin from "@/components/common/modals/modal-kp";
import { GetProducts } from "@/utils/api";
import CatalogProductsBody from "@/components/layout/catalog/catalog-products-body";

export default function Home() {
  return (
    <MainTemplate>
      <div className="w-full flex-js-s pt-[5px] ga-[20px]">
        <Filter />
        <div className="w-[calc(100%-300px)] pt-5 pr-5 h-[calc(100dvh-68px)] overflow-y-auto mt-[-5px]">
          <div className="mb-6 flex-jsb-c">
            <Input
              aria-label="Input search"
              placeholder="Поиск по ID, артикулу, названию"
              type="text"
              className="w-[596px] h-[41]"
            />

            <div className="flex-jse-c gap-2">
              <Button size="sm" className="text-[15px] font-bold">
                Избранное
              </Button>
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    size="sm"
                    className="bg-blue text-white text-[15px] font-bold"
                  >
                    <i className="fa-solid fa-plus mr-1"></i>
                    Новый товар или услуга
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Create Servicess">
                  <DropdownItem key="12">Услуга</DropdownItem>
                  <DropdownItem key="1321">Реализуемый товар</DropdownItem>
                  <DropdownItem key="14">Заменяемый товар</DropdownItem>
                  <DropdownItem key="15">Импорт из CVS/XLS</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          <div className="flex-jsb-c">
            <h1 className="text-[21px] font-bold">Все товары и услуги</h1>
            <Select
              className="max-w-xs"
              value="cheap"
              aria-label="select Sort"
              defaultSelectedKeys={["Популярные"]}
              variant="bordered"
            >
              <SelectItem key="Популярные">Популярные</SelectItem>
              <SelectItem key="Сначала дешевле">Сначала дешевле</SelectItem>
              <SelectItem key="Сначала дороже">Сначала дороже</SelectItem>
              <SelectItem key="Сначала новые">Сначала новые</SelectItem>
              <SelectItem key="Сначала старые">Сначала старые</SelectItem>
            </Select>
          </div>

          <CatalogProductsBody />
        </div>
      </div>
      <QuickView />
      <ModalLogin />
    </MainTemplate>
  );
}
