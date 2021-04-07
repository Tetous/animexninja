import Head from "next/head"

const Layout = ({ children,title="Fast Anime" }) => {
  return (
    <div className="w-full justify-center items-center min-h-screen lg:h-full lg:w-10/12">
      <Head>
        <title>{title}</title>
    <meta name="google-site-verification" content="eMwVowoAMnT6_dVHIiA8F12nnffL8WH1HC_2X40Pgww" />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
