"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainTemplate from "@/components/common/main-template/main-template";
import React, { useRef, useState } from "react";
import { RadioGroup } from "@heroui/radio";
import { Button, Radio } from "@heroui/react";
import Image from "next/image";
import Slider from "react-slick";

function Page() {
  const sliderRef = useRef<Slider | null>(null);
  const [count, setCount] = useState<number>(30);
  const [activeSlider, setActiveSlider] = useState<number>(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <MainTemplate>
      <div className="container pt-[87px]">
        <div className="w-full h-full grid grid-cols-2 gap-[20px] px-5">
          <div className="sticky top-[20px] z-10 product-slider">
            <div className="w-full bg-blue/20 rounded-[6px] h-[440px]">
              <Slider
                ref={sliderRef}
                {...settings}
                afterChange={(e) => setActiveSlider(e)}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Image
                    key={`slider-${i}`}
                    src={`/img/product-${i + 1}.png`}
                    alt="Slider item Product"
                    width={700}
                    height={500}
                    className="object-cover !w-[90%]"
                  />
                ))}
              </Slider>
            </div>
            <div className="flex-jc-c gap-3 mt-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={`slider-item-${i}`}
                  onClick={() => sliderRef.current?.slickGoTo(i)}
                  className={`flex-jc-c bg-blue/20 rounded-[6px] w-[96px] h-[96px] cursor-pointer border-[2px] ${activeSlider === i ? "border-blue" : "border-transparent"} transition`}
                >
                  <Image
                    src={`/img/product-${i + 1}.png`}
                    alt="Slider item Product"
                    width={700}
                    height={500}
                    className="object-cover !w-[90%]"
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-[22px] font-bold">
              Презентационный коммутатор 5:1 с аудио микшером
            </h1>
            <h3 className="text-[13px] mt-[10px] btext-black/50">
              ЦТРС.468587.200.50.001
            </h3>
            <h2 className="text-[21px] mt-[10px]">
              1000 ₽ <span className="text-black/70 line-through">1990 ₽</span>{" "}
              <span className="text-blue">-50%</span>
            </h2>
            <div className="p-[10px] bg-[#F3F6F8] rounded-[10px] mt-4 mb-[71px]">
              <div className="flex-jsb-c">
                <b className="text-[15px]">В КП</b>
                <span className="text-[15px] text-black/50">Последние КП</span>
              </div>

              <div className="flex-jsb-c">
                <RadioGroup className="w-full mt-4">
                  <div className="w-full flex-jsb-c">
                    <Radio value="14" className="w-full" />
                    <span className="block w-[50px] min-w-[50px] text-black/50 text-[15px]">
                      №14
                    </span>
                    <span className="w-full">ООО «СуперПром»</span>
                    <span className="text-nowrap">123 204 ₽</span>
                  </div>
                  <div className="w-full flex-jsb-c">
                    <Radio value="145" className="w-full" />
                    <span className="block w-[50px] min-w-[50px] text-black/50 text-[15px]">
                      №12
                    </span>
                    <span className="w-full">Прогресс</span>
                    <span className="text-nowrap">11 211 ₽</span>
                  </div>
                  <div className="w-full flex-jsb-c">
                    <Radio value="1321" className="w-full" />
                    <span className="block w-[50px] min-w-[50px] text-black/50 text-[15px]">
                      №1321
                    </span>
                    <span className="w-full">Автоматизация плюс</span>
                    <span className="text-nowrap">19 274 ₽₽</span>
                  </div>
                  <div className="w-full flex-jsb-c">
                    <Radio value="15" className="w-full" />
                    <span className="block w-[50px] min-w-[50px] text-black/50 text-[15px]">
                      №15
                    </span>
                    <span className="w-full">ИП Сорокин М. Г.</span>
                    <span className="text-nowrap">39 244 ₽</span>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex-js-c gap-2 mt-3">
                <Button size="sm" className="font-bold">
                  Выбрать КП из реестра
                </Button>
                <Button size="sm" className="font-bold">
                  Создать новое КП
                </Button>
              </div>
              <div className="flex-jsb-c mt-4">
                <b className="text-[15px]">Количество</b>
              </div>
              <div className="flex-js-c mt-[10px]">
                <div className="px-2 h-[38px] rounded-[6px] flex-jsb-c bg-black/5">
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
              <div className="mt-6">
                <Button
                  color="primary"
                  variant="flat"
                  className="bg-blue text-white text-[15px] font-bold rounded-[6px]"
                >
                  Добавить на 120 000 ₽
                </Button>
              </div>
            </div>

            <h3 className="text-[15px] underline mb-4">История цены</h3>
            <p className="text-[15px] text-black/70">
              Коммутатор для презентаций 5×1 4K60 поддерживает 5 входов, включая
              3 порта HDMI, 1 порт VGA (YPbPr / CVBS) и 1 порт DisplayPort, с
              возможностью масштабирования до выходов HDMI и HDBaseT
              (зеркальный). Предлагает гибкое применение звука, которое включает
              в себя несимметричный звук, микрофонный вход и линейный выход.
              Аудиопроцессор предлагает автоматический микшер и управление
              автоматическим усилением для микширования или уменьшения фонового
              звука для улучшения основного источника звука. Системой можно
              легко управлять и настраивать через Telnet, WebGUI, ИК-пульт и
              RS-232.
            </p>
            <ul className="text-[15px] text-black/70 mt-4 list-disc pl-6">
              <li>Совместимость с HDMI 2.0b, HDCP 2.2</li>
              <li>
                3xHDMI, 1xVGA (YPbPr / CVBS), 1xDisplayPort, 1xMIC In, 4x
                небалансный аудиовход
              </li>
              <li>Выходы HDMI и HDBaseT (70M) (зеркальные)</li>
              <li>
                Разрешение видео HDMI / DP до 4K2K при 60 Гц (4:4:4), 4K2K при
                30 Гц, 1080p при 120 Гц
              </li>
              <li>Разрешение VGA до 1920×1200 при 60 Гц</li>
              <li>Выходное разрешение до 4K2K при 30 Гц</li>
              <li>Поддержка автоматического и ручного переключения режимов</li>
              <li>Поддерживает управление EDID</li>
              <li>Поддерживает сквозной канал PCM 2CH</li>
              <li>
                Кнопка сенсорной панели, WebGUI, ИК-пульт, настольная панель и
                управление через RS-232
              </li>
            </ul>

            <div className="mb-4 mt-8">
              <h4>
                <b>Код товара</b>
              </h4>
              <h4>2834793274</h4>
            </div>

            <div className="mb-4">
              <h4>
                <b>Вес товара нетто</b>
              </h4>
              <h4>1250 г</h4>
            </div>

            <div className="mb-4">
              <h4>
                <b>Вес товара брутто</b>
              </h4>
              <h4>Нет данных</h4>
            </div>

            <div className="mb-4">
              <h4>
                <b>Габариты в собранном состоянии</b>
              </h4>
              <h4>150 мм × 220 мм × 44 мм</h4>
            </div>

            <div className="mb-4">
              <h4>
                <b>Габариты в упаковке</b>
              </h4>
              <h4>Нет данных</h4>
            </div>

            <ul className="flex-js-s flex-col gap-[12px] w-full mt-10 mb-[109px]">
              <li className="flex-jsb-s w-full">
                <h5 className="w-[50%] font-bold">Соответствие HDMI</h5>
                <h6 className="text-black/70 w-[50%]">HDMI 2.0b</h6>
              </li>
              <li className="flex-jsb-s w-full">
                <h5 className="w-[50%] font-bold">Соответствие DP</h5>
                <h6 className="text-black/70 w-[50%]">DisplayPort 1.2a</h6>
              </li>
              <li className="flex-jsb-s w-full">
                <h5 className="w-[50%] font-bold">Соответствие HDCP</h5>
                <h6 className="text-black/70 w-[50%]">HDCP 2.2 и HDCP 1.4</h6>
              </li>
              <li className="flex-jsb-s w-full">
                <h5 className="w-[50%] font-bold">Разрешение видео</h5>
                <h6 className="text-black/70 w-[50%]">
                  HDMI/DisplayPort: до 4K2K@60Hz (4:4:4) <br />
                  CVBS: PAL/NTSC3.58/NTSC4.43/SECAM/PAL M/PAL N <br />
                  YPBPR: 480i до1080p <br />
                  VGA: 640×480/60 до 1920×1200/60 <br />
                </h6>
              </li>
              <li className="flex-jsb-s w-full">
                <h5 className="w-[50%] font-bold">
                  Разрешение видео на выходе
                </h5>
                <h6 className="text-black/70 w-[50%]">
                  4K2K/30,4K2K/25,1920x1080p60, 1920x1080p50, 1280x720p/60,
                  1280x720p/50, 1024×768/60,1280x 800/60,
                  1360×768/60,1400×1050/60,1680×1050/60, 1920×1200/60
                </h6>
              </li>
              <li className="flex-jsb-s w-full">
                <h5 className="w-[50%] font-bold">Аудио форматы</h5>
                <h6 className="text-black/70 w-[50%]">LPCM 2.0CH</h6>
              </li>
              <li className="flex-jsb-s w-full">
                <h5 className="w-[50%] font-bold">
                  Защита от электростатического разряда
                </h5>
                <h6 className="text-black/70 w-[50%]">
                  Модель человеческого тела: ± 8 кВ (по воздуху) ± 4 кВ (при
                  контакте)
                </h6>
              </li>
              <li className="flex-jsb-s w-full">
                <h5 className="w-[50%] font-bold">Входные порты</h5>
                <h6 className="text-black/70 w-[50%]">
                  3 x HDMI Type A [19-контактный «мама»] <br />
                  1 x Display Port [«мама»] <br />
                  1 x VGA [гнездовой] <br />
                  1 x MIC вход [3-контактный порт Phoenix] <br />
                  5 x Стерео входов [3-контактный порт Phoenix] <br />
                </h6>
              </li>
              <li className="flex-jsb-s w-full">
                <h5 className="w-[50%] font-bold">Выходные порты</h5>
                <h6 className="text-black/70 w-[50%]">
                  1 x HDMI Output Type A [19-контактный «мама»] <br />
                  1 x HDBaseT Out [RJ45] <br />
                  1 x Стерео выход [3-контактный порт Phoenix] <br />
                </h6>
              </li>
              <li className="flex-jsb-s w-full">
                <h5 className="w-[50%] font-bold">Интерфейсы управления</h5>
                <h6 className="text-black/70 w-[50%]">
                  1 x IR in [3,5 мм мини Джек] <br />
                  1 x IR out [3,5 мм мини Джек] <br />
                  1 x CONTACT IN [6-контактный порт Phoenix] <br />
                  1 x RS-232 [3-контактный порт Phoenix] <br />
                  1 x Web GUI [RJ45] <br />
                  1 x USB Type A [5-контактный «мама»] <br />
                </h6>
              </li>
              <li className="flex-jsb-s w-full">
                <h5 className="w-[50%] font-bold">Корпус</h5>
                <h6 className="text-black/70 w-[50%]">Металлический корпус</h6>
              </li>
              <li className="flex-jsb-s w-full">
                <h5 className="w-[50%] font-bold">Цвет</h5>
                <h6 className="text-black/70 w-[50%]">Чёрный</h6>
              </li>
              <li className="flex-jsb-s w-full">
                <h5 className="w-[50%] font-bold">Электропитание</h5>
                <h6 className="text-black/70 w-[50%]">
                  Адаптер постоянного тока 24 В / 1 А
                </h6>
              </li>
              <li className="flex-jsb-s w-full">
                <h5 className="w-[50%] font-bold">Потребляемая мощность</h5>
                <h6 className="text-black/70 w-[50%]">
                  9 Вт [Основной блок] <br />
                  18 Вт [Основной блок + приемник HDBaseT] <br />
                </h6>
              </li>
              <li className="flex-jsb-s w-full">
                <h5 className="w-[50%] font-bold">Рабочая температура</h5>
                <h6 className="text-black/70 w-[50%]">5°C ~ 40°C</h6>
              </li>
              <li className="flex-jsb-s w-full">
                <h5 className="w-[50%] font-bold">Температура хранения</h5>
                <h6 className="text-black/70 w-[50%]">-20°C ~ 60°C</h6>
              </li>
              <li className="flex-jsb-s w-full">
                <h5 className="w-[50%] font-bold">Относительная влажность</h5>
                <h6 className="text-black/70 w-[50%]">
                  20% ~ 90% (без конденсата)
                </h6>
              </li>
            </ul>

            <div className="mb-4 pb-[127px] border-b">
              <h4 className="mb-[30px] font-bold">Документы</h4>
              <Image
                src="/img/product-image.png"
                alt="product image"
                width={430}
                height={243}
              />
            </div>

            <div className="mb-4 mt-8">
              <h4>
                <b>ID</b>
              </h4>
              <h4>3532645</h4>
            </div>
            <div className="mb-4 mt-8">
              <h4>
                <b>Время публикации</b>
              </h4>
              <h4>06.03.2025 15:35</h4>
            </div>
            <div className="mb-4 mt-8">
              <h4>
                <b>Автор</b>
              </h4>
              <h4>Константин Иванов</h4>
            </div>
            <div className="mb-4 mt-8">
              <h4>
                <b>Автор</b>
              </h4>
              <Button
                color="primary"
                variant="light"
                className="border border-[#EEEEEE] rounded-[6px] mt-2 text-black"
              >
                Редактировать
              </Button>
            </div>
            <div className="mb-4 mt-8">
              <h4 className="underline cursor-pointer inline-block">
                Снять с публикации
              </h4>
            </div>
            <div className="mb-4">
              <h4 className="underline cursor-pointer inline-block">
                Опубликовать
              </h4>
            </div>
            <div className="mb-20">
              <h4 className="underline text-[#FF6868] cursor-pointer inline-block">
                Удалить
              </h4>
            </div>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
}

export default Page;
