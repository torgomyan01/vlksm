export const RandomKey = (length = 5) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export const encodeImageFileAsURL = (
  file: any,
  callback: (res: any) => void,
) => {
  const reader = new FileReader();
  reader.onloadend = function () {
    callback(reader.result);
  };
  reader.readAsDataURL(file);
};

export const buildTree = (data: ICategoryItem[]) => {
  const map: any = {};
  const roots: any = [];

  // Քարտեզում պահում ենք id-ով
  data.forEach((item) => {
    map[item.id] = { ...item, children: [] };
  });

  // Կազմում ենք ծառը
  data.forEach((item) => {
    if (item.root_category === null) {
      roots.push(map[item.id]); // Եթե չունի ծնող՝ top-level
    } else if (map[item.root_category]) {
      map[item.root_category].children.push(map[item.id]); // Հակառակ դեպքում դառնում է իր ծնողի երեխա
    }
  });

  return roots;
};
