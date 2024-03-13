import { HStack, IconButton, Tag } from "@chakra-ui/react";
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
    <HStack justifyContent={"center"} mt={9}>
      <IconButton
        icon={<FaChevronLeft />}
        variant="outline"
        color="primary.default"
        size="sm"
        aria-label="Prev page"
        onClick={handlePrevPage}
        isDisabled={page === 1}
      ></IconButton>
      <Tag bg={"transparent"} color="primary.default" size="lg">
        {page}
      </Tag>
      <IconButton
        icon={<FaChevronRight />}
        variant="outline"
        color="primary.default"
        size={"sm"}
        aria-label="Next page"
        onClick={handleNextPage}
      ></IconButton>
    </HStack>
  );
};
