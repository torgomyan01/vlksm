type IUpdateCategoryType = "category" | "subcategory";

declare interface ICreateCategory {
  name: string;
  parent_id: number;
  icon_name: string;
  icon_code: string;
}

interface IItem {
  name: string;
  children: IItem[]; // միայն array
}

interface IModalsState {
  modals: {
    modalQuickView: boolean;
  };
}
