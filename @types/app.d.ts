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
    modalKP: boolean;
  };
}

interface IProducts {
  article: string;
  category: number;
  description: string;
  id: number;
  is_published: boolean;
  name: string;
  unit: number;
  created_at: string;
  updated_at: string;
}

interface ICategoryItem {
  id: number;
  name: string;
  root_category: null | number;
  updated_at: string;
  created_at: string;
}
