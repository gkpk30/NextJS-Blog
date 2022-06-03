import Footer from "./Footer";
import TopBar from "./TopBar";
import Head from "next/head"



const Layout = ({children}) => {
  return (
        <>
          <Head>
            <title>Salon Blog</title>
            <meta name="description" content="some content here"/>

          </Head>
          <div className=" min-h-screen flex flex-col font-fourth  ">
              <TopBar className=""/>
                  <main className="flex-grow">
                  {children}
                  </main>
              <Footer/>
          </div>
        </>
  );
};
export default Layout;