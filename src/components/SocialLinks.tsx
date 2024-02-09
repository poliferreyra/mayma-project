import {
  IconButton,
  IconButtonProps,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { ReactElement } from "react";

interface SocialLinkProps extends Omit<IconButtonProps, "icon"> {
  url: string;
  arialLabel?: string;
  icon: ReactElement;
}

export const SocialLinks: React.FC<SocialLinkProps> = ({
  url,
  icon,
  ...restProps
}) => (
  <ChakraLink href={url} isExternal>
    <IconButton arialLabel="Social Link" icon={icon} {...restProps} />
  </ChakraLink>
);
