import { useState } from "react";
import Footer from "./Footer";
import TopBar from "./TopBar";
import Head from "next/head";
import Banner from "./Banner";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(true);

  //our callback function
  const getVisible = (visibility) => {
    setVisible(visibility);
  };

  return (
    <>
      <Head>
        <title>Salon Blog</title>
        <meta name="description" content="some content here" />
      </Head>
      <div className=" min-h-screen flex flex-col font-fourth  ">
        <div 
        className={classNames(
              visible
                ? "block"
                : "hidden",
              ""
            )}
        >
          <Banner
          // className={classNames(
          //     visible
          //       ? "block"
          //       : "hidden",
          //     ""
          //   )}
          />
        </div>
        <TopBar className="" />
        <main className="flex-grow isolate">{children}</main>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
