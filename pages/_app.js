import Head from "next/head";
import "../styles/globals.css";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";

// Import Swiper styles
// import "swiper/swiper.scss";

import "../styles/custom.scss";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Provider } from "react-redux";
import AppReducer from "../redux/reducers";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { createStore } from "redux";

const store = createStore(AppReducer);
const persistor = persistStore(store);

import { Layout } from "./_layout";

function MyApp({ Component, pageProps }) {
  return (
    <html lang="fa" dir="rtl">
      <Head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, 
     user-scalable=no"
        />
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.rtl.min.css"
          integrity="sha384-gXt9imSW0VcJVHezoNQsP+TNrjYXoGcrqBZJpry9zJt8PCQjobwmhMGaDHTASo9N"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
        /> */}
      </Head>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </html>
  );
}

export default MyApp;
