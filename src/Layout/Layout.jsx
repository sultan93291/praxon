import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import AosProvider from "@/providers/AOS/AosProvider";

function Layout() {
  const location = useLocation();

  return (
    <div>
      <AosProvider>
        <ScrollRestoration></ScrollRestoration>
        <Navbar />
        <main >
          <Outlet />
        </main>
        <div
          className={ `${
            location.pathname === "/about-us" ? "mt-[-60px] relative z-5" : ""
          }`}
        >
          <Footer />
        </div>
      </AosProvider>
    </div>
  );
}

export default Layout;
