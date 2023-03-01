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
          {/* filter */}
          <Box className={classes.filter}>
            <Text>Select Price</Text>
            <RangeSlider
              labelAlwaysOn
              defaultValue={[10, 80]}
              classNames={classes}
            />
            <Text>Category</Text>
            <Checkbox label="I agree to sell my privacy" />
            <Checkbox label="I agree to sell my privacy" />
            <Checkbox label="I agree to sell my privacy" />
            <Checkbox label="I agree to sell my privacy" />
          </Box>
        </Box>
        <Box className={classes.item__right}>
          <CardSearchResault data={cardSerchResault} />
        </Box>
      </Box>
    </Box>
  );
};
export default Hotel;
