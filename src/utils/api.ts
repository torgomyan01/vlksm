import instance from "../../axios-config";

export const GetProducts = () => {
  return instance.get("/catalog/product/");
};
