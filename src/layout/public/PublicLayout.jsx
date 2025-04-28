import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import AnimatedBackground from "../../components/animations/AnimatedBackground";

const PublicLayout = () => {
  return (
    <>
      {/* Fondo con framer-motion */}
      <AnimatedBackground />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default PublicLayout;
