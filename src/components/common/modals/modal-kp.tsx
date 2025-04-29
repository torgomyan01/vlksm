import {
  Button,
  Chip,
  Divider,
  ModalContent,
  Pagination,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "@heroui/modal";
import { Input } from "@heroui/input";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { serModalKP } from "@/redux/modals";

const rows = [
  {
    number: "№2412",
    status: "На согласовании скидки",
    shipmentDate: "28.02.2025",
    organization: "Название объекта",
    price: "3473",
  },
  {
    number: "№2413",
    status: "На согласовании скидки",
    shipmentDate: "28.02.2025",
    organization: "Название объекта 2",
    price: "2500",
  },
  {
    number: "№9532",
    status: "На согласовании скидки",
    shipmentDate: "28.02.2025",
    organization: "Название объекта 2",
    price: "5500",
  },
  {
    number: "№12425",
    status: "На согласовании скидки",
    shipmentDate: "28.02.2025",
    organization: "Название объекта 2",
    price: "25000",
  },
  {
    number: "№2412",
    status: "На согласовании скидки",
    shipmentDate: "28.02.2025",
    organization: "Название объекта",
    price: "3473",
  },
  {
    number: "№2413",
    status: "На согласовании скидки",
    shipmentDate: "28.02.2025",
    organization: "Название объекта 2",
    price: "2500",
  },
  {
    number: "№9532",
    status: "На согласовании скидки",
    shipmentDate: "28.02.2025",
    organization: "Название объекта 2",
    price: "5500",
  },
  {
    number: "№12425",
    status: "На согласовании скидки",
    shipmentDate: "28.02.2025",
    organization: "Название объекта 2",
    price: "25000",
  },
];

function ModalLogin() {
  const dispatch = useDispatch();
  const status = useSelector((state: IModalsState) => state.modals.modalKP);
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState<number>(30);

  function onCLose() {
    dispatch(serModalKP(false));
  }

  return (
    <Modal isOpen={status} onClose={onCLose} size="5xl">
      <ModalContent>
        <ModalHeader className="flex-js-s flex-col gap-1">
          Добавить товар в КП из реестра
        </ModalHeader>
        <ModalBody>
          <div className="flex-js-s gap-5">
            <div className="w-[228px] h-[115px] relative flex-jc-c bg-[#F0F7F7] p-5 rounded-[6px]">
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
                src={`/img/product-1.png`}
                alt="produvt 1"
                width={188}
                height={154}
                className="w-[70%] h-auto"
              />
            </div>
            <div>
              <h3 className="font-bold">
                Коммутатор 4 на 1 HDMI с деэмблированием аудио
              </h3>
              <h4 className="text-[13px] text-black/50">
                ЦТРС.468587.400.10.008
              </h4>
              <h4 className="text-[18px] mt-[10px]">13 234 ₽</h4>
              <div className="flex-js-c mt-[10px]">
                <div className="px-2 h-[28px] rounded-[6px] flex-jsb-c bg-black/5">
                  <i
                    className="fa-solid fa-minus text-blue text-[18px] cursor-pointer"
                    onClick={() => count > 0 && setCount(count - 1)}
                  />
                  <span className="mx-2 text-[15px] w-[50px] text-nowrap flex-jc-c">
                    {count} шт.
                  </span>
                  <i
                    className="fa-solid fa-plus text-blue text-[18px] cursor-pointer"
                    onClick={() => setCount(count + 1)}
                  />
                </div>
              </div>
            </div>
          </div>

          <Divider className="my-5" />

          <div>
            <Input
              aria-label="Input search"
              placeholder="Поиск по ID, артикулу, названию"
              type="text"
              className="w-full max-w-[574px] h-[41]"
              radius="sm"
            />
          </div>
          <h2 className="text-[18px] mt-5 font-bold">Все КП</h2>

          <Table
            aria-label="Example static collection table"
            className="mb-4 w-[calc(100%+32px)] ml-[-16px]"
            shadow="none"
            selectionMode="multiple"
          >
            <TableHeader>
              <TableColumn>Название</TableColumn>
              <TableColumn>Статус</TableColumn>
              <TableColumn key="shipmentDate" allowsSorting>
                Дата отгрузки
              </TableColumn>
              <TableColumn>Организация</TableColumn>
              <TableColumn>Стоимость</TableColumn>
            </TableHeader>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <b>{row.number}</b>
                  </TableCell>
                  <TableCell>
                    <Chip size="sm" className="bg-[#0C84DECC] text-white">
                      {row.status}
                    </Chip>
                  </TableCell>
                  <TableCell>{row.shipmentDate}</TableCell>
                  <TableCell>{row.organization}</TableCell>
                  <TableCell>{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex-js-c mt-[-10px]">
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

          <Divider className="mt-5" />

          <div className="mb-4">
            <Button
              size="sm"
              className="text-blue bg-blue/10 text-[13px] font-bold"
            >
              Добавить
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ModalLogin;
