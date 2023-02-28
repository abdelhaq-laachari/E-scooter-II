import "@/styles/globals.css";
import Sidebar from "../components/Sidebar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Sidebar> */}
      <Component {...pageProps} />
      <ToastContainer />
      {/* </Sidebar> */}
    </>
  );
}
