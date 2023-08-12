import { Flex } from "@chakra-ui/react";
import { NextPageContext } from "next";
import { NextSeo } from "next-seo";

import Sale from "lib/components/sale";

interface Props {
  absoluteUrl: string;
}

const Home = ({ absoluteUrl }: Props) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <NextSeo
        title={`Dominio a venda | ${absoluteUrl}`}
        canonical={`https://www.${absoluteUrl}`}
        description={`Dominio a venda | ${absoluteUrl} `}
        openGraph={{
          url: `https://www.${absoluteUrl}`,
          title: `Dominio a venda | ${absoluteUrl}`,
          images: [
            {
              url: `https://www.${absoluteUrl}/og.png`,
              width: 800,
              height: 600,
              alt: `Dominio a venda | ${absoluteUrl}`,
            },
          ],
          site_name: `Dominio a venda | ${absoluteUrl}`,
        }}
      />
      <Sale absoluteUrl={absoluteUrl} />
    </Flex>
  );
};

export default Home;

export function getServerSideProps(context: NextPageContext) {
  const pathname = context.req!.url === "/" ? "" : context.req!.url;
  const absoluteUrl = context.req!.headers!.host! + pathname;
  return {
    props: {
      pathname,
      absoluteUrl,
    },
  };
}
