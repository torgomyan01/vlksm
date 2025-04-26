"use client";

import MainTemplate from "@/components/common/main-template/main-template";
import React, { useRef, useState } from "react";
import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Divider,
  NumberInput,
  Textarea,
} from "@heroui/react";
import { encodeImageFileAsURL } from "@/utils/helpers";
import { Input } from "@heroui/input";

function Page() {
  const [selectedImages, setSelectedImages] = useState<any[]>([]);

  function selectImage(e: any) {
    const files = e.target.files;

    for (let i = 0; i < files.length; i++) {
      encodeImageFileAsURL(files[i], (res) => {
        setSelectedImages((prev) => [...prev, res]);
      });
    }
  }

  function RemoveImage(index: number) {
    const old = [...selectedImages].filter((_, i) => i !== index);
    setSelectedImages(old);
  }

  const [value, setValue] = useState("");
  const inputRef: any = useRef(null);

  const handleChange = (e: any) => {
    const inputValue = e.target.value;

    const numericValue = inputValue.replace("%", "").replace(/[^0-9]/g, "");

    if (numericValue === "") {
      setValue("");
      return;
    }

    const formattedValue = `${numericValue}%`;
    setValue(formattedValue);

    setTimeout(() => {
      if (inputRef.current) {
        const position: any = numericValue.length;
        inputRef.current.setSelectionRange(position, position);
      }
    }, 0);
  };

  return (
    <MainTemplate>
      <div className="container !max-w-[974px] pt-5 relative">
        <Breadcrumbs>
          <BreadcrumbItem>Коммутация и передача сигналов</BreadcrumbItem>
          <BreadcrumbItem>Коммутаторы сигналов</BreadcrumbItem>
          <BreadcrumbItem>Презентационный коммутатор 5:1...</BreadcrumbItem>
        </Breadcrumbs>
        <h1 className="text-[22px] font-bold mt-6 mb-[37px]">
          Редактирование товара
        </h1>

        <div className="pb-[100px]">
          <h3 className="text-bold text-[18px] mb-2 font-bold">Изображения </h3>
          <div className="flex-js-s flex-wrap gap-4">
            {selectedImages.map((image, i) => (
              <div
                key={`selected_image_${i}`}
                className="w-[142px] h-[142px] bg-blue/20 flex-jc-c rounded-[6px] border-[3px] border-transparent hover:border-blue relative group transition"
              >
                <i
                  onClick={() => RemoveImage(i)}
                  className="fa-regular fa-xmark-large absolute top-[-15px] right-[-13px] bg-white p-2 rounded-full text-black/70 hover:text-black opacity-0 group-hover:opacity-100 transition cursor-pointer"
                ></i>
                <img
                  src={image}
                  alt="selected Image"
                  className="w-[90%] h-[90%] object-cover rounded-[2px]"
                />
              </div>
            ))}
          </div>

          <div className="mt-4">
            <label>
              <input
                onChange={selectImage}
                type="file"
                className="hidden"
                multiple
                accept="image/*"
              />
              <Button
                size="sm"
                as="div"
                className="bg-blue/20 text-blue text-[13px] font-bold"
              >
                <i className="fa-solid fa-plus mr-1"></i>
                Загрузить
              </Button>
            </label>
          </div>

          <div className="mt-4 mb-4">
            <Input label="Название" type="text" />
          </div>
          <div className="mb-4">
            <Input label="Артикул" type="text" />
          </div>
          <div className="mb-4">
            <Input label="Код товара" type="text" />
          </div>
          <div className="mb-4">
            <Input label="Цена" type="text" />
          </div>
          <div>
            <span className="underline font-semibold cursor-pointer">
              История цены
            </span>
          </div>
          <div className="mt-5">
            <span>Раздел</span>
          </div>
          <Breadcrumbs>
            <BreadcrumbItem>Коммутация и передача сигналов</BreadcrumbItem>
            <BreadcrumbItem>Коммутаторы сигналов</BreadcrumbItem>
          </Breadcrumbs>
          <div className="mt-2">
            <Button
              size="sm"
              className="bg-blue/20 text-blue text-[13px] font-bold"
            >
              Выбрать раздел
            </Button>
          </div>

          <div className="mt-5">
            <span>Описание</span>
          </div>
          <div className="w-full mt-1">
            <Textarea
              minRows={30}
              className="w-full"
              placeholder="Введите описание"
            />
          </div>

          <div className="mt-5 mb-2">
            <span>Вес товара</span>
          </div>
          <div className="mb-4">
            <Input label="Нетто" type="text" />
          </div>
          <div className="mb-4">
            <Input label="Брутто" type="text" />
          </div>
          <div className="mt-5 mb-2">
            <span>Габариты в собранном состоянии</span>
          </div>
          <div className="mb-4 flex-jsb-c bg-black/5 rounded-[12px] overflow-hidden">
            <NumberInput label="Длина" radius="none" defaultValue={0} />
            <div className="min-w-[1px] h-[36px] bg-black/20" />
            <NumberInput label="Ширина" radius="none" defaultValue={0} />
            <div className="min-w-[1px] h-[36px] bg-black/20" />
            <NumberInput label="Высота" radius="none" defaultValue={0} />
          </div>

          <div className="mt-5 mb-2">
            <span>Габариты в упаковке</span>
          </div>
          <div className="mb-4 flex-jsb-c bg-black/5 rounded-[12px] overflow-hidden">
            <NumberInput label="Длина" radius="none" defaultValue={0} />
            <div className="min-w-[1px] h-[36px] bg-black/20" />
            <NumberInput label="Ширина" radius="none" defaultValue={0} />
            <div className="min-w-[1px] h-[36px] bg-black/20" />
            <NumberInput label="Высота" radius="none" defaultValue={0} />
          </div>

          <Divider className="my-5" />

          <div className="mt-5 mb-2">
            <span className="text-[18px] font-bold">Характеристики</span>
          </div>
          <div className="mb-4 flex-jsb-c bg-black/5 rounded-[12px] overflow-hidden">
            <NumberInput label="Название" radius="none" defaultValue={0} />
            <div className="min-w-[1px] h-[36px] bg-black/20" />
            <NumberInput label="Значение" radius="none" defaultValue={0} />
          </div>
          <div className="mt-2">
            <Button
              size="sm"
              className="bg-blue/20 text-blue text-[13px] font-bold"
            >
              <i className="fa-solid fa-plus mr-1"></i>
              Добавить характеристику
            </Button>
          </div>

          <Divider className="my-5" />

          <div className="mt-5 mb-2">
            <span className="text-[18px] font-bold">Документы</span>
          </div>
          <div className="mb-4">
            <div className="flex-js-s bg-[#F3F6F8] rounded-[12px] h-[99px] p-2 gap-3">
              <img
                src="/img/product-image.png"
                alt="doc"
                className="w-[103px] h-[86px] rounded-[6px]"
              />
              <div>
                <h4 className="font-bold">Инструкция по эксплуатации</h4>
                <h5 className="text-black/70">PDF, 15 МБ</h5>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <Button
              size="sm"
              className="bg-blue/20 text-blue text-[13px] font-bold"
            >
              <i className="fa-solid fa-plus mr-1"></i>
              Добавить документ
            </Button>
          </div>

          <Divider className="my-5" />

          <div className="mt-5 mb-2">
            <span className="text-[18px] font-bold">Изготовители</span>
          </div>
          <div className="mt-2">
            <Button
              size="sm"
              className="bg-blue/20 text-blue text-[13px] font-bold"
            >
              <i className="fa-solid fa-plus mr-1"></i>
              Добавить изготовителя
            </Button>
          </div>

          <Divider className="my-5" />

          <div className="mt-5 mb-2">
            <span className="text-[18px] font-bold">Аналогичные товары</span>
          </div>
          <div className="mt-2">
            <Button
              size="sm"
              className="bg-blue/20 text-blue text-[13px] font-bold"
            >
              <i className="fa-solid fa-plus mr-1"></i>
              Добавить товар
            </Button>
          </div>

          <Divider className="my-5" />

          <div className="mt-5 mb-2">
            <span className="text-[18px] font-bold">Сопутствующие услуги</span>
          </div>
          <div className="w-full flex-js-s gap-3 flex-col">
            <div className="w-full bg-[#F3F6F8] rounded-[12px] px-4 py-4 flex-jsb-c">
              <span>Монтаж видеопанели тип 65”</span>
              <i className="fa-regular fa-xmark-large text-black/50 hover:text-black cursor-pointer"></i>
            </div>
            <div className="w-full bg-[#F3F6F8] rounded-[12px] px-4 py-4 flex-jsb-c">
              <span>Монтаж видеопанели тип 35”</span>
              <i className="fa-regular fa-xmark-large text-black/50 hover:text-black cursor-pointer"></i>
            </div>
          </div>
          <div className="mt-2">
            <Button
              size="sm"
              className="bg-blue/20 text-blue text-[13px] font-bold"
            >
              <i className="fa-solid fa-plus mr-1"></i>
              Добавить услугу
            </Button>
          </div>

          <Divider className="my-5" />

          <div className="mt-5 mb-2">
            <span className="text-[18px] font-bold">Скидка или наценка</span>
          </div>
          <div className="mb-4">
            <Input
              ref={inputRef}
              label="Скидка"
              type="text"
              value={value}
              onChange={handleChange}
            />
          </div>

          <Divider className="my-5" />

          <div className="bg-[#F3F6F8] p-3 rounded-[12px]">
            <ul>
              <li className="flex-js-c gap-6 mb-1">
                <div className="min-w-[170px] text-black/60">ID</div>
                <div>3532645</div>
              </li>
              <li className="flex-js-c gap-6 mb-1">
                <div className="min-w-[170px] text-black/60">
                  Время публикации
                </div>
                <div>06.03.2025 15:35</div>
              </li>
              <li className="flex-js-c gap-6">
                <div className="min-w-[170px] text-black/60">Автор</div>
                <div>Константин Иванов</div>
              </li>
            </ul>
          </div>

          <div className="mt-5 flex-jsb-c">
            <Button
              size="sm"
              className="bg-blue text-white text-[15px] font-bold"
            >
              Сохранить
            </Button>
            <Button
              size="sm"
              className="bg-[#FFE9E9] text-[#D61B1BB2] text-[15px] font-bold"
            >
              Удалить товар
            </Button>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
}

export default Page;
