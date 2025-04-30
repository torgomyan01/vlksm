"use client";

import MainTemplate from "@/components/common/main-template/main-template";
import React from "react";
import {
  Avatar,
  Button,
  Checkbox,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NumberInput,
  Select,
  SelectItem,
  Textarea,
} from "@heroui/react";

const russianNames = [
  { firstName: "Алексей Смирнов" },
  { firstName: "Ирина Петрова" },
  { firstName: "Дмитрий Иванов" },
  { firstName: "Ольга Соколова" },
  { firstName: "Сергей Кузнецов" },
  { firstName: "Анна Морозова" },
  { firstName: "Николай Новиков" },
  { firstName: "Елена Федорова" },
  { firstName: "Максим Михайлов" },
  { firstName: "Татьяна Васильева" },
];

function CreateKP() {
  return (
    <MainTemplate>
      <div className="container !max-w-[1040px] pt-5 relative pb-[150px]">
        <h1 className="text-[22px] font-bold mb-[37px]">Создание КП — №224</h1>

        <div className="grid grid-cols-3 gap-5">
          <NumberInput label="Номер КП" radius="sm" defaultValue={0} />
          <NumberInput label="Заказчик" radius="sm" defaultValue={0} />
          <NumberInput label="Название объекта" radius="sm" defaultValue={0} />
          <NumberInput
            label="Название организации"
            radius="sm"
            defaultValue={0}
          />
          <NumberInput label="Адрес объекта" radius="sm" defaultValue={0} />
          <NumberInput label="ИНН" radius="sm" defaultValue={0} />
          <NumberInput
            label="Дата отгрузки заказчику"
            radius="sm"
            defaultValue={0}
          />
        </div>

        <Divider className="my-5" />

        <h2 className="text-[18px] font-bold mb-[10px]">Оборудование</h2>

        <div className="w-full bg-[#F3F6F8] rounded-[6px] p-[10px]">
          <div className="grid grid-cols-6 border-b pb-1 mt-4">
            <div className="text-black/70 col-span-2">Название</div>
            <div className="text-black/70">Цена</div>
            <div className="text-black/70">Цена со скидкой</div>
            <div className="text-black/70">Кол-во</div>
            <div className="text-black/70">Стоимость</div>
          </div>
          <div className="grid grid-cols-6 pb-3 mt-4">
            <div className="col-span-2">
              <div className="flex-js-s gap-4">
                1
                <div>
                  <h3 className="font-bold">HD cервер видеоконференции</h3>
                  <h3 className="text-[13px] text-black/50">
                    ЦТРС.468587.400.10.008
                  </h3>
                </div>
              </div>
            </div>
            <div className="text-black/70">32500 ₽</div>
            <div className="text-black/70">
              <span className="text-[#0026FF]">27400 ₽</span>
            </div>
            <div className="text-black/70">
              <div className="px-2 w-[95px] h-[28px] rounded-[6px] flex-jsb-c bg-black/5">
                <i className="fa-solid fa-minus text-blue text-[18px] cursor-pointer" />
                <span className="mx-2 text-[15px] w-[50px] text-nowrap flex-jc-c">
                  30
                </span>
                <i className="fa-solid fa-plus text-blue text-[18px] cursor-pointer" />
              </div>
            </div>
            <div>
              <div className="flex-jsb-c">
                <span>27400 ₽</span>
                <Dropdown>
                  <DropdownTrigger>
                    <i className="fa-solid fa-ellipsis mr-2 text-black/70 text-[20px] cursor-pointer"></i>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Dynamic Actions">
                    <DropdownItem key="1">
                      Добавить заменяемое оборудование
                    </DropdownItem>
                    <DropdownItem key="2" className="text-[#D61B1BB2]">
                      Удалить товар
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-6 pb-4 mt-4 border-b">
            <div className="col-span-2" />
            <div className="col-span-4">
              <h3 className="text-[#000000] mb-[10px] font-bold">
                Заменяемое оборудование
              </h3>
              <div className="w-full grid grid-cols-2 gap-[10px]">
                <div className="bg-black/5 rounded-[6px] px-2 py-1">
                  <h5 className="text-black/70">ВН Заказчика</h5>
                  <h6>82897412</h6>
                </div>
                <div className="bg-black/5 rounded-[6px] px-2 py-1">
                  <h5 className="text-black/70">Артикул</h5>
                  <h6>1425325</h6>
                </div>
                <div className="bg-black/5 rounded-[6px] px-2 py-1">
                  <h5 className="text-black/70">Наименование</h5>
                  <h6>Оборудование для ВКС</h6>
                </div>
                <div className="bg-black/5 rounded-[6px] px-2 py-1">
                  <h5 className="text-black/70">Комментарий</h5>
                  <h6>Заменить что-то там</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-6 pb-3 mt-4">
            <div className="col-span-2">
              <div className="flex-js-s gap-4">
                2
                <div>
                  <h3 className="font-bold">
                    Терминал ВКС (кодек системы) rev.2
                  </h3>
                  <h3 className="text-[13px] text-black/50">
                    ЦТРС.468587.400.10.008
                  </h3>
                </div>
              </div>
            </div>
            <div className="text-black/70">32500 ₽</div>
            <div className="text-black/70">
              <span className="text-[#0026FF]">27400 ₽</span>
            </div>
            <div className="text-black/70">
              <div className="px-2 w-[95px] h-[28px] rounded-[6px] flex-jsb-c bg-black/5">
                <i className="fa-solid fa-minus text-blue text-[18px] cursor-pointer" />
                <span className="mx-2 text-[15px] w-[50px] text-nowrap flex-jc-c">
                  30
                </span>
                <i className="fa-solid fa-plus text-blue text-[18px] cursor-pointer" />
              </div>
            </div>
            <div>
              <div className="flex-jsb-c">
                <span>27400 ₽</span>
                <Dropdown>
                  <DropdownTrigger>
                    <i className="fa-solid fa-ellipsis mr-2 text-black/70 text-[20px] cursor-pointer"></i>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Dynamic Actions">
                    <DropdownItem key="1">
                      Добавить заменяемое оборудование
                    </DropdownItem>
                    <DropdownItem key="2" className="text-[#D61B1BB2]">
                      Удалить товар
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-6 pb-3 mt-4">
            <div className="col-span-2">
              <div className="flex-js-s gap-4">
                3
                <div>
                  <h3 className="font-bold">
                    Терминал ВКС с поворотной камерой FullHD 12х (кодек системы)
                  </h3>
                  <h3 className="text-[13px] text-black/50">
                    ЦТРС.468587.400.10.008
                  </h3>
                </div>
              </div>
            </div>
            <div className="text-black/70">32500 ₽</div>
            <div className="text-black/70">
              <span className="text-[#0026FF]">27400 ₽</span>
            </div>
            <div className="text-black/70">
              <div className="px-2 w-[95px] h-[28px] rounded-[6px] flex-jsb-c bg-black/5">
                <i className="fa-solid fa-minus text-blue text-[18px] cursor-pointer" />
                <span className="mx-2 text-[15px] w-[50px] text-nowrap flex-jc-c">
                  30
                </span>
                <i className="fa-solid fa-plus text-blue text-[18px] cursor-pointer" />
              </div>
            </div>
            <div>
              <div className="flex-jsb-c">
                <span>27400 ₽</span>
                <Dropdown>
                  <DropdownTrigger>
                    <i className="fa-solid fa-ellipsis mr-2 text-black/70 text-[20px] cursor-pointer"></i>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Dynamic Actions">
                    <DropdownItem key="1">
                      Добавить заменяемое оборудование
                    </DropdownItem>
                    <DropdownItem key="2" className="text-[#D61B1BB2]">
                      Удалить товар
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex-jsb-s mt-3">
          <div className="w-[300px]">
            <div className="bg-black/5 rounded-[6px] px-2 py-1">
              <h5 className="text-black/70">Скидка на товары</h5>
              <h6>25%</h6>
            </div>
            <p className="text-[#0026FF] mt-1">
              Запрошена скидка более 20%, поэтому она потребует согласования
            </p>
          </div>
          <div className="flex-js-s gap-8">
            <div>
              <ul className="flex-js-s flex-col gap-1">
                <li>Итого товары</li>
                <li>НДС</li>
                <li>
                  <b>Итого с НДС</b>
                </li>
              </ul>
            </div>
            <div className="w-[150px]">
              <ul className="flex-js-s flex-col gap-1">
                <li>199000 ₽</li>
                <li>15000 ₽</li>
                <li>
                  <b>159000 ₽</b>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Divider className="my-5" />

        <h2 className="text-[18px] font-bold mb-[10px]">
          Услуги, гарантия, сервис
        </h2>

        <div className="w-full bg-[#F3F6F8] rounded-[6px] p-[10px]">
          <div className="grid grid-cols-6 border-b pb-1 mt-4">
            <div className="text-black/70 col-span-2">Название</div>
            <div className="text-black/70">Цена</div>
            <div className="text-black/70">Цена со скидкой</div>
            <div className="text-black/70">Кол-во</div>
            <div className="text-black/70">Стоимость</div>
          </div>
          <div className="grid grid-cols-6 pb-3 mt-4">
            <div className="col-span-2">
              <div className="flex-js-s gap-4">
                1
                <div>
                  <h3 className="font-bold">HD cервер видеоконференции</h3>
                  <h3 className="text-[13px] text-black/50">
                    ЦТРС.468587.400.10.008
                  </h3>
                </div>
              </div>
            </div>
            <div className="text-black/70">32500 ₽</div>
            <div className="text-black/70">
              <span className="text-[#0026FF]">27400 ₽</span>
            </div>
            <div className="text-black/70">
              <div className="px-2 w-[95px] h-[28px] rounded-[6px] flex-jsb-c bg-black/5">
                <i className="fa-solid fa-minus text-blue text-[18px] cursor-pointer" />
                <span className="mx-2 text-[15px] w-[50px] text-nowrap flex-jc-c">
                  30
                </span>
                <i className="fa-solid fa-plus text-blue text-[18px] cursor-pointer" />
              </div>
            </div>
            <div>
              <div className="flex-jsb-c">
                <span>27400 ₽</span>
                <Dropdown>
                  <DropdownTrigger>
                    <i className="fa-solid fa-ellipsis mr-2 text-black/70 text-[20px] cursor-pointer"></i>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Dynamic Actions">
                    <DropdownItem key="1">
                      Добавить заменяемое оборудование
                    </DropdownItem>
                    <DropdownItem key="2" className="text-[#D61B1BB2]">
                      Удалить товар
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-6 pb-3 mt-4">
            <div className="col-span-2">
              <div className="flex-js-s gap-4">
                2
                <div>
                  <h3 className="font-bold">
                    Терминал ВКС (кодек системы) rev.2
                  </h3>
                  <h3 className="text-[13px] text-black/50">
                    ЦТРС.468587.400.10.008
                  </h3>
                </div>
              </div>
            </div>
            <div className="text-black/70">32500 ₽</div>
            <div className="text-black/70">
              <span className="text-[#0026FF]">27400 ₽</span>
            </div>
            <div className="text-black/70">
              <div className="px-2 w-[95px] h-[28px] rounded-[6px] flex-jsb-c bg-black/5">
                <i className="fa-solid fa-minus text-blue text-[18px] cursor-pointer" />
                <span className="mx-2 text-[15px] w-[50px] text-nowrap flex-jc-c">
                  30
                </span>
                <i className="fa-solid fa-plus text-blue text-[18px] cursor-pointer" />
              </div>
            </div>
            <div>
              <div className="flex-jsb-c">
                <span>27400 ₽</span>
                <Dropdown>
                  <DropdownTrigger>
                    <i className="fa-solid fa-ellipsis mr-2 text-black/70 text-[20px] cursor-pointer"></i>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Dynamic Actions">
                    <DropdownItem key="1">
                      Добавить заменяемое оборудование
                    </DropdownItem>
                    <DropdownItem key="2" className="text-[#D61B1BB2]">
                      Удалить товар
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-6 pb-3 mt-4">
            <div className="col-span-2">
              <div className="flex-js-s gap-4">
                3
                <div>
                  <h3 className="font-bold">
                    Терминал ВКС с поворотной камерой FullHD 12х (кодек системы)
                  </h3>
                  <h3 className="text-[13px] text-black/50">
                    ЦТРС.468587.400.10.008
                  </h3>
                </div>
              </div>
            </div>
            <div className="text-black/70">32500 ₽</div>
            <div className="text-black/70">
              <span className="text-[#0026FF]">27400 ₽</span>
            </div>
            <div className="text-black/70">
              <div className="px-2 w-[95px] h-[28px] rounded-[6px] flex-jsb-c bg-black/5">
                <i className="fa-solid fa-minus text-blue text-[18px] cursor-pointer" />
                <span className="mx-2 text-[15px] w-[50px] text-nowrap flex-jc-c">
                  30
                </span>
                <i className="fa-solid fa-plus text-blue text-[18px] cursor-pointer" />
              </div>
            </div>
            <div>
              <div className="flex-jsb-c">
                <span>27400 ₽</span>
                <Dropdown>
                  <DropdownTrigger>
                    <i className="fa-solid fa-ellipsis mr-2 text-black/70 text-[20px] cursor-pointer"></i>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Dynamic Actions">
                    <DropdownItem key="1">
                      Добавить заменяемое оборудование
                    </DropdownItem>
                    <DropdownItem key="2" className="text-[#D61B1BB2]">
                      Удалить товар
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <Button
              size="sm"
              className="text-blue bg-blue/10 text-[15px] font-bold"
            >
              <i className="fa-solid fa-plus"></i>
              Добавить
            </Button>
          </div>
        </div>

        <div className="w-full flex-jsb-s mt-3">
          <div className="w-[300px]">
            <div className="bg-black/5 rounded-[6px] px-2 py-1">
              <h5 className="text-black/70">Скидка на товары</h5>
              <h6>5%</h6>
            </div>
            <div className="mt-2">
              <Checkbox defaultSelected size="md" radius="sm">
                Перераспределять услуги
              </Checkbox>
            </div>
          </div>
          <div className="flex-js-s gap-8">
            <div>
              <ul className="flex-js-s flex-col gap-1">
                <li>Стоимость услуг</li>
                <li>НДС</li>
                <li>
                  <b>Итого с НДС</b>
                </li>
              </ul>
            </div>
            <div className="w-[150px]">
              <ul className="flex-js-s flex-col gap-1">
                <li>199000 ₽</li>
                <li>15000 ₽</li>
                <li>
                  <b>159000 ₽</b>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Divider className="my-5" />

        <div className="w-full flex-jsb-s mt-3">
          <div className="w-[300px]">
            <h2 className="font-bold text-[23px]">Итог</h2>
          </div>
          <div className="flex-js-s gap-8">
            <div>
              <ul className="flex-js-s flex-col gap-1">
                <li>Полная стоимость</li>
                <li>
                  <b>Cо всеми скидками</b>
                </li>
                <li>НДС</li>
              </ul>
            </div>
            <div className="w-[150px]">
              <ul className="flex-js-s flex-col gap-1">
                <li>199000 ₽</li>
                <li>15000 ₽</li>
                <li>
                  <b>159000 ₽</b>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Divider className="my-5" />

        <div className="w-full grid grid-cols-2 gap-5 mt-6">
          <div>
            <h2 className="text-[18px] font-bold mb-4">Информация о КП</h2>
            <div className="mb-2 w-full">
              <Select className="w-full" label="Автор" items={russianNames}>
                {(name) => (
                  <SelectItem key={name.firstName}>{name.firstName}</SelectItem>
                )}
              </Select>
            </div>
            <div className="w-full bg-[#F3F6F8] rounded-[6px] p-[10px]">
              <ul className="flex-js-s flex-col gap-2">
                <li className="flex-js-c gap-3">
                  <div className="text-black/60 w-[170px]">ID</div>
                  <div>3532645</div>
                </li>
                <li className="flex-js-c gap-3">
                  <div className="text-black/60 w-[170px]">
                    Время публикации
                  </div>
                  <div>06.03.2025 15:35</div>
                </li>
                <li className="flex-js-c gap-3">
                  <div className="text-black/60 w-[170px]">
                    Время обновления
                  </div>
                  <div>06.03.2025 15:35</div>
                </li>
                <li className="flex-js-c gap-3">
                  <div className="text-black/60 w-[170px]">Обновил</div>
                  <div>Алексей Алексеев</div>
                </li>
              </ul>
            </div>

            <div className="mt-[31px]">
              <Button
                size="sm"
                className="text-blue bg-blue/10 text-[15px] font-bold"
              >
                Управлять версиями
              </Button>
            </div>
          </div>

          <div>
            <h2 className="text-[18px] font-bold mb-4">
              Изменения и комментарии
            </h2>
            <div className="w-full bg-[#F3F6F8] rounded-[6px] p-[10px] mb-2">
              <div className="flex-js-c gap-2">
                <Avatar
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
                Андрей Степанов
              </div>
              <div className="mt-[10px]">
                <span className="text-[13px] text-white bg-[#E33A3A] rounded-full px-[7px] py-[2px]">
                  Скидка не согласована
                </span>
              </div>
              <div className="mt-[10px]">
                <span className="text-black/50">17.04.2025 17:45</span>
              </div>
            </div>

            <div className="w-full bg-[#F3F6F8] rounded-[6px] p-[10px]">
              <div className="flex-js-c gap-2">
                <Avatar
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
                Андрей Степанов
              </div>
              <div className="mt-[10px]">
                <span>Могу согласовать скидку до 20%</span>
              </div>
              <div className="mt-[10px]">
                <span className="text-black/50">17.04.2025 17:45</span>
              </div>
            </div>

            <div className="mt-4">
              <Button
                size="sm"
                className="text-blue bg-blue/10 text-[15px] font-bold"
              >
                Открыть комментарии
              </Button>
            </div>

            <h2 className="text-[18px] font-bold mb-4 mt-4">
              Добавить комментарий
            </h2>
            <div className="w-full bg-[#F3F6F8] rounded-[6px] p-[10px]">
              <Textarea
                className="w-full mb-4"
                placeholder="Комментарий"
                variant="faded"
              />
              <div className="flex-jsb-c">
                <div className="flex-js-c gap-2">
                  <Avatar
                    size="sm"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                  />
                  Андрей Степанов
                </div>
                <i className="fa-solid fa-paper-plane cursor-pointer"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <Button
            size="sm"
            className="bg-blue text-white text-[15px] font-bold h-[32px]"
          >
            Сохранить
          </Button>
        </div>
      </div>
    </MainTemplate>
  );
}

export default CreateKP;
