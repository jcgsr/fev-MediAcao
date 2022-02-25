import * as React from "react";

import Header from "./header";
import Footer from "./footer";
import "./layout.css";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {/* className="animate__animated animate__fadeIn" */}
      <div>
        <motion.main
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{
            type: "spring",
            mass: 0.35,
            stiffness: 75,
            duration: 0.3,
          }}
        >
          <main>{children}</main>
        </motion.main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
