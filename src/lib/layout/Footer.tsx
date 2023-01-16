import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm">
        {new Date().getFullYear()} -{" "}
        <Link
          href="https://robertoguerra.dev"
          isExternal
          rel="noopener noreferrer"
        >
          robertoguerra.dev
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
