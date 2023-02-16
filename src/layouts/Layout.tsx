import { ReactNode } from "react";
import Navbar from "@components/Navbar/Navbar";
import DarkmodeLocale from "@components/DarkmodeLocale/DarkmodeLocale";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children, ...props }: Props) => {
  return (
    <>
      <Navbar />
      <DarkmodeLocale />
      <main {...props}>{children}</main>
    </>
  );
};
export default Layout;
