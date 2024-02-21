import { Button, HStack, Tag } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export interface Values {
  page: number;
  title: string;
  description: string;
  productTypes: string;
}

interface PaginationProps {
  page: number;
  meta: Values;

  setMeta: React.Dispatch<React.SetStateAction<Values>>;
}

export const Pagination: React.FC<PaginationProps> = ({
  page,
  meta,
  setMeta,
}) => {
  const handlePrevPage = () => {
    if (meta.page > 1)
      setMeta({
        ...meta,
        page: meta.page - 1,
      });
  };

  const handleNextPage = () => {
    setMeta({
      ...meta,
      page: meta.page + 1,
    });
  };

  return (
    <HStack justifyContent={"center"} spacing={4} mt={9}>
      <Button
        leftIcon={<FaChevronLeft />}
        variant="outline"
        onClick={handlePrevPage}
        isDisabled={page === 1}
      ></Button>
      <Tag>{page}</Tag>
      <Button
        rightIcon={<FaChevronRight />}
        variant="outline"
        onClick={handleNextPage}
      ></Button>
    </HStack>
  );
};
