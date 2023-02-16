import { ReactNode } from "react";
import Navbar from "@components/Navbar/Navbar";
import navLink from "@components/Navbar/components/data";
import DarkMode from "@components/darkMode/DarkLightMode";
import DarkmodeLocale from "@components/DarkmodeLocale/DarkmodeLocale";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children, ...props }: Props) => {
  return (
    <>
      <Navbar />
      <DarkmodeLocale/>
      <main {...props}>{children}</main>
    </>
  );
};
export default Layout;
