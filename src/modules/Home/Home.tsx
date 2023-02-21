import TextPart from "@components/Text/TextPart";
import PopularCart from "@modules/Home/components/Popular/PopularCart";
import Services from "@modules/Home/components/Services/Services";
import { NextPage } from "next";
import Header from "./components/Header/Header";
import { homeLocaleEn } from "./locale";
import Card from "@components/Card/Card";
import Maps from "@components/map/Map";

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
      <TextPart
        title={homeLocaleEn.mapTitle}
        titleTwo={homeLocaleEn.mapTitleTwo}
      />
      <Maps />
      <TextPart
        title={homeLocaleEn.cilentTitle}
        titleTwo={homeLocaleEn.cilentTitleTwo}
      />
      <Card />
    </div>
  );
};
export default Home;
