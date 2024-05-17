import { useEffect, useState } from "react";

import { getFilterData } from "@/services/product.service";

interface EntityType {
  id: number;
  name: string;
}

export const useEntityTypes = () => {
  const [entityTypes, setEntityTypes] = useState<EntityType[]>([]);

  useEffect(() => {
    const getEntityTypes = async () => {
      try {
        const { entity_types } = await getFilterData();
        const entityData = [...entity_types];
        console.log(entityData);
        setEntityTypes(entityData);
        console.log(entityTypes);
      } catch (error) {
        console.error('Error fetching entity types:', error);
      }
    };
    getEntityTypes();
  }, []);
  return {
    entityTypes,
  };
};
