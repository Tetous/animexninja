import Head from "next/head"

const Layout = ({ children,title="Fast Anime" }) => {
  return (
    <div className="w-full justify-center items-center min-h-screen lg:h-full lg:w-10/12">
      <Head>
        <title>{title}</title>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GH8ZK8ZV56"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GH8ZK8ZV56');
</script>

      </Head>
      {children}
    </div>
  );
};

export default Layout;
