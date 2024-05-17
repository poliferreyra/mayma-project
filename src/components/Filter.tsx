import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  Skeleton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { ChangeEvent, useState } from "react";
import { IoClose, IoSearchSharp } from "react-icons/io5";
import Select, { MultiValue } from "react-select";

import { useEntityTypes } from "@/components/hook/useEntityTypes";
import { Option } from "@/types";
import { MetaValues } from "@/types";
// import { entityTypes } from "@/utils/utils";

interface FiltersProps {
  meta: MetaValues;
  setMeta: React.Dispatch<React.SetStateAction<MetaValues>>;
  isLoading: boolean;
}

interface FormValues {
  title: string;
  description: string;
  productTypes: Option[];
  entityType: Option[];
}

const initFormValues = {
  title: "",
  description: "",
  productTypes: [],
  entityType: [],
};

const options = [
  { value: "producto", label: "Producto" },
  { value: "servicio", label: "Servicio" },
];

export const Filter: React.FC<FiltersProps> = ({
  meta,
  setMeta,
  isLoading,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { entityTypes } = useEntityTypes();

  // options => filter Select
  const createOptEntityTypes = () => {
    return entityTypes.map((entity) => ({
      value: entity.id.toString(),
      label: entity.name,
    }));
  };

  const optionsEntityType = createOptEntityTypes();

 console.log(optionsEntityType)

  const [filterValue, setFilterValue] = useState<FormValues>({
    ...initFormValues,
  });
  const btnRef = React.useRef<HTMLButtonElement>(null);

  // handle filter - select - submit
  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterValue({ ...filterValue, [e.target.name]: e.target.value });
  };

  const handleProductTypes = (selectedOptions: MultiValue<Option>) => {
    setFilterValue({
      ...filterValue,
      productTypes: selectedOptions as Option[],
    });
  };

  const handleEntityTypes = (selectedOptions: MultiValue<Option>) => {
    setFilterValue({
      ...filterValue,
      entityType: selectedOptions as Option[],
    });
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedMeta = {
      ...meta,
      title: filterValue.title,
      description: filterValue.description,
      productTypes: filterValue.productTypes
        .map((option) => option.value)
        .join(","),
      entityType: filterValue.entityType
        .map((option) => option.value)
        .join(","),
      page: 1,
    };
    setMeta(updatedMeta);
    onClose();
  };

  const deleteFilter = () => {
    setFilterValue({ ...initFormValues });
    setMeta({
      page: 1,
      title: "",
      description: "",
      productTypes: "",
      entityType: "",
    });
  };

  return (
    <>
      <Stack
        direction={{ base: "column", sm: "row" }}
        mb={5}
        justifyContent={"end"}
      >
        {(isLoading && meta.title) ||
        (isLoading && meta.description) ||
        (isLoading && meta.productTypes) ||
        (isLoading && meta.entityType) ? (
          <Skeleton borderRadius="10px">
            <Button size={"lg"}>Eliminar Filtros</Button>
          </Skeleton>
        ) : (
          (meta.title ||
            meta.description ||
            meta.productTypes ||
            meta.entityType) && (
            <Button
              rightIcon={<IoClose />}
              variant="outline"
              onClick={deleteFilter}
            >
              Eliminar Filtros
            </Button>
          )
        )}

        {!isLoading && (
          <Button rightIcon={<IoSearchSharp />} onClick={onOpen}>
            Búsqueda avanzada
          </Button>
        )}
      </Stack>

      <Drawer
        isOpen={isOpen}
        placement="right"
        finalFocusRef={btnRef}
        onClose={onClose}
      >
        <DrawerOverlay />
        <form onSubmit={handleSubmit}>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              Búsqueda avanzada
            </DrawerHeader>

            <DrawerBody>
              <Stack spacing="24px">
                <Box>
                  <FormLabel htmlFor="owner">Tipo de Producto</FormLabel>
                  <Select
                    isMulti
                    value={filterValue.productTypes}
                    onChange={handleProductTypes}
                    options={options}
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="owner">Tipo de Organización</FormLabel>
                  <Select
                    isMulti
                    value={filterValue.entityType}
                    onChange={handleEntityTypes}
                    options={optionsEntityType}
                  />
                </Box>
                <Box>
                  <FormLabel>Título</FormLabel>
                  <Input
                    name="title"
                    placeholder="Título de publicación"
                    value={filterValue.title}
                    onChange={handleFilter}
                  />
                </Box>
                <Box>
                  <FormLabel>Descripción</FormLabel>
                  <Input
                    name="description"
                    placeholder="Palabra clave"
                    value={filterValue.description}
                    onChange={handleFilter}
                  />
                </Box>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button
                variant="outline"
                mr={3}
                onClick={onClose}
                rightIcon={<IoClose />}
              >
                Cerrar
              </Button>
              <Button color="white" rightIcon={<IoSearchSharp />} type="submit">
                Buscar
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </form>
      </Drawer>
    </>
  );
};
