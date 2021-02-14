import Footer from "../components/Footer";
import Head from "next/head";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import ProjectList from "../components/ProjectList";
import "../styles/globals.css";

function MyApp() {
  return (
    <>
      <Head>
        <title>Miki Namsrai</title>
        <meta
          property="og:title"
          key="title"
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <Navbar />
      <Intro />
      <ProjectList />
      <Footer />
    </>
  );
}

export default MyApp;
