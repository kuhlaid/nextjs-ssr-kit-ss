import * as React from "react";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import toast from "lib/components/App/Toast";
import { withRedux } from "lib/store";
import "react-toastify/dist/ReactToastify.css";
import { AppProps, ReactElement } from "lib/types";
import "bootstrap/dist/css/bootstrap.min.css";

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  React.useEffect(() => {
    toast({ type: "info", message: "Welcome to the NextJS SSR Kit!" });
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <div id="app">
        <Component {...pageProps} />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={7500}
        hideProgressBar={false}
        newestOnTop={false}
        draggable
        pauseOnHover
      />
    </>
  );
};

export default withRedux(App);
