import { Drawer, DrawerContent } from "@heroui/react";
import { useDispatch, useSelector } from "react-redux";
import { serModalQuickView } from "@/redux/modals";
import Image from "next/image";

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
            <Image src="/img/product-1.png" alt="Product image" width={200} height={200} />
          </div>
          <h1 className="text-[18px] font-bold">
            Презентационный коммутатор 5:1 с аудио микшером
          </h1>
          <h3 className="text-black/50 text-[13px] mt-10">
            ЦТРС.468587.200.50.001
          </h3>
          <h2>hhhh</h2>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default QuickView;
