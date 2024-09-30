import { MetaValues, Product, Response } from "@/types";
import { api } from "@/utils/axios";

export const getProductById = async (id: string) => {
  const { data } = await api.get<Response<Product>>(`/catalogs/${id}`);
  return data.data;
};

export const getData = async ({
  page,
  title,
  description,
  productTypes,
  entityType,
}: MetaValues) => {
  const { data } = await api.get<Response<Product[]>>("catalogs", {
    params: {
      "page[number]": page,
      "filter[withTitle]": title,
      "filter[withDescription]": description,
      "filter[product_types]": productTypes,
      "filter[inEntityType]": entityType === "0" ? "" : entityType,
      // "filter[networks]": 5, // Mayma

      // se agrega include para renderizar de manera temporal
      include: "networks",
    },
  });
 
  return data;
};

export const getFilterData = async () => {
  const { data } = await api.get("catalogs/filters", {
    params: {
      "filter[networks]": 5, // Mayma
    },
  });
  return data;
};
