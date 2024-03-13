import { MetaValues, Product, Response, ResponseProduct } from "@/types";
import { api } from "@/utils/axios";

export const getProductById = async (id: string) => {
  const { data } = await api.get<ResponseProduct>(`/catalogs/${id}`);
  return data.data;
};

export const getData = async ({
  page,
  title,
  description,
  productTypes,
}: MetaValues) => {
  const { data } = await api.get<Response<Product[]>>("catalogs", {
    params: {
      "page[number]": page,
      "filter[withTitle]": title,
      "filter[withDescription]": description,
      "filter[product_types]": productTypes,
      "filter[networks]": 5, // Mayma
    },
  });
  //console.log(data);
  return data;
};
