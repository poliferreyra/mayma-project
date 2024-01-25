import { Link as ChakraLink } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface SocialLinksProps {
  url: string;
  icon: IconType;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  url,
  icon: Icon,
}) => (
  <ChakraLink href={url} isExternal>
    <Icon />
  </ChakraLink>
);
