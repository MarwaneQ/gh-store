import CTA from "@/components/ui/CTA";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import "@/styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [header, setHeader] = useState({
    title: "",
    breadcrumbs: [],
    isHome: true,
  });
  useEffect(() => {
    if (Component.getHeader) setHeader(Component.getHeader);
  }, [Component]);

  return (
    <>
      <Header
        title={header.title}
        breadcrumbs={header.breadcrumbs}
        isHome={header.isHome}
      />

      <Component {...pageProps} />

      <CTA />
      <Footer />
    </>
  );
}
