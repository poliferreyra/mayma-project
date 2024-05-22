import { useEffect, useState } from "react";

import { getFilterData } from "@/services/product.service";

interface EntityType {
  id: number;
  name: string;
}

export const useFiltersTypes = () => {
  const [entityTypes, setEntityTypes] = useState<EntityType[]>([]);
  const [productTypes, setProductTypes] = useState([]);

  useEffect(() => {
    const getEntityTypes = async () => {
      try {
        const { entity_types, product_types } = await getFilterData();
        const entityData = [{ id: 0, name: "Todos" }, ...entity_types];

        setEntityTypes(entityData);
        setProductTypes(product_types);
      } catch (error) {
        console.error("Error al hacer la petición:", error);
        throw error;
      }
    };
    getEntityTypes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    entityTypes,
    productTypes,
  };
};
