/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: `Domínio a venda - ${process.env.NEXT_PUBLIC_URL}`,
  titleTemplate: `s | ${process.env.NEXT_PUBLIC_URL}`,
  defaultTitle: "Domínio a venda",
  description: "Este domínio está à venda",
  canonical: process.env.NEXT_PUBLIC_URL,
  openGraph: {
    url: process.env.NEXT_PUBLIC_URL,
    title: "Dominio a venda",
    description: "Este domínio está à venda",
    images: [
      {
        url: "https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: `${process.env.NEXT_PUBLIC_URL} og-image`,
      },
    ],
    site_name: "domínio a venda",
  },
  twitter: {
    handle: "@dev_guerra",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
