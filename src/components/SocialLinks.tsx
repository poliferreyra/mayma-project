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
  isRound = true,
  variant = "outline",
  border = "2px",
  fontSize = "15px",
  size = "sm",
  ...restProps
}) => (
  <ChakraLink href={url} isExternal>
    <IconButton
      ariallabel="Social Link"
      icon={icon}
      {...restProps}
      isRound={isRound}
      variant={variant}
      border={border}
      fontSize={fontSize}
      size={size}
    />
  </ChakraLink>
);
