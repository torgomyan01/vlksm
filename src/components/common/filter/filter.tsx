import LeftMenu from "@/components/common/left-menu/left-menu";
import {
  Checkbox,
  CheckboxGroup,
  DateRangePicker,
  Divider,
  NumberInput,
} from "@heroui/react";
import React from "react";

function Filter() {
  return (
    <div className="w-[300px] h-[calc(100dvh-68px)] px-4 pt-4 overflow-y-auto pb-10">
      <div>
        <LeftMenu />
      </div>
      <Divider className="my-4" />

      <div>
        <h3 className="text-[14px] mb-4 font-bold">Стоимость</h3>
        <div className="flex-jsb-c gap-2">
          <NumberInput className="max-w-xs" defaultValue={399} label="от" />
          <NumberInput className="max-w-xs" defaultValue={10000} label="до" />
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-[14px] mb-2 font-bold">Дата добавления</h3>
        <div className="flex-jsb-c gap-2">
          <DateRangePicker
            aria-label="Selact data "
            className="max-w-xs"
            label="Stay duration"
          />
        </div>
      </div>

      <Divider className="mt-[73px]" />

      <div className="mt-6">
        <h3 className="text-[14px] mb-2 font-bold">Показывать</h3>
        <div className="flex-jsb-c gap-2">
          <CheckboxGroup>
            <Checkbox value="Неопубликованные">Неопубликованные</Checkbox>
            <Checkbox value="Удаленные">Удаленные</Checkbox>
          </CheckboxGroup>
        </div>
      </div>

      <Divider className="mt-6" />

      <div className="mt-6">
        <h3 className="text-[14px] mb-2 font-bold">
          Дополнительная характеристика
        </h3>
      </div>
    </div>
  );
}

export default Filter;
