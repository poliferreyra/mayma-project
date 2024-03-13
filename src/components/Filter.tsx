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
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { ChangeEvent, useState } from "react";
import { IoClose, IoSearchSharp } from "react-icons/io5";
import Select, { MultiValue } from "react-select";

import { Option } from "@/types";
import { MetaValues } from "@/types";

interface FiltersProps {
  meta: MetaValues;
  setMeta: React.Dispatch<React.SetStateAction<MetaValues>>;
}

interface FormValues {
  title: string;
  description: string;
  productTypes: Option[];
}

const initFormValues = {
  title: "",
  description: "",
  productTypes: [],
};

const options = [
  { value: "producto", label: "Producto" },
  { value: "servicio", label: "Servicio" },
];
export const Filter: React.FC<FiltersProps> = ({ meta, setMeta }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [filterValue, setFilterValue] = useState<FormValues>({
    ...initFormValues,
  });
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterValue({ ...filterValue, [e.target.name]: e.target.value });
  };
  //console.log(filterValue);

  const handleSelectChange = (selectedOptions: MultiValue<Option>) => {
    setFilterValue({
      ...filterValue,
      productTypes: selectedOptions as Option[],
    });
  };

  const deleteFilter = () => {
    setMeta({
      page: 1,
      title: "",
      description: "",
      productTypes: "",
    });
  };

  const handleSubmit = () => {
    const updatedMeta = {
      ...meta,
      title: filterValue.title,
      description: filterValue.description,
      productTypes: filterValue.productTypes
        .map((option) => option.value)
        .join(","),
      page: 1,
    };
    setMeta(updatedMeta);
    onClose();
  };

  return (
    <>
      <Stack direction={{base:"column", sm:"row"}} mb={5} justifyContent={"end"}>
        <Button
          rightIcon={<IoClose />}
          variant="outline"
          onClick={deleteFilter}
        >
          Eliminar Filtros
        </Button>
        <Button rightIcon={<IoSearchSharp />} onClick={onOpen}>
          Búsqueda avanzada
        </Button>
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

                <Box>
                  <FormLabel htmlFor="owner">Tipo de Producto</FormLabel>
                  <Select
                    isMulti
                    value={filterValue.productTypes}
                    onChange={handleSelectChange}
                    options={options}
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
              <Button
                bg="#d43f3a"
                color="white"
                rightIcon={<IoSearchSharp />}
                type="submit"
              >
                Buscar
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </form>
      </Drawer>
    </>
  );
};
