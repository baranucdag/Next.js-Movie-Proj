"user clients"
import { ThemeProvider } from "next-themes";
import React from "react";

const Providers = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
