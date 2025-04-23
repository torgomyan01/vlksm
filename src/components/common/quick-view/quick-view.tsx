import { Drawer, DrawerContent, Radio } from "@heroui/react";
import { useDispatch, useSelector } from "react-redux";
import { serModalQuickView } from "@/redux/modals";
import Image from "next/image";
import { RadioGroup } from "@heroui/radio";

function QuickView() {
  const dispatch = useDispatch();
  const modal = useSelector(
    (state: IModalsState) => state.modals.modalQuickView,
  );

  function openQuickView() {
    dispatch(serModalQuickView(false));
  }

  return (
    <Drawer isOpen={modal} onClose={openQuickView} size="xl">
      <DrawerContent>
        <div className="p-6">
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
              <RadioGroup label="Select your favorite city">
                <Radio value="buenos-aires">Buenos Aires</Radio>
                <Radio value="sydney">Sydney</Radio>
                <Radio value="san-francisco">San Francisco</Radio>
                <Radio value="london">London</Radio>
                <Radio value="tokyo">Tokyo</Radio>
              </RadioGroup>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default QuickView;
