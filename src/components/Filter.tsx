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
  Select,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { IoClose, IoSearchSharp } from "react-icons/io5";

export const Filter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Stack direction="row" mb={5} justifyContent={"end"}>
        <Button
          rightIcon={<IoSearchSharp />}
          bg="#d43f3a"
          color="white"
          onClick={onOpen}
        >
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
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Búsqueda avanzada</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel>Título</FormLabel>
                <Input name="title" placeholder="Título de publicación" />
              </Box>
              <Box>
                <FormLabel>Descripción</FormLabel>
                <Input name="description" placeholder="Palabra clave" />
              </Box>

              <Box>
                <FormLabel htmlFor="owner">Tipo de Producto</FormLabel>
                <Select name="prodType" placeholder="Seleccionar">
                  <option value="segun">Segun Adebayo</option>
                  <option value="kola">Kola Tioluwani</option>
                </Select>
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
            <Button bg="#d43f3a" color="white" rightIcon={<IoSearchSharp />}>
              Buscar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
