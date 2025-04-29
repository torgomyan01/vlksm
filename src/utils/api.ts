import instance from "../../axios-config";

export const GetProducts = (page_size: number, page: number) => {
  return instance.get("/catalog/product/", {
    params: {
      page_size,
      page,
    },
  });
};

export const GetCategories = () => {
  return instance.get("/catalog/product-category/");
};

export const UserLogin = (username: string, password: string) => {
  return instance.post("/auth/token/", {
    username,
    password,
  });
};
