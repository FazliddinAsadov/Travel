import React, { useState } from "react";
import hotelLocaleUz from "./locale";
import {
  Autocomplete,
  BackgroundImage,
  Box,
  Button,
  Checkbox,
  Group,
  RangeSlider,
  Text,
} from "@mantine/core";
import useStyles from "./Style/hotelStyle";
import {
  Calendar,
  DateRangePicker,
  DateRangePickerValue,
} from "@mantine/dates";
import "dayjs/locale/de";
import CardSearchResault from "@components/CardSearchResault/CartSearchResault";
import cardSerchResault from "@components/CardSearchResault/data/data";
import { AiFillStar } from "react-icons/ai";
import Pagenation from "@components/Pagination/Pagination";
import Maps from "@components/map/Map";
import CardSquare from "@components/CardSqure/CardSquare";
import dataPopularHotel from "./components/dataPopularHotel";
import TextPart from "@components/Text/TextPart";
type Props = {};

const Hotel = (props: Props) => {
  const { classes } = useStyles();
  const [value, setValue] = useState<DateRangePickerValue>([
    new Date(2021, 11, 1),
    new Date(2021, 11, 5),
  ]);
  return (
    <Box className={classes.head}>
      <BackgroundImage
        src="https://namangansquare.com/wp-content/uploads/2020/05/nsq-apartments-img-80.jpg"
        // src={imgBg}
        radius="sm"
        className={classes.background}
      >
        <Box className={classes.backdrop}>
          <Box className={classes.inputGroup}>
            <Group className={classes.inputItem}>
              <Autocomplete
                placeholder="Enter your Address"
                label={hotelLocaleUz.location}
                withAsterisk
                data={["Namangan", "Chust", "Chortoq", "Pop"]}
              />
              <DateRangePicker
                label="Select Date"
                placeholder="Enter your Date"
                value={value}
                onChange={setValue}
              />
              <Autocomplete
                label="Select Room"
                placeholder="Enter your Room"
                data={["1x", "2x", "3x", "4x", "5x"]}
              />
              <Autocomplete
                label="Person"
                placeholder="Person"
                data={["1-3", "3-5", "5-7"]}
              />
              <Button className={classes.searchBtn}>
                {hotelLocaleUz.btnSearch}
              </Button>
            </Group>
          </Box>
        </Box>
      </BackgroundImage>
      <Box className={classes.group}>
        <Box className={classes.item__left}>
          <Box className={classes.cart__search}>
            <Group position="center">
              <Autocomplete
                placeholder="Enter your Address"
                label={hotelLocaleUz.location}
                withAsterisk
                data={["Namangan", "Chust", "Chortoq", "Pop"]}
              />
              <DateRangePicker
                label="Select Date"
                placeholder="Enter your Date"
                value={value}
                onChange={setValue}
              />
              <Autocomplete
                label="Select Room"
                placeholder="Enter your Room"
                data={["1x", "2x", "3x", "4x", "5x"]}
              />
              <Autocomplete
                label="Person"
                placeholder="Person"
                data={["1-3", "3-5", "5-7"]}
              />
              <Button>{hotelLocaleUz.btnSearch}</Button>
            </Group>
          </Box>
          <Box>
            <Maps width={200} height={100} />
          </Box>
          {/* filter */}
          <Box className={classes.filter}>
            <Text className={classes.title}>Select Price</Text>
            <RangeSlider
              labelAlwaysOn
              defaultValue={[10, 80]}
              classNames={classes}
            />
            <Text>Category</Text>
            <Checkbox label="Holel" />
            <Checkbox label="Villa" />
            <Checkbox label="Special" />
            <Checkbox label="Appartmen" />
          </Box>
          <Box className={classes.filter}>
            <Text className={classes.title}>Star Category</Text>
            <Box>
              <Box className={classes.star__flex}>
                <Text>3 Star</Text>
                <Box className={classes.icon__star}>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </Box>
              </Box>
              <Box className={classes.star__flex}>
                <Text>2 Star</Text>
                <Box className={classes.icon__star}>
                  <AiFillStar />
                  <AiFillStar />
                </Box>
              </Box>
              <Box className={classes.star__flex}>
                <Text>1 Star</Text>
                <Box className={classes.icon__star}>
                  <AiFillStar />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.item__right}>
          <CardSearchResault data={cardSerchResault} />
          <Pagenation />
        </Box>
      </Box>
      <TextPart
        title={hotelLocaleUz.popularHotelTitle}
        titleTwo={hotelLocaleUz.popularHotelDescr}
      />
      <CardSquare data={dataPopularHotel} />
    </Box>
  );
};
export default Hotel;
