import { Link as ChakraLink } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface SocialLinksProps {
  url: string;
  icon: IconType;
  color?: string;
  size?: string;
  _hover?: {
    color: string;
  };
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  url,
  icon: Icon,
  color,
  size,
  _hover,
}) => (
  <ChakraLink
    href={url}
    isExternal
    color={color}
    _hover={_hover ? { color: _hover.color } : undefined}
  >
    <Icon size={size} />
  </ChakraLink>
);
