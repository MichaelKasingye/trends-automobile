import Head from "next/head";

const Meta = ({ title, keywords, description, siteLink, image }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteLink} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />

      <meta property="twitter:card" content={title} />
      <meta property="twitter:url" content={siteLink} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* <!-- Favicons --> */}
      <link href="assets/img/favicon.png" rel="icon" />
      <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Trends-automobile",
  keywords: "Cars , Uganda",
  description: "Get Car service and Upgrade",
  image: "https://stellacenter.vercel.app/assets/img/logo/logosc.jpeg",
  siteLink: "",
};

export default Meta;
