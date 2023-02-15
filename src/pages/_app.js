import "../styles/globals.css";
// import { AuthProvider } from '../context/AuthContext';
import Layout from "../../components/Layout/Layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}