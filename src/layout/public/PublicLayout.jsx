import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";

const PublicLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton /> {/* Aquí lo agregamos */}
    </>
  );
};

export default PublicLayout;
