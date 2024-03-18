import { HStack, IconButton, Skeleton, Tag } from "@chakra-ui/react";
import { useEffect } from "react";
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
  isLoading: boolean;

  setMeta: React.Dispatch<React.SetStateAction<Values>>;
}

export const Pagination: React.FC<PaginationProps> = ({
  page,
  meta,
  setMeta,
  isLoading,
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
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [page]);

  return (
    <HStack justifyContent={"center"} mt={9}>
      {isLoading ? (
        <>
          <Skeleton w="40px" h="40px" />
          <Skeleton w="40px" h="40px" />
          <Skeleton w="40px" h="40px" />
        </>
      ) : (
        <>
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
        </>
      )}
    </HStack>
  );
};
