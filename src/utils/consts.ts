export const SITE_URL = {
  HOME: "/",
  CATALOG: "/catalog",
  PRODUCT: "/product",
  CHANGE_PRODUCT: "/change-product",
};

const PrintItem = (name: string, children: IItem[] = []): IItem => {
  return {
    name,
    children,
  };
};

export const localStorageKeys = {
  accessToken: "accessToken",
  refreshToken: "refreshToken",
};

const child = [
  "Коммутаторы сигналов",
  "Матричные коммутаторы",
  "Удлинители сигналов по витой паре",
  "Удлинители сигналов по оптике",
  "IP",
  "Разветвители сигналов",
  "Преобразователи сигналов",
];

const menuItems = [
  "Коммутация и передача сигналов",
  "Оборудование для ВКС",
  "Видеокамеры",
  "Отображение информации",
  "Звук",
  "Системы управления",
];

export const filterMenu: IItem[] = menuItems.map((item) =>
  PrintItem(
    item,
    child.map((c) =>
      PrintItem(
        c,
        child.map((c) => PrintItem(c)),
      ),
    ),
  ),
);

export const productItem = [
  {
    name: "HD cервер видеоконференции",
    code: "ЦТРС.468587.400.10.008",
    price: "13 234 ₽",
  },
  {
    name: "Терминал ВКС стоечный (кодек системы)",
    code: "ЦТРС.468587.400.10.001",
    price: "13 234 ₽",
  },
  {
    name: "Терминал ВКС (кодек системы) rev.2",
    code: "ЦТРС.468587.400.10.009",
    price: "13 234 ₽",
  },
  {
    name: "Терминал ВКС с поворотной камерой FullHD 12х (кодек системы)",
    code: "ЦТРС.468587.400.10.002",
    price: "13 234 ₽",
  },
  {
    name: "Терминал, 1xHDMI вход, 1xDVI вход, 2xHDMI выход, RJ45, аудиовход, аудиовыход...",
    code: "ЦТРС.468587.400.10.007",
    price: "13 234 ₽",
  },
  {
    name: "Мини терминал с камерой (кодек системы)",
    code: "ЦТРС.468587.400.10.003",
    price: "13 234 ₽",
  },
  {
    name: "Терминал ВКС 4K",
    code: "ЦТРС.468587.400.10.013",
    price: "13 234 ₽",
  },
  {
    name: "Презентационный коммутатор 5:1 с аудио микшером",
    code: "ЦТРС.468587.400.10.008",
    price: "13 234 ₽",
  },
  {
    name: "Коммутатор HDMI 3×1",
    code: "ЦТРС.468587.400.10.008",
    price: "13 234 ₽",
  },
  {
    name: "Коммутатор HDMI 5×1",
    code: "ЦТРС.468587.400.10.008",
    price: "13 234 ₽",
  },
  {
    name: "Коммутатор 4 на 1 HDMI с деэмблированием аудио",
    code: "ЦТРС.468587.400.10.008",
    price: "13 234 ₽",
  },
  {
    name: "Сетевой коммутатор 24 PoE",
    code: "ЦТРС.468587.400.10.008",
    price: "13 234 ₽",
  },
];
