import { Button, Drawer, DrawerContent, Radio } from "@heroui/react";
import { useDispatch, useSelector } from "react-redux";
import { serModalQuickView } from "@/redux/modals";
import Image from "next/image";
import { RadioGroup } from "@heroui/radio";
import { useState } from "react";

function QuickView() {
  const dispatch = useDispatch();
  const modal = useSelector(
    (state: IModalsState) => state.modals.modalQuickView,
  );

  const [count, setCount] = useState<number>(30);

  function openQuickView() {
    dispatch(serModalQuickView(false));
  }

  return (
    <Drawer isOpen={modal} onClose={openQuickView} size="xl">
      <DrawerContent className="rounded-none">
        <div className="p-6">
          <div className="absolute inline-block bg-[#F0F7F7] text-blue px-3 rounded-full text-[15px] font-semibold right-[40px] top-[10px] cursor-pointer">
            Развернуть <i className="fa-regular fa-arrow-up-right"></i>
          </div>
          <div className="w-full h-[200px] flex-jc-c">
            <Image
              src="/img/product-1.png"
              alt="Product image"
              width={200}
              height={200}
            />
          </div>
          <h1 className="text-[18px] font-bold">
            Презентационный коммутатор 5:1 с аудио микшером
          </h1>
          <h3 className="text-black/50 text-[13px] mt-[10px]">
            ЦТРС.468587.200.50.001
          </h3>
          <h2 className="text-[21px] mt-[10px]">
            1000 ₽ <span className="text-black/70 line-through">1990 ₽</span>{" "}
            <span className="text-blue">-50%</span>
          </h2>

          <div className="p-[10px] bg-[#F3F6F8] rounded-[10px] mt-4">
            <div className="flex-jsb-c">
              <b className="text-[15px]">В КП</b>
              <span className="text-[15px] text-black/50">Последние КП</span>
            </div>

            <div className="flex-jsb-c">
              <RadioGroup label="Select KP" className="w-full ">
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
                <span className="mx-2 text-[15px]">{count} шт.</span>
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

          <p className="mt-6 text-[15px]">
            Коммутатор для презентаций 5×1 4K60 поддерживает 5 входов, включая 3
            порта HDMI, 1 порт VGA (YPbPr / CVBS) и 1 порт DisplayPort, с
            возможностью масштабирования до выходов HDMI и HDBaseT (зеркальный).
            Предлагает гибкое применение звука, которое включает в себя
            несимметричный звук, микрофонный вход и линейный выход.
            Аудиопроцессор предлагает автоматический микшер и управление
            автоматическим усилением для микширования или уменьшения фонового
            звука для улучшения основного источника звука. Системой можно легко
            управлять и настраивать через Telnet, WebGUI, ИК-пульт и RS-232.
          </p>
          <ul className="text-[15px] mt-4 list-disc pl-6">
            <li>Совместимость с HDMI 2.0b, HDCP 2.2</li>
            <li>
              3xHDMI, 1xVGA (YPbPr / CVBS), 1xDisplayPort, 1xMIC In, 4x
              небалансный аудиовход
            </li>
            <li>Выходы HDMI и HDBaseT (70M) (зеркальные)</li>
            <li>
              Разрешение видео HDMI / DP до 4K2K при 60 Гц (4:4:4), 4K2K при 30
              Гц, 1080p при 120 Гц
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
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default QuickView;
