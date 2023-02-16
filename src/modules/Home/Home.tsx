import TextPart from "@components/Text/TextPart";
import PopularCart from "@modules/Home/components/Popular/PopularCart";
import Services from "@modules/Home/components/Services/Services";
import { NextPage } from "next";
import Header from "./components/Header/Header";
import { homeLocaleEn } from "./locale";

const Home: NextPage = () => {
  return (
    <div>
      {/* <Spinner /> */}
      <Header />
      <TextPart
        title={homeLocaleEn.popularTitle}
        titleTwo={homeLocaleEn.popularTitleTwo}
      />
      <PopularCart />
      <TextPart
        title={homeLocaleEn.servicesTitle}
        titleTwo={homeLocaleEn.servicesTitleTwo}
      />
      <Services />
    </div>
  );
};
export default Home;
