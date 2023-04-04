import React from "react";
import carRentalsLocaleUz from "./locale";
import CarHeader from "./components/Header/Header";
import TextPart from "@components/Text/TextPart";
import Service from "./components/Service/Service"
type Props = {};

const CarRentals = (props: Props) => {
  return (
    <>
      <CarHeader />
      <TextPart
        title={carRentalsLocaleUz.servicesTitle}
        titleTwo={carRentalsLocaleUz.servicesTitleTwo}
      />
      <Service />
      <TextPart
        title={carRentalsLocaleUz.aboutTitle}
        titleTwo={carRentalsLocaleUz.aboutTitleTwo}
      />
    </>
  );
};
export default CarRentals;
