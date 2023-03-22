import React from "react";
import nationalHolidaysLocaleUz from "./locale";
import { Box, Container } from "@mantine/core";
import Header from "@components/Header/Header";
import { Carousel } from "@mantine/carousel";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import DateBox from "@modules/nationalHoliday/components/dateBox";
import data from "./components/dateBox/data";
type Props = {};

const NationalHolidays = (props: Props) => {
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <Carousel
        maw={"100%"}
        mx="auto"
        height={"100vh"}
        nextControlIcon={<IconArrowRight size={16} />}
        previousControlIcon={<IconArrowLeft size={16} />}
      >
        <Carousel.Slide maw={"100%"}>
          <Header
            image="/images/namflowers.jpg"
            title={nationalHolidaysLocaleUz.welcome}
            titleTwo={nationalHolidaysLocaleUz.titleTwo}
            p={nationalHolidaysLocaleUz.textMore}
          />
        </Carousel.Slide>
        <Carousel.Slide maw={"100%"}>
          <Header
            image=""
            title={nationalHolidaysLocaleUz.welcome}
            titleTwo={nationalHolidaysLocaleUz.titleTwo}
            p={nationalHolidaysLocaleUz.textMore}
          />
        </Carousel.Slide>
      </Carousel>
      <DateBox data={data} />
    </Box>
  );
};

export default NationalHolidays;
