import DarkmodeLocale from "@components/DarkmodeLocale/DarkmodeLocale";
import Navbar from "@components/Navbar/Navbar";
import navLink from "@components/Navbar/components/data";
import { Footer } from "@components/footer/Footer";
import { ReactNode } from "react";
interface Props {
  children?: ReactNode;
}

const Layout = ({ children, ...props }: Props) => {
  return (
    <>
      <Navbar />
      <DarkmodeLocale />
      <main {...props}>{children}</main>
      <Footer links={navLink} />
    </>
  );
};
export default Layout;
