import { Product, Response, ResponseProduct } from "@/types";
import { api } from "@/utils/axios";

export const getProductById = async (id: string) => {
  const { data } = await api.get<ResponseProduct>(`/catalogs/${id}`);
  return data.data;
};

export const getData = async () => {
  const { data } = await api.get<Response<Product[]>>("catalogs");

  console.log(data);
  return data;
};
