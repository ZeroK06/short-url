import React from "react";
import { Inter } from "@next/font/google";
const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const RootLayout = ({ children }) => {
  return <div className={inter.className}>{children}</div>;
};

export default RootLayout;