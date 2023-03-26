import React from "react";
import nationalHolidaysLocaleUz from "./locale";
import { Box, Container, Grid, Group } from "@mantine/core";
import Header from "@components/Header/Header";
import { Carousel } from "@mantine/carousel";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import DateBox from "@modules/nationalHoliday/components/dateBox";
import data from "./components/dateBox/data";
import GridCart from "@components/GridCard/GridCart";
import TextPart from "@components/Text/TextPart";
import GridCard from "@components/GridCard/GridCart";
import gridData from "@services/api/nationalholidatGrid";
import { Statistics } from "./components/statistics/Statistics";
import statisticsData from "./components/statistics/data";
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
      {/* <Group position="center">
        <DateBox data={data} />
      </Group> */}

      <TextPart
        title={nationalHolidaysLocaleUz.gridCartTitle}
        titleTwo={nationalHolidaysLocaleUz.gridCartTitleTwo}
      />

      <GridCard data={gridData} />

      <TextPart
        title={nationalHolidaysLocaleUz.statisicsTitle}
        titleTwo={nationalHolidaysLocaleUz.statisicsTitleTwo}
      />
      <Box sx={{ width: "80%", margin: "0 auto" }} py={50}>
        <Statistics data={statisticsData} />
      </Box>
    </Box>
  );
};

export default NationalHolidays;
