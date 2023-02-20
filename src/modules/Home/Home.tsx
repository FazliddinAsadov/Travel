import TextPart from "@components/Text/TextPart";
import PopularCart from "@modules/Home/components/Popular/PopularCart";
import Services from "@modules/Home/components/Services/Services";
import { NextPage } from "next";
import Header from "./components/Header/Header";
import { homeLocaleEn } from "./locale";
import Card from "@components/Card/Card";

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
      <Card/>
      <TextPart
        title={homeLocaleEn.servicesTitle}
        titleTwo={homeLocaleEn.servicesTitleTwo}
      />
      <Services />
    </div>
  );
};
export default Home;
